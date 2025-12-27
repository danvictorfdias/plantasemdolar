export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_STORAGE_KEY = 'utm_params';

export function getUTMParams(): UTMParams {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};

  const utmKeys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ];

  utmKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });

  if (Object.keys(utmParams).length > 0) {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
    return utmParams;
  }

  const stored = localStorage.getItem(UTM_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }

  return {};
}

export function buildURLWithUTM(baseUrl: string, utmParams?: UTMParams): string {
  const params = utmParams || getUTMParams();

  if (Object.keys(params).length === 0) {
    return baseUrl;
  }

  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

export function clearStoredUTM(): void {
  localStorage.removeItem(UTM_STORAGE_KEY);
}
