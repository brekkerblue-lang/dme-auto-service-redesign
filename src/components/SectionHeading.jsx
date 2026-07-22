export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className={`eyebrow ${light ? 'text-brass-400' : ''}`}>{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-base font-normal normal-case leading-relaxed ${light ? 'text-steel-300' : 'text-steel-600'}`}>
          {children}
        </p>
      )}
    </div>
  )
}
