import { PostHog } from "posthog-node";

let posthogClient: PostHog | null = null;

export function getPostHogServer(): PostHog | null {
  const token = import.meta.env.POSTHOG_PROJECT_TOKEN;
  const host = import.meta.env.POSTHOG_HOST;

  if (!token) {
    if (import.meta.env.DEV) {
      console.warn(
        "POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, " +
        "this causes events to be silently missed. This error stops appearing once POSTHOG_PROJECT_TOKEN is configured"
      );
    }
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(token, {
      host: host || "https://us.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    });
  }

  return posthogClient;
}

export function getPhDistinctId(request: Request, token: string): string {
  const cookieName = `ph_${token}_posthog`;
  const cookieHeader = request.headers.get("cookie") || "";
  const phCookie = cookieHeader
    .split(";")
    .find((c) => c.trim().startsWith(cookieName + "="));
  if (phCookie) {
    try {
      const raw = phCookie.split("=").slice(1).join("=");
      const data = JSON.parse(decodeURIComponent(raw));
      if (data.distinct_id) return data.distinct_id;
    } catch {}
  }
  return "anonymous";
}
