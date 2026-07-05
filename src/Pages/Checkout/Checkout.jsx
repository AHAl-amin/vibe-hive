import { Banknote, CreditCard, MapPin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';

const Checkout = () => {
    return (
        <div className="bg-[#f7f7f5] pb-20 text-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
                <PageHero
                    badge="Secure checkout"
                    title="Complete your order with confidence"
                    subtitle="Choose your delivery and payment options, then confirm everything in one smooth flow."
                    actions={[
                        <Link key="cart" to="/cart" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Back to cart</Link>,
                    ]}
                />

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-6">
                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#0F5B64]" />
                                <h2 className="text-xl font-semibold text-slate-900">Delivery details</h2>
                            </div>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                <input className="rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0F5B64]" placeholder="Full name" />
                                <input className="rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0F5B64]" placeholder="Phone number" />
                                <input className="rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0F5B64] md:col-span-2" placeholder="Address" />
                                <input className="rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0F5B64]" placeholder="City" />
                                <input className="rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0F5B64]" placeholder="ZIP code" />
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-2">
                                <Truck size={18} className="text-[#0F5B64]" />
                                <h2 className="text-xl font-semibold text-slate-900">Shipping method</h2>
                            </div>
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <label className="rounded-[1.25rem] border border-slate-200 p-4 text-sm text-slate-600">
                                    <input type="radio" name="shipping" defaultChecked className="mr-2" /> Home delivery
                                </label>
                                <label className="rounded-[1.25rem] border border-slate-200 p-4 text-sm text-slate-600">
                                    <input type="radio" name="shipping" className="mr-2" /> Pickup point
                                </label>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-2">
                                <CreditCard size={18} className="text-[#0F5B64]" />
                                <h2 className="text-xl font-semibold text-slate-900">Payment method</h2>
                            </div>
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <label className="rounded-[1.25rem] border border-slate-200 p-4 text-sm text-slate-600">
                                    <input type="radio" name="payment" defaultChecked className="mr-2" /> Cash on delivery
                                </label>
                                <label className="rounded-[1.25rem] border border-slate-200 p-4 text-sm text-slate-600">
                                    <input type="radio" name="payment" className="mr-2" /> bKash / Nagad
                                </label>
                                <label className="rounded-[1.25rem] border border-slate-200 p-4 text-sm text-slate-600 sm:col-span-2">
                                    <input type="radio" name="payment" className="mr-2" /> Card payment
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Order summary</p>
                        <div className="mt-5 space-y-3 text-sm text-slate-600">
                            <div className="flex justify-between"><span>2 items</span><span>$142</span></div>
                            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
                            <div className="flex justify-between"><span>Discount</span><span>-$10</span></div>
                        </div>
                        <div className="mt-5 border-t border-slate-200 pt-4">
                            <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                                <span>Total</span>
                                <span>$132</span>
                            </div>
                        </div>
                        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#0F5B64] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a4448]">
                            <Banknote size={16} /> Confirm order
                        </button>
                        <p className="mt-4 text-sm text-slate-500">By confirming, you agree with our shipping and return terms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
