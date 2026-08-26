type Entry = { count: number; resetAt: number };

const entries = new Map<string, Entry>();
const windowMs = 60_000;
const maxRequests = 5;

export function isRateLimited(key: string) {
  const now = Date.now();
  const entry = entries.get(key);
  if (!entry || entry.resetAt <= now) {
    entries.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > maxRequests;
}