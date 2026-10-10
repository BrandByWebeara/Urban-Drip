import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Category } from '@/data/types'
import IconBase from '@/components/ui/IconBase'

export default function CategoryCard({ category }: { category: Category }) {
  const { t } = useTranslation()
  return (
    <Link
      to={`/categoria/${category.slug}`}
      className="surface-card group flex min-w-0 flex-col items-center gap-2 rounded-xl border p-3 text-center transition hover:-translate-y-1 hover:shadow-theme-md sm:gap-3 sm:rounded-2xl sm:p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/15 sm:h-14 sm:w-14 sm:rounded-2xl">
        <IconBase name={category.icon} size={26} />
      </span>
      <div>
        <h3 className="font-semibold text-heading">{t(`categories.${category.slug}.name`)}</h3>
        <p className="mt-0.5 text-xs text-muted">{t(`categories.${category.slug}.desc`)}</p>
      </div>
    </Link>
  )
}
