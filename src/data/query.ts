
import type { Product, SortKey } from './types'

export interface ProductFilters {
  query?: string
  category?: string
  brands?: string[]
  minPrice?: number
  maxPrice?: number
  minRating?: number
}

/**
 * Normalize category names and slugs so values like
 * "T-Shirts" and "t-shirts" can match.
 */
function normalizeCategory(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Search products by name, description, brand, or category.
 */
export function searchProducts(
  list: Product[],
  query: string
): Product[] {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return list
  }

  return list.filter((product) => {
    const searchableText = [
      product.name,
      product.description,
      product.brand,
      product.category,
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedQuery)
  })
}

/**
 * Filter products by search query, category, brand,
 * price range, and minimum rating.
 */
export function filterProducts(
  list: Product[],
  filters: ProductFilters
): Product[] {
  let result = list

  if (filters.query?.trim()) {
    result = searchProducts(result, filters.query)
  }

  if (filters.category?.trim()) {
    const selectedCategory = normalizeCategory(filters.category)

    result = result.filter(
      (product) =>
        normalizeCategory(product.category) === selectedCategory
    )
  }

  if (filters.brands && filters.brands.length > 0) {
    result = result.filter((product) =>
      filters.brands!.includes(product.brand)
    )
  }

  if (filters.minPrice != null) {
    result = result.filter(
      (product) => product.price >= filters.minPrice!
    )
  }

  if (filters.maxPrice != null) {
    result = result.filter(
      (product) => product.price <= filters.maxPrice!
    )
  }

  if (filters.minRating != null) {
    result = result.filter(
      (product) => product.rating >= filters.minRating!
    )
  }

  return result
}

/**
 * Sort products by price, newest, rating, or relevance.
 */
export function sortProducts(
  list: Product[],
  sort: SortKey
): Product[] {
  const result = [...list]

  switch (sort) {
    case 'price-asc':
      return result.sort((a, b) => a.price - b.price)

    case 'price-desc':
      return result.sort((a, b) => b.price - a.price)

    case 'newest':
      return result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )

    case 'rating':
      return result.sort((a, b) => b.rating - a.rating)

    case 'relevance':
    default:
      return result.sort(
        (a, b) =>
          Number(b.bestseller) - Number(a.bestseller) ||
          b.rating - a.rating
      )
  }
}

/**
 * Return products for the requested page.
 */
export function paginate<T>(
  list: T[],
  page: number,
  perPage: number
): T[] {
  const safePage = Math.max(1, Math.floor(page))
  const safePerPage = Math.max(1, Math.floor(perPage))
  const start = (safePage - 1) * safePerPage

  return list.slice(start, start + safePerPage)
}