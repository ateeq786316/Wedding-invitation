/**
 * Single source of truth for the invitation.
 * Edit anything here — names, dates, venues, links, wording —
 * and the whole site updates. No component changes needed.
 */

export const wedding = {
  bride: {
    name: 'Firdous Seemab',
    nameUrdu: 'فردوس سیماب',
    father: 'Irshad Ali',
  },
  groom: {
    name: 'Hudail',
    nameUrdu: 'ہدیل',
    father: 'Dilawar Hussain',
  },
  monogram: 'H&F',
  coupleNames: 'Firdous & Hudail',
  hashtag: '#FirdousWedsHudail',

  /** Formal invitation wording (girl's side hosting). */
  invitation: {
    host: 'The family of Irshad Ali',
    request: 'requests the honour of your presence',
    occasion: 'at the Mehndi & Baraat of their beloved daughter',
    conjunction: 'with',
  },

  /** ISO timestamp the countdown runs to — Baraat start, Pakistan time. */
  countdownTarget: '2026-11-15T13:00:00+05:00',

  events: [
    {
      id: 'mehndi',
      name: 'Mehndi',
      nameUrdu: 'مہندی',
      weekday: 'Saturday',
      displayDate: '14 November 2026',
      time: '7:00 PM',
      venue: "Bride's Residence",
      city: 'Lahore',
      mapsUrl: 'https://maps.app.goo.gl/wUoYmseXPL4NL6sV8',
      calendar: {
        title: 'Mehndi — Firdous & Hudail',
        start: '20261114T140000Z',
        end: '20261114T190000Z',
        location: "Bride's Residence, Lahore",
      },
    },
    {
      id: 'baraat',
      name: 'Baraat',
      nameUrdu: 'برات',
      weekday: 'Sunday',
      displayDate: '15 November 2026',
      time: '1:00 – 4:00 PM',
      venue: 'Varioline Le Grand',
      city: 'Lahore',
      mapsUrl: 'https://share.google/ziac1lMWgO22cAQmX',
      calendar: {
        title: 'Baraat — Firdous & Hudail',
        start: '20261115T080000Z',
        end: '20261115T110000Z',
        location: 'Varioline Le Grand, Lahore',
      },
    },
  ] as const,

  rsvp: [
    {
      label: 'Confirm on WhatsApp',
      phone: '923125053926',
      message:
        'Assalamu Alaikum! This is regarding the wedding of Firdous & Hudail (14–15 Nov 2026). I would like to confirm my attendance, In Sha Allah.',
    },
    {
      label: 'RSVP — 2nd Brother',
      phone: '923065347311',
      message:
        'Assalamu Alaikum! This is regarding the wedding of Firdous & Hudail (14–15 Nov 2026). I would like to confirm my attendance, In Sha Allah.',
    },
    {
      label: 'RSVP — 3rd Brother',
      phone: '923024018443',
      message:
        'Assalamu Alaikum! This is regarding the wedding of Firdous & Hudail (14–15 Nov 2026). I would like to confirm my attendance, In Sha Allah.',
    },
  ] as const,

  dua: {
    phone: '923125053926',
    message:
      'Assalamu Alaikum! Sending my duas for Firdous & Hudail — may Allah bless their union with love, mercy and barakah. Ameen.',
  },

  /**
   * Guest-open tracking. Paste your Google Apps Script web-app URL here
   * (see scripts/LogToSheet.gs). Links shared as ?g=family-name get logged
   * to the sheet with a timestamp. Empty string = tracking off.
   */
  trackingUrl: '',

  footer: {
    line1: 'With love & blessings,',
    line2: 'The family of Irshad Ali',
    note: 'We look forward to celebrating with you, In Sha Allah.',
  },
} as const

export function waLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function gcalLink(cal: {
  title: string
  start: string
  end: string
  location: string
}): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: cal.title,
    dates: `${cal.start}/${cal.end}`,
    location: cal.location,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
