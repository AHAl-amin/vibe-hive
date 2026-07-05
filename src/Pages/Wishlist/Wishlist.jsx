import { ArrowRight, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { products } from '../../data/mockData';

const Wishlist = () => {
    const favorites = products.slice(0, 3);

    return (
        <div className="bg-[#f7f7f5] pb-20 text-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
                <PageHero
                    badge="Saved items"
                    title="Your wishlist is ready for the next order"
                    subtitle="Keep the products you love close by and move them into your cart whenever you’re ready."
                    actions={[
                        <Link key="shop" to="/shop" className="rounded-full bg-[#0F5B64] px-5 py-3 text-sm font-semibold text-white">Find more</Link>,
                    ]}
                />

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {favorites.map((product) => (
                        <div key={product.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-start justify-between">
                                <span className="rounded-full bg-[#FF5E13]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5E13]">{product.badge}</span>
                                <button className="rounded-full border border-slate-200 p-2 text-[#FF5E13]">
                                    <Heart size={16} fill="currentColor" />
                                </button>
                            </div>
                            <div className="mt-5 flex h-32 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#eef8f8] to-[#fdf1e8] text-3xl font-semibold text-[#0F5B64]">{product.image}</div>
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-lg font-semibold text-slate-900">${product.price}</p>
                                    <div className="flex gap-2">
                                        <button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:border-[#0F5B64] hover:text-[#0F5B64]">
                                            <Trash2 size={16} />
                                        </button>
                                        <button className="inline-flex items-center gap-2 rounded-full bg-[#0F5B64] px-3 py-2 text-sm font-semibold text-white">
                                            <ShoppingBag size={16} /> Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
