
import { useState, type FormEvent } from 'react'

import { Link } from 'react-router-dom'

import { products, productImages } from '@/data/products'

import { categories } from '@/data/categories'

import { useUiStore } from '@/stores/ui'

import ProductCard from '@/components/product/ProductCard'

import CategoryCard from '@/components/catalog/CategoryCard'

import SectionHeader from '@/components/ui/SectionHeader'

import IconBase from '@/components/ui/IconBase'

const heroProduct =
  products.find((p) => p.slug === 'classic-street-sneakers') ?? products[0]

const HERO_IMAGE = heroProduct
  ? productImages(heroProduct.slug, 4)[0]
  : ''

const BENEFITS = [
  { icon: 'zap', title: 'Everyday Essentials', desc: 'Made for your rotation' },
  { icon: 'shield-check', title: 'Street-Ready Style', desc: 'Looks that stand out' },
  { icon: 'refresh', title: 'Find Your Fit', desc: 'Explore your own style' },
  { icon: 'heart', title: 'Made to Express', desc: 'Wear it your way' },
]

export default function HomePage() {
  const notify = useUiStore((s) => s.notifySuccess)
  const [email, setEmail] = useState('')

  const featured = products.filter((p) => p.featured).slice(0, 8)
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4)
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4)

  function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!email.trim()) return

    // Demo interaction only; no email is sent to a mailing service.
    notify('Thanks for your interest in Urban Drip!')
    setEmail('')
  }

  return (
    <div className="w-full overflow-x-clip bg-[#f7f6f2] text-[#171717]">
      {/* Announcement */}
      <div className="bg-[#171717] px-3 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.15em] text-white min-[375px]:text-[10px] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
        URBAN DRIP — YOUR STYLE. YOUR RULES.
      </div>

      {/* Hero */}
      <section className="relative w-full bg-[#eae8e1]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-7 px-4 py-7 min-[420px]:gap-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          {/* Hero text */}
          <div className="relative z-10 min-w-0 py-1 sm:py-4 lg:py-8">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 border border-black/15 px-2.5 py-2 text-[9px] font-bold uppercase tracking-[0.13em] min-[375px]:px-3 min-[375px]:text-[10px] min-[375px]:tracking-[0.18em] sm:mb-6 sm:text-xs sm:tracking-[0.22em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-lime-500" />
              <span>THE NEW STREETWEAR EDIT</span>
            </div>

            <h1 className="max-w-full text-[clamp(2.5rem,11vw,3.5rem)] font-black uppercase leading-[0.92] tracking-[-0.065em] min-[420px]:text-[clamp(2.8rem,10vw,3.8rem)] sm:max-w-2xl sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              OWN YOUR
              <br />
              <span className="text-[#77766f]">EVERY</span>
              <br />
              DAY<span className="text-lime-600">.</span>
            </h1>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-[#55544f] min-[375px]:text-sm min-[375px]:leading-7 sm:mt-6 sm:text-base">
              Everyday essentials. Relaxed fits. Streetwear made to express
              your style, your way.
            </p>

            {/* Mobile-friendly buttons */}
            <div className="mt-6 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
              <Link
                to="/produtos"
                className="group inline-flex h-12 w-full items-center justify-center gap-3 bg-[#171717] px-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-lime-600 hover:text-black min-[420px]:w-auto min-[420px]:px-5 sm:h-14 sm:px-8 sm:tracking-[0.12em]"
              >
                Shop the drop
                <IconBase name="arrow-right" size={18} />
              </Link>

              <Link
                to="/produtos"
                className="inline-flex h-12 w-full items-center justify-center border border-black/20 px-4 text-xs font-bold uppercase tracking-[0.1em] transition hover:bg-white min-[420px]:w-auto min-[420px]:px-5 sm:h-14 sm:px-8 sm:tracking-[0.12em]"
              >
                Explore collection
              </Link>
            </div>

            {/* Everyday uniform */}
            <div className="mt-7 flex min-w-0 items-center gap-3 border-t border-black/10 pt-4 min-[375px]:gap-4 sm:mt-9 sm:pt-5">
              <div className="flex shrink-0 -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#eae8e1] bg-[#d3c2aa] text-[10px] font-bold">
                  U
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#eae8e1] bg-[#b8b6aa] text-[10px] font-bold">
                  D
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#eae8e1] bg-[#d6d6cf] text-[10px] font-bold">
                  +
                </span>
              </div>

              <p className="min-w-0 text-[9px] font-semibold uppercase leading-5 tracking-[0.1em] text-[#66655e] min-[375px]:text-[10px] min-[375px]:tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]">
                Discover your everyday uniform
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative min-w-0 w-full pt-1 sm:pt-0">
            <div className="absolute -right-1 -top-2 z-10 flex h-[68px] w-[68px] rotate-12 flex-col items-center justify-center rounded-full bg-lime-400 text-center text-[9px] font-black uppercase leading-4 tracking-wider text-black min-[375px]:-right-2 min-[375px]:h-[76px] min-[375px]:w-[76px] sm:-right-4 sm:-top-4 sm:h-24 sm:w-24 sm:text-[11px]">
              NEW
              <br />
              SEASON
              <br />
              EDIT
            </div>

            <Link
              to="/produtos"
              className="group relative block w-full overflow-hidden bg-[#d9d7d0]"
            >
              {HERO_IMAGE ? (
                <img
                  src={HERO_IMAGE}
                  alt="Urban Drip streetwear collection"
                  fetchPriority="high"
                  className="aspect-[4/4.5] w-full object-cover transition duration-700 group-hover:scale-[1.04] min-[420px]:aspect-[4/4.2] sm:aspect-square lg:aspect-[4/4.5]"
                />
              ) : (
                <div className="aspect-[4/4.5] w-full bg-[#d9d7d0] min-[420px]:aspect-[4/4.2] sm:aspect-square" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 text-white min-[375px]:p-4 sm:p-7">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75 min-[375px]:text-[10px] min-[375px]:tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">
                    THE URBAN COLLECTION
                  </p>
                  <p className="mt-1.5 text-xl font-black uppercase leading-tight tracking-tight min-[375px]:text-2xl sm:mt-2 sm:text-3xl">
                    Made to move.
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-lime-400 min-[375px]:h-10 min-[375px]:w-10 sm:h-11 sm:w-11">
                  <IconBase name="arrow-up-right" size={22} />
                </span>
              </div>
            </Link>

            <div className="mt-3 flex items-start justify-between gap-3 text-[8px] font-semibold uppercase leading-4 tracking-[0.1em] text-[#77766f] min-[375px]:text-[9px] min-[375px]:tracking-[0.13em] sm:text-[10px] sm:tracking-[0.16em]">
              <span>Relaxed fits / Everyday wear</span>
              <span className="shrink-0 text-right">UR-D / 001</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand ticker */}
      <section className="w-full overflow-hidden bg-[#171717] py-4 text-white">
        <div className="flex min-w-max items-center justify-around gap-7 px-4 sm:gap-12">
          {[
            'BUILT FOR EVERYDAY',
            'STREET-READY FITS',
            'YOUR STYLE. YOUR RULES.',
            'FIND YOUR ROTATION',
          ].map((text) => (
            <div key={text} className="flex items-center gap-7 sm:gap-12">
              <span className="text-xs font-black uppercase tracking-[0.16em] sm:text-sm">
                {text}
              </span>
              <span className="text-lime-400">✳</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brand values */}
      <section className="border-b border-black/10 bg-[#f7f6f2]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {BENEFITS.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/10">
                <IconBase name={item.icon} size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] sm:text-xs">
                  {item.title}
                </p>
                <p className="mt-1 text-[11px] text-[#77766f] sm:text-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeader
          title="SHOP BY CATEGORY"
          linkTo="/produtos"
          linkLabel="VIEW ALL"
        />

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#77766f] sm:text-xs">
                CURATED FOR YOUR ROTATION
              </p>
              <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] sm:text-4xl md:text-5xl">
                THE LATEST DROP<span className="text-lime-600">.</span>
              </h2>
            </div>

            <Link
              to="/produtos"
              className="shrink-0 border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.12em] sm:text-xs"
            >
              Shop all ↗
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-8 text-sm text-[#77766f]">
              New products are coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Collection feature */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden bg-[#dcdad2] md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
            <span className="border border-black/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
              THE EVERYDAY EDIT
            </span>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.94] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              LESS
              <br />
              ORDINARY.
              <br />
              <span className="text-[#77766f]">MORE YOU.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#55544f]">
              From oversized tees to relaxed cargos, discover pieces that
              make everyday outfits your own.
            </p>

            <Link
              to="/produtos"
              className="mt-7 inline-flex min-h-12 items-center gap-3 bg-[#171717] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-lime-500 hover:text-black"
            >
              Explore the collection
              <IconBase name="arrow-up-right" size={18} />
            </Link>
          </div>

          <Link
            to="/produtos"
            className="group relative block min-h-[280px] overflow-hidden bg-[#c7c4ba] sm:min-h-[400px]"
          >
            {products[1] && (
              <img
                src={productImages(products[1].slug, 4)[1]}
                alt="Urban Drip everyday streetwear edit"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

            <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
              <IconBase name="arrow-up-right" size={22} />
            </span>
          </Link>
        </div>
      </section>

      {/* New arrivals */}
      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeader
            title="FRESH OFF THE DROP"
            linkTo="/produtos"
            linkLabel="DISCOVER MORE"
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Bestsellers */}
      {bestsellers.length > 0 && (
        <section className="bg-[#eae8e1]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#77766f] sm:text-xs">
                  COMMUNITY FAVOURITES
                </p>
                <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">
                  THE ROTATION<span className="text-lime-600">.</span>
                </h2>
              </div>

              <Link
                to="/produtos?sort=rating"
                className="shrink-0 border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.12em] sm:text-xs"
              >
                View all ↗
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {bestsellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-[#171717] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-lime-400 sm:text-xs">
              STAY IN THE LOOP
            </p>

            <h2 className="max-w-lg text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              DON&apos;T MISS
              <br />
              THE NEXT DROP<span className="text-lime-400">.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              Get updates about new collections and the latest Urban Drip
              releases.
            </p>
          </div>

          <form
            onSubmit={subscribe}
            className="flex min-w-0 flex-col gap-3 sm:flex-row md:justify-end"
          >
            <label className="sr-only" htmlFor="urban-drip-email">
              Email address
            </label>

            <input
              id="urban-drip-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-[52px] min-w-0 flex-1 border border-white/20 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-lime-400"
            />

            <button
              type="submit"
              className="h-[52px] shrink-0 bg-lime-400 px-6 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-white"
            >
              Join the list ↗
            </button>
          </form>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-5 text-[9px] uppercase tracking-[0.16em] text-white/40 sm:text-[10px]">
          URBAN DRIP — A STREETWEAR STORE DEMO
        </div>
      </section>
    </div>
  )
}
