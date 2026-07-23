import { ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { Fade, Zoom } from 'react-awesome-reveal';

function Banner() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0F5B64_0%,#0a3f45_45%,#08363a_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,94,19,0.35),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="relative z-10 flex flex-col justify-center">
          <Zoom >

            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Sparkles size={16} className="text-[#FF5E13]" />
              Fresh picks for modern living
            </div>
          </Zoom>
          <Zoom >

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Elevate your everyday with <span className="text-[#FFB07A]">VibeHive</span> essentials.
            </h1>
          </Zoom>
          <Zoom >

            <p className="mt-5 max-w-xl text-lg text-slate-200 sm:text-xl">
              Discover statement pieces, smart deals, and curated drops designed to keep your space and routine feeling fresh.
            </p>
          </Zoom>
          <Zoom >

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#featured" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5E13] px-6 py-3 font-semibold text-white transition hover:bg-[#e6530d]">
                Shop now
                <ArrowRight size={18} />
              </a>
              <a href="#offers" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Explore deals
              </a>
            </div>
          </Zoom>

          <Zoom >

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <Truck size={16} className="text-[#FF5E13]" />
                Fast delivery
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <ShieldCheck size={16} className="text-[#FF5E13]" />
                Secure checkout
              </div>
            </div>
          </Zoom>
        </div>


        <Zoom direction="right" triggerOnce>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-800 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F5B64]">Today’s spotlight</p>
                    <h2 className="mt-2 text-2xl font-semibold">Aurora Desk Set</h2>
                  </div>
                  <div className="rounded-full bg-[#FF5E13]/10 px-3 py-1 text-sm font-semibold text-[#FF5E13]">-25%</div>
                </div>

                <div className="mt-5 rounded-[1.25rem] bg-gradient-to-br from-[#fef1e7] to-[#fdf2e8] p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Limited release</p>
                      <p className="text-3xl font-semibold text-slate-900">$89</p>
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0F5B64] text-4xl font-semibold text-white">
                      V
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-700">Free shipping</p>
                    <p className="mt-1 text-sm text-slate-500">Orders over $120</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-700">Easy returns</p>
                    <p className="mt-1 text-sm text-slate-500">14-day window</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

      </div>
    </section>
  );
}

export default Banner;

