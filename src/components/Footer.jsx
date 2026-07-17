import { profiles, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {profiles.map((p) => (
            <li key={p.label}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase tracking-wide text-muted hover:text-signal transition-colors"
              >
                {p.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
