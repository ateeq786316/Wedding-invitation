import { wedding } from '../config/wedding'

/**
 * Logs the open to the Google Sheet webhook (once per session).
 * Guest name comes from the ?g= param in the shared link.
 */
export function trackOpen(): void {
  const url = wedding.trackingUrl
  if (!url || sessionStorage.getItem('tracked')) return
  sessionStorage.setItem('tracked', '1')

  const guest =
    new URLSearchParams(window.location.search).get('g')?.trim() || 'direct'

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      g: guest,
      ua: navigator.userAgent,
      ref: document.referrer || '',
    }),
  }).catch(() => {})
}
