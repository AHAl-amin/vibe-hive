import { ArrowRight, Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group rounded-[1.5rem] hover:border-[#FF5E13]/50 transition delay-100 hover:border-b-4 hover:bg-opacity-50 hover:bg-black/10 border border-slate-200 bg-white p-4 shadow-sm  hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">
                <span className="rounded-full bg-[#FF5E13]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5E13]">{product.badge}</span>
                <button className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-[#0F5B64] hover:text-[#0F5B64]">
                    <Heart size={16} />
                </button>
            </div>
            <div className="mt-5 flex h-36 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#eef8f8] to-[#fdf1e8] text-4xl font-semibold text-[#0F5B64]">
                {product.image}
            </div>
            <div className="mt-5">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{product.category}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <div className="mt-3 flex items-center gap-1 text-sm text-amber-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={14} fill="currentColor" />
                    ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <p className="text-xl font-semibold text-slate-900">${product.price}</p>
                        {product.oldPrice ? <p className="text-sm text-slate-400 line-through">${product.oldPrice}</p> : null}
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to={`/product/${product.id}`} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-[#0F5B64] hover:text-[#0F5B64]">
                            <ArrowRight size={16} />
                        </Link>
                        <button className="inline-flex items-center gap-2 rounded-full bg-[#0F5B64] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#0a4448]">
                            <ShoppingBag size={16} />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
