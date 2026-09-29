import { Fade, Zoom } from 'react-awesome-reveal';

const About = () => {
    return (
        <div className="bg-[#f7f7f5] text-slate-900">
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <Fade cascade damping={0.15} triggerOnce>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF5E13]">
                            About VibeHive
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            Professional design, trusted products, and a premium shopping experience.
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            VibeHive blends modern curation with reliable sourcing to deliver products that look great, perform consistently, and earn customer loyalty. Our focus is on quality, demand-driven collections, and a business approach that keeps every interaction smooth and professional.
                        </p>
                    </div>
                </Fade>
            </section>

            {/* What sets us apart + Business Info */}
            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
                    {/* Left - What sets us apart */}
                    <Zoom triggerOnce>
                        <div className="rounded-[2rem] bg-white p-10 shadow-sm lg:p-14">
                            <h2 className="text-3xl font-semibold text-slate-900">What sets us apart</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600">
                                We design every product and experience around clarity, trust, and real customer needs. From product selection to delivery, we deliver consistent value with a polished, efficient approach.
                            </p>

                            <div className="mt-10 space-y-6">
                                <div className="rounded-3xl border border-slate-200 bg-[#f8faf9] p-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F5B64]">
                                        Product Quality
                                    </p>
                                    <p className="mt-3 text-slate-600">
                                        Every item passes strict quality benchmarks so your customers receive premium materials, reliable performance, and a polished finish.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-slate-200 bg-[#f8faf9] p-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F5B64]">
                                        Growing Demand
                                    </p>
                                    <p className="mt-3 text-slate-600">
                                        We curate collections based on real shopper preferences, so our offerings stay relevant, desirable, and easy to promote.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-slate-200 bg-[#f8faf9] p-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0F5B64]">
                                        Professionalism
                                    </p>
                                    <p className="mt-3 text-slate-600">
                                        From fast support responses to clear business terms, we maintain a polished, dependable service standard at every touchpoint.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    {/* Right - Business Information */}
                    <Fade triggerOnce delay={100}>
                        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm lg:p-14 sticky top-8">
                            <h2 className="text-3xl font-semibold text-slate-900">Business Information</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600">
                                VibeHive operates with transparent business practices and a customer-first mindset. We serve a growing audience of style-conscious shoppers with products that combine dependable performance and modern aesthetics.
                            </p>

                            <div className="mt-10 space-y-7">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Phone</p>
                                    <a href="tel:+8801700000000" className="mt-2 block text-base font-medium text-slate-900 hover:text-[#FF5E13] transition">
                                        +8801521447552
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Email</p>
                                    <a href="mailto:Vibehivebangladesh@gmail.com" className="mt-2 block text-base font-medium text-slate-900 hover:text-[#FF5E13] transition">
                                        Vibehivebangladesh@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Facebook</p>
                                    <a
                                        href="https://facebook.com/VibeHiveOfficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 block text-base font-medium text-slate-900 hover:text-[#FF5E13] transition"
                                    >
                                        facebook.com/VibeHiveOfficial
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">LinkedIn</p>
                                    <a
                                        href="https://linkedin.com/company/vibehive"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 block text-base font-medium text-slate-900 hover:text-[#FF5E13] transition"
                                    >
                                        linkedin.com/company/vibehive
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default About;