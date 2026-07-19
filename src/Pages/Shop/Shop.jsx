import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import PageHero from '../../components/PageHero';
import ProductCard from '../../components/ProductCard';
import { categories, products } from '../../data/mockData';

const Shop = () => {
    return (
        <div className="bg-[#f7f7f5] pb-20 text-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
                <PageHero
                    badge="Shop collection"
                    title="Find the pieces that fit your rhythm"
                    subtitle="Curated essentials for work, travel, and everyday comfort. Filter by mood, price, or style and discover what feels right."
                    actions={[
                        <a key="all" href="#products" className="rounded-full bg-[#0F5B64] px-5 py-3 text-sm font-semibold text-white">Browse all</a>,
                        <a key="deal" href="/deals" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">See deals</a>,
                    ]}
                />

                <div className="mt-8 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                    <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Filters</p>
                                <h2 className="mt-1 text-xl font-semibold text-slate-900">Narrow down</h2>
                            </div>
                            <button className="rounded-full border border-slate-200 p-2 text-slate-500">
                                <SlidersHorizontal size={16} />
                            </button>
                        </div>

                        <div className="mt-6">
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <Search size={16} className="text-[#0F5B64]" /> Search
                            </label>
                            <input className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#0F5B64]" placeholder="Search products" />
                        </div>

                        <div className="mt-6">
                            <p className="text-sm font-semibold text-slate-700">Categories</p>
                            <div className="mt-3 space-y-2">
                                {categories.map((category) => (
                                    <label key={category.name} className="flex cursor-pointer items-center justify-between rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600">
                                        <span>{category.name}</span>
                                        <span className="text-xs text-slate-400">{category.count}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 rounded-[1.25rem] bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <Filter size={16} className="text-[#0F5B64]" /> Quick filters
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {['Under $50', 'New', 'Free shipping', 'Best rated'].map((item) => (
                                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">{item}</span>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <div id="products">
                        <div className="mb-6 flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white  p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Showing 6 products</p>
                                <h2 className="text-xl font-semibold text-slate-900">Curated for your next favorite</h2>
                            </div>
                            <select className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none">
                                <option>Sort: Featured</option>
                                <option>Price: Low to high</option>
                                <option>Price: High to low</option>
                                <option>Newest arrivals</option>
                            </select>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
