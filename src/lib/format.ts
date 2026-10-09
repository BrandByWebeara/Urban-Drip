

const LOCALE_MAP: Record<string, { locale: string; currency: string }> = {
  'pt-BR': { locale: 'pt-BR', currency: 'BRL' },
  en: { locale: 'en-IN', currency: 'INR' },
  'en-IN': { locale: 'en-IN', currency: 'INR' },
  'en-US': { locale: 'en-IN', currency: 'INR' },
  es: { locale: 'es-ES', currency: 'EUR' },
}

/** Format a price respecting the active i18n language. */
export function formatPrice(value: number, lang = 'en'): string {
  const cfg = LOCALE_MAP[lang] ?? LOCALE_MAP.en

  return new Intl.NumberFormat(cfg.locale, {
    style: 'currency',
    currency: cfg.currency,
    maximumFractionDigits: 2,
  }).format(value)
}

/** Percentage discount between an old and current price. */
export function discountPercent(
  price: number,
  priceOld?: number
): number {
  if (!priceOld || priceOld <= price) return 0

  return Math.round(((priceOld - price) / priceOld) * 100)
}


