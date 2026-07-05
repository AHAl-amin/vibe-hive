import { ArrowRight, Sparkles, TimerReset } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { deals, products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';

const Deals = () => {
    return (
        <div className="bg-[#f7f7f5] pb-20 text-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
                <PageHero
                    badge="Limited time offers"
                    title="Make the most of big savings"
                    subtitle="From flash drops to bundles and shipping perks, these offers are designed to add value to every order."
                    actions={[
                        <a key="shop" href="/shop" className="rounded-full bg-[#0F5B64] px-5 py-3 text-sm font-semibold text-white">Shop deals</a>,
                        <a key="notify" href="#" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Get alerts</a>,
                    ]}
                />

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0F5B64_0%,#0a3d41_100%)] p-8 text-white shadow-xl">
                        <div className="flex items-center gap-2 text-[#FFB07A]">
                            <TimerReset size={18} />
                            <span className="text-sm font-semibold uppercase tracking-[0.3em]">Flash sale</span>
                        </div>
                        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Save up to 40% on selected favorites.</h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">The countdown is on for curated essentials and best-loved pieces across the catalog.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">02 Days</div>
                            <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">16 Hours</div>
                            <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">34 Mins</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {deals.map((deal) => (
                            <div key={deal.title} className={`rounded-[1.5rem] bg-gradient-to-br ${deal.accent} p-[1px]`}>
                                <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-6">
                                    <div className="flex items-center gap-2 text-[#FF5E13]">
                                        <Sparkles size={16} />
                                        <span className="text-sm font-semibold uppercase tracking-[0.2em]">Special deal</span>
                                    </div>
                                    <h3 className="mt-3 text-xl font-semibold text-slate-900">{deal.title}</h3>
                                    <p className="mt-2 text-sm text-slate-600">{deal.subtitle}</p>
                                    <a href="/shop" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0F5B64]">
                                        Explore now <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <div className="mb-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Hot deals</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Limited-time favorites</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {products.slice(0, 3).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
