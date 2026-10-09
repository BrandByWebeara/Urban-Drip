
import type { Category } from './types'

export const categories: Category[] = [
  {
    id: 1,
    slug: 't-shirts',
    name: 'T-Shirts',
    icon: 'tag',
    description: 'Everyday tees and oversized fits',
  },
  {
    id: 2,
    slug: 'hoodies',
    name: 'Hoodies',
    icon: 'package',
    description: 'Layer up in streetwear style',
  },
  {
    id: 3,
    slug: 'bottoms',
    name: 'Bottoms',
    icon: 'layers',
    description: 'Cargos, denim and relaxed fits',
  },
  {
    id: 4,
    slug: 'outerwear',
    name: 'Outerwear',
    icon: 'shirt',
    description: 'Jackets and everyday layers',
  },
  {
    id: 5,
    slug: 'footwear',
    name: 'Footwear',
    icon: 'shopping-bag',
    description: 'Sneakers for your rotation',
  },
  {
    id: 6,
    slug: 'accessories',
    name: 'Accessories',
    icon: 'gift',
    description: 'Caps, bags and finishing touches',
  },
]

export function findCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}