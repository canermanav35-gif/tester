import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN_SUFFIX = '_TOKEN';
const DOMAIN_SUFFIX = '_DOMAIN_ID';
const IDENTIFIER_SUFFIX = '_IDENTIFIER';
const PASSWORD_SUFFIX = '_PASSWORD';

const normalizeUserKey = (user?: string) =>
  (user ? String(user).trim().toUpperCase().replace(/[^A-Z0-9]/g, '_') : '');

const tokenCache = new Map<string, { token: string; fetchedAt: number }>();
const baseURL = process.env.API_BASE_URL;

type Credentials = { domainID: string; identifier: string; password: string };

function getEnvToken(userKey: string): string | undefined {
  const key = userKey + TOKEN_SUFFIX;
  return process.env[key];
}

function getCredentials(userKey: string): Credentials | null {
  const domainID = process.env[userKey + DOMAIN_SUFFIX];
  const identifier = process.env[userKey + IDENTIFIER_SUFFIX];
  const password = process.env[userKey + PASSWORD_SUFFIX];

  if (domainID && identifier && password) {
    return { domainID, identifier, password };
  }
  return null;
}

async function loginAndGetToken(user: string, userKey: string): Promise<string> {
  if (!baseURL) {
    throw new Error('Missing API_BASE_URL in environment for login');
  }

  const creds = getCredentials(userKey);
  if (!creds) {
    throw new Error(
      `Missing credentials for user "${user}". Set ${userKey}_DOMAIN_ID, ${userKey}_IDENTIFIER, and ${userKey}_PASSWORD.`
    );
  }

  const response = await axios.post(
    `${baseURL}/api/auth/login`,
    {
      domainID: creds.domainID,
      identifier: creds.identifier,
      password: creds.password,
    },
    { headers: { accept: 'application/json' } }
  );

  const token = response?.data?.data?.auth?.accessToken as string | undefined;
  if (!token) {
    throw new Error('Login did not return an access token');
  }
  tokenCache.set(userKey, { token, fetchedAt: Date.now() });
  return token;
}

export async function getToken(user?: string): Promise<string> {
  const resolvedUser = user || 'admin';
  const userKey = normalizeUserKey(resolvedUser);

  const cached = tokenCache.get(userKey);
  const now = Date.now();
  if (cached && now - cached.fetchedAt < 1000 * 60 * 55) {
    // refresh after ~55 minutes
    return cached.token;
  }

  const envToken = getEnvToken(userKey);
  if (envToken) {
    tokenCache.set(userKey, { token: envToken, fetchedAt: now });
    return envToken;
  }

  return loginAndGetToken(resolvedUser, userKey);
}
