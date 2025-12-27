import { supabase } from '../lib/supabase';
import { getUTMParams, buildURLWithUTM } from '../utils/utm';

export interface ClickTrackingData {
  source_url: string;
  destination_url: string;
  button_location: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  user_agent?: string;
  referrer?: string;
}

function trackClickBeacon(destinationUrl: string, buttonLocation: string): void {
  if (!navigator.sendBeacon) {
    trackClickFetch(destinationUrl, buttonLocation);
    return;
  }

  try {
    const utmParams = getUTMParams();
    const trackingData: ClickTrackingData = {
      source_url: window.location.href,
      destination_url: destinationUrl,
      button_location: buttonLocation,
      ...utmParams,
      user_agent: navigator.userAgent,
      referrer: document.referrer || undefined,
    };

    const blob = new Blob([JSON.stringify(trackingData)], { type: 'application/json' });
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const url = `${supabaseUrl}/rest/v1/click_tracking`;
      navigator.sendBeacon(url, blob);
    }
  } catch (error) {
    // Silently fail - tracking should never break UX
  }
}

function trackClickFetch(destinationUrl: string, buttonLocation: string): void {
  try {
    const utmParams = getUTMParams();
    const trackingData: ClickTrackingData = {
      source_url: window.location.href,
      destination_url: destinationUrl,
      button_location: buttonLocation,
      ...utmParams,
      user_agent: navigator.userAgent,
      referrer: document.referrer || undefined,
    };

    supabase.from('click_tracking').insert(trackingData).then().catch(() => {});
  } catch (error) {
    // Silently fail - tracking should never break UX
  }
}

export function trackAndRedirect(
  destinationUrl: string,
  buttonLocation: string
): string {
  const urlWithUTM = buildURLWithUTM(destinationUrl);

  trackClickBeacon(urlWithUTM, buttonLocation);

  return urlWithUTM;
}
