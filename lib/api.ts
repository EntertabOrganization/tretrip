const DEFAULT_API_BASE_URL = "https://tretrip-backend.vercel.app/api";

function getApiBaseUrl() {
  const configuredBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  const isBrowser = typeof window !== "undefined";
  const isLocalPage =
    isBrowser && ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const pointsToLocalhost = configuredBaseUrl
    ? /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(configuredBaseUrl)
    : false;

  if (configuredBaseUrl && (!pointsToLocalhost || isLocalPage)) {
    return configuredBaseUrl.replace(/\/+$/, "");
  }

  return DEFAULT_API_BASE_URL;
}

type ApiResponse<T> = {
  success?: boolean;
  message?: string;
  data?: T;
};

export async function postJson<T>(
  path: string,
  body: unknown,
  fallbackMessage: string
): Promise<ApiResponse<T>> {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || fallbackMessage);
  }

  return result;
}
