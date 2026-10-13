import { Link } from 'react-router-dom'

interface Props {
  title: string
  linkTo?: string
  linkLabel?: string
}

export default function SectionHeader({ title, linkTo, linkLabel }: Props) {
  return (
    <div className="mb-6 flex items-end justify-between">
<h2
  className={`text-xl font-bold sm:text-2xl ${
    title === 'FRESH OFF THE DROP' ? 'text-lime-400' : 'text-heading'
  }`}
>
  {title}
</h2>      {linkTo && linkLabel && (
        <Link to={linkTo} className="text-sm font-medium text-brand-600 transition hover:text-brand-700">
          {linkLabel} →
        </Link>
      )}
    </div>
  )
}
