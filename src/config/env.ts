import "server-only";

const ENV_DEFAULTS = {
  FITLOG_API_URL: "https://api.api-store.workers.dev/api",
  FITLOG_API_REVALIDATE_SECONDS: 3600,
} as const;

function readUrl(key: keyof typeof ENV_DEFAULTS, fallback: string): string {
  const value = process.env[key]?.trim() || fallback;

  try {
    return new URL(value).toString().replace(/\/+$/, "");
  } catch {
    throw new Error(`Invalid environment variable ${key}: "${value}" is not a valid URL.`);
  }
}

function readNonNegativeInt(key: keyof typeof ENV_DEFAULTS, fallback: number): number {
  const value = process.env[key]?.trim();
  if (!value) return fallback;

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 0) {
    throw new Error(`Invalid environment variable ${key}: "${value}" must be a non-negative integer.`);
  }

  return parsed;
}

export const env = {
  FITLOG_API_URL: readUrl("FITLOG_API_URL", ENV_DEFAULTS.FITLOG_API_URL),
  FITLOG_API_REVALIDATE_SECONDS: readNonNegativeInt(
    "FITLOG_API_REVALIDATE_SECONDS",
    ENV_DEFAULTS.FITLOG_API_REVALIDATE_SECONDS,
  ),
} as const;
