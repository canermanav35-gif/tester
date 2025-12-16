import axios from 'axios';
import dotenv from 'dotenv';
import { getToken } from './auth.ts';
import { getMockResponse } from '../mocks/responses.js';
import { replacePlaceholders, normalizeWithFixtures } from './fixtures.ts';

dotenv.config();

const baseURL = process.env.API_BASE_URL;

if (!baseURL) {
  throw new Error('Missing API_BASE_URL in environment');
}

const client = axios.create({
  baseURL,
  timeout: 15000,
  validateStatus: () => true,
});

const useMock = process.env.MOCK === '1';

type SendParams = {
  method?: string;
  url: string;
  data?: any;
  params?: any;
  user?: string;
  headers?: Record<string, any>;
};

export async function send({
  method = 'GET',
  url,
  data,
  params,
  user = 'admin',
  headers: extraHeaders,
}: SendParams) {
  const rawUrl = replacePlaceholders(url);
  const rawData = replacePlaceholders(data);
  const rawParams = replacePlaceholders(params);
  const finalHeaders = replacePlaceholders(extraHeaders);

  const normalized = normalizeWithFixtures({
    url: rawUrl,
    data: rawData,
    params: rawParams,
  });
  const finalUrl = normalized.url;
  const finalData = normalized.data;
  const finalParams = normalized.params;

  if (useMock) {
    const mock = getMockResponse(method, finalUrl);
    if (!mock) {
      throw new Error(`No mock response registered for ${method.toUpperCase()} ${finalUrl}`);
    }
    return mock;
  }

  const token = await getToken(user);
  const headers: Record<string, any> = {
    Authorization: `Bearer ${token}`,
    ...finalHeaders,
  };

  try {
    const response = await client.request({
      method,
      url: finalUrl,
      data: finalData,
      params: finalParams,
      headers,
    });

    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  } catch (err: any) {
    if (err.response) {
      const { status, data: errData } = err.response;
      throw new Error(`Request failed with status ${status}: ${JSON.stringify(errData)}`);
    }
    if (err.request) {
      throw new Error(`No response received: ${err.message}`);
    }
    throw new Error(err.message || 'Unknown error during request');
  }
}
