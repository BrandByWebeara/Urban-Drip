
import { useTranslation } from 'react-i18next'
import { categories } from '@/data/categories'
import { brands, priceBounds } from '@/data/products'
import RatingStars from '@/components/ui/RatingStars'

export interface CatalogFilterState {
  category: string
  brands: string[]
  maxPrice: number
  minRating: number
}

export const defaultFilters: CatalogFilterState = {
  category: '',
  brands: [],
  maxPrice: priceBounds.max,
  minRating: 0,
}

interface Props {
  filters: CatalogFilterState
  onChange: (next: CatalogFilterState) => void
  /** when true the category facet is hidden (category page) */
  lockCategory?: boolean
}

export default function FilterSidebar({
  filters,
  onChange,
  lockCategory = false,
}: Props) {
  const { t } = useTranslation()

  const toggleBrand = (brand: string) => {
    const next = filters.brands.includes(brand)
      ? filters.brands.filter((item) => item !== brand)
      : [...filters.brands, brand]

    onChange({ ...filters, brands: next })
  }

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value)

  const getCategoryName = (slug: string, name: string) => {
    const key = `categories.${slug}.name`
    const translatedName = t(key)

    return translatedName === key ? name : translatedName
  }

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-heading">
          {t('catalog.filters')}
        </h2>

        <button
          type="button"
          onClick={() =>
            onChange({
              ...defaultFilters,
              category: lockCategory ? filters.category : '',
            })
          }
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          {t('catalog.clearFilters')}
        </button>
      </div>

      {!lockCategory && (
        <div>
          <h3 className="mb-3 text-sm font-semibold text-heading">
            {t('catalog.category')}
          </h3>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => onChange({ ...filters, category: '' })}
              className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm transition ${
                filters.category === ''
                  ? 'bg-brand-50 font-medium text-brand-600 dark:bg-brand-500/15'
                  : 'text-body hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {t('catalog.allCategories')}
            </button>

            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() =>
                  onChange({ ...filters, category: category.slug })
                }
                className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm transition ${
                  filters.category === category.slug
                    ? 'bg-brand-50 font-medium text-brand-600 dark:bg-brand-500/15'
                    : 'text-body hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {getCategoryName(category.slug, category.name)}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-3 text-sm font-semibold text-heading">
          {t('catalog.price')}
        </h3>

        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          step={10}
          value={Math.min(
            priceBounds.max,
            Math.max(priceBounds.min, filters.maxPrice),
          )}
          onChange={(event) =>
            onChange({
              ...filters,
              maxPrice: Number(event.target.value),
            })
          }
          className="w-full"
          aria-label="Maximum price"
        />

        <div className="mt-2 flex justify-between text-sm text-muted">
          <span>{formatPrice(priceBounds.min)}</span>
          <span className="font-medium text-heading">
            {formatPrice(filters.maxPrice)}
          </span>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-heading">
          {t('catalog.brand')}
        </h3>

        <div className="max-h-56 space-y-2 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-body"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 rounded border-themed accent-brand-500"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-heading">
          {t('catalog.rating')}
        </h3>

        <div className="space-y-1">
          {[4, 3, 2].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() =>
                onChange({
                  ...filters,
                  minRating:
                    filters.minRating === rating ? 0 : rating,
                })
              }
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm transition ${
                filters.minRating === rating
                  ? 'bg-brand-50 dark:bg-brand-500/15'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <RatingStars rating={rating} size={14} />
              <span className="text-muted">
                {t('catalog.ratingUp', { count: rating })}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
