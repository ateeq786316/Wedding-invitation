import { wedding } from '../config/wedding'

/**
 * Silently logs the open to the Google Sheet webhook (once per session).
 * Captures device, city/IP (via ipapi.co), referrer, screen, language.
 * Optional ?g=name tag in shared links is also logged.
 */
export async function trackOpen(): Promise<void> {
  const url = wedding.trackingUrl
  if (!url || sessionStorage.getItem('tracked')) return
  sessionStorage.setItem('tracked', '1')

  const guest =
    new URLSearchParams(window.location.search).get('g')?.trim() || 'direct'

  let loc = ''
  let ip = ''
  try {
    const geo = await fetch('https://ipapi.co/json/').then((r) => r.json())
    loc = [geo.city, geo.country_name].filter(Boolean).join(', ')
    ip = geo.ip || ''
  } catch {
    /* geo optional */
  }

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      g: guest,
      ua: navigator.userAgent,
      ref: document.referrer || '',
      loc,
      ip,
      scr: `${screen.width}x${screen.height}`,
      lang: navigator.language,
    }),
  }).catch(() => {})
}
