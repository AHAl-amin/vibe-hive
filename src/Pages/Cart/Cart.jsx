import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';

const cartItems = [
    { id: 1, name: 'Luma Lamp', price: 74, qty: 1, color: 'Sand', image: 'L' },
    { id: 2, name: 'Orbit Bottle', price: 34, qty: 2, color: 'Mist', image: 'O' },
];

const Cart = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 120 ? 0 : 12;
    const total = subtotal + shipping;

    return (
        <div className="bg-[#f7f7f5] pb-20 text-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
                <PageHero
                    badge="Your bag"
                    title="Cart items ready for checkout"
                    subtitle="Review your selections, update quantities, and move smoothly into the next step."
                    actions={[
                        <Link key="continue" to="/shop" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Continue shopping</Link>,
                    ]}
                />

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#eef8f8] to-[#fdf1e8] text-2xl font-semibold text-[#0F5B64]">{item.image}</div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                                            <p className="mt-1 text-sm text-slate-500">Color: {item.color}</p>
                                        </div>
                                        <button className="rounded-full p-2 text-slate-500 hover:bg-slate-50 hover:text-[#FF5E13]">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-2 rounded-full border border-slate-200 p-1">
                                            <button className="rounded-full p-1.5 hover:bg-slate-50"><Minus size={14} /></button>
                                            <span className="min-w-8 text-center text-sm font-semibold text-slate-700">{item.qty}</span>
                                            <button className="rounded-full p-1.5 hover:bg-slate-50"><Plus size={14} /></button>
                                        </div>
                                        <p className="text-lg font-semibold text-slate-900">${item.price * item.qty}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Order summary</p>
                        <div className="mt-5 space-y-3 text-sm text-slate-600">
                            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
                            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping}`}</span></div>
                            <div className="flex justify-between"><span>Coupon</span><span>—</span></div>
                        </div>
                        <div className="mt-5 border-t border-slate-200 pt-4">
                            <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>
                        <Link to="/checkout" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#0F5B64] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a4448]">
                            <ArrowLeft size={16} className="rotate-180" /> Checkout
                        </Link>
                        <p className="mt-4 text-center text-sm text-slate-500">Secure checkout with multiple payment methods</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
