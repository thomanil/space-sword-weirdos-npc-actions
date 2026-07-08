const ICONS = {
  melee: (
    <>
      <path d="M4 20L20 4" />
      <path d="M20 20L4 4" />
      <path d="M4 20l3-1M20 4l-1 3M20 20l-3-1M4 4l1 3" />
    </>
  ),
  ranged: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
    </>
  ),
  casters: (
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor" stroke="none" />
  ),
  reinforcements: (
    <>
      <path d="M6 2v20" />
      <path d="M6 3h13l-3 3.5L19 10H6" />
    </>
  ),
}

export default function CategoryIcon({ category }) {
  const icon = ICONS[category]
  if (!icon) return null

  return (
    <svg
      className="category-icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  )
}
