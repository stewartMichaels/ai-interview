import CallDemo from "./CallDemo";

/**
 * The sample screening call, right on the homepage. `scroll-mt-20` keeps the
 * heading clear of the sticky navbar when the hero link scrolls here.
 */
export default function HomeDemoSection() {
  return (
    <section
      id="sample-call"
      className="scroll-mt-20 border-b border-zinc-900/10 bg-zinc-50 bg-glow"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Hear it for yourself
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Here&apos;s what a screening call looks like
          </h2>
          <p className="mt-4 text-zinc-600">
            A recruiter calls Jordan&apos;s AI representative. It answers only from what
            Jordan actually provided — and politely declines to speculate beyond it.
          </p>
        </div>

        <div id="sample-call-card" className="mt-12">
          <CallDemo />
        </div>
      </div>
    </section>
  );
}
