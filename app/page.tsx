export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="max-w-2xl text-center px-8">
        <h1 className="text-4xl font-heading font-semibold text-greyscale-text-title leading-tight">
          JEM Design System
        </h1>
        <p className="text-lg text-greyscale-text-body mt-4 max-w-lg mx-auto">
          A React component library built with Tailwind CSS, Radix UI primitives, and Class Variance Authority.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a
            href="http://localhost:6006"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-900 text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Storybook
          </a>
          <a
            href="https://github.com/Jem-Open/jem-ui"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-greyscale-border text-greyscale-text-title font-medium hover:bg-greyscale-surface-default transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-greyscale-text-caption mt-12">
          Run <code className="bg-greyscale-surface-default px-2 py-1 rounded text-sm">npm run storybook</code> to explore all components.
        </p>
      </main>
    </div>
  )
}
