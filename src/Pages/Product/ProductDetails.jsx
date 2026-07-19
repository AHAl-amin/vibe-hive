import { ArrowLeft, Heart, ShoppingBag, Star, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { products } from '../../data/mockData';

const ProductDetails = () => {
    const product = products[0];
    const navigate = useNavigate();

    return (
        <div className="bg-[#f7f7f5] pb-20 text-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
                <PageHero
                    badge="Product preview"
                    title={product.name}
                    subtitle={product.description}
                    actions={[
                        <Link key="back" to="/shop" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Back to shop</Link>,
                    ]}
                />

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex h-80 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#eef8f8] to-[#fdf1e8] text-6xl font-semibold text-[#0F5B64]">
                            {product.image}
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {[product.image, 'P', 'S'].map((thumb, index) => (
                                <div key={index} className="flex h-20 items-center justify-center rounded-[1.25rem] border border-slate-200 bg-slate-50 text-2xl font-semibold text-[#0F5B64]">{thumb}</div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">{product.badge}</p>
                                <h2 className="mt-2 text-3xl font-semibold text-slate-900">{product.name}</h2>
                            </div>
                            <button className="rounded-full border border-slate-200 p-2 text-slate-500 hover:text-[#FF5E13]">
                                <Heart size={18} />
                            </button>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-amber-500">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} size={16} fill="currentColor" />
                            ))}
                            <span className="ml-2 text-sm font-semibold text-slate-600">4.9 • 128 reviews</span>
                        </div>

                        <div className="mt-6 flex items-end gap-3">
                            <p className="text-3xl font-semibold text-slate-900">${product.price}</p>
                            <p className="text-lg text-slate-400 line-through">${product.oldPrice}</p>
                        </div>

                        <p className="mt-5 text-sm leading-8 text-slate-600">A premium, design-forward essential built to bring calm and function to everyday life. Expect an effortless blend of comfort, quality, and modern style.</p>

                        <div className="mt-6 rounded-[1.25rem] bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <Truck size={16} className="text-[#0F5B64]" /> Free shipping over $120
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button onClick={() => navigate('/cart')} className="inline-flex items-center gap-2 rounded-full bg-[#0F5B64] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a4448] cursor-pointer">
                                <ShoppingBag size={16} /> Add to cart
                            </button>
                            <button onClick={() => navigate('/checkout')} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 cursor-pointer">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
