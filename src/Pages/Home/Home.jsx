import { ArrowRight, ShoppingBag, Star, Truck } from 'lucide-react';
import Banner from './Banner';
import CustomerReview from '../../components/CustomerReview';
import ProductCard from '../../components/ProductCard';
import { Zoom } from 'react-awesome-reveal';
import { products } from '../../data/mockData';

const categories = [
  { name: 'Lifestyle', caption: 'Daily favorites', accent: 'from-[#0F5B64] to-[#0b3b3f]' },
  { name: 'Tech', caption: 'Clean and smart', accent: 'from-[#FF5E13] to-[#ff8a4d]' },
  { name: 'Home Decor', caption: 'Warm textures', accent: 'from-[#1f2937] to-[#374151]' },
  { name: 'Wellness', caption: 'Calm essentials', accent: 'from-[#0f766e] to-[#14b8a6]' },
];

const testimonials = [
  { quote: 'The experience felt effortless from discovery to checkout.', author: 'Nadia R.' },
  { quote: 'Every product feels thoughtfully curated and beautifully priced.', author: 'Samir K.' },
];

const Home = () => {
  return (
    <div className="bg-[#f7f7f5] text-slate-800">
      <Banner />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Browse by mood</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Shop the vibe that fits your life</h2>
          </div>
          <a href="#featured" className="text-sm font-semibold text-[#0F5B64]">See all categories</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <Zoom >

              <div key={item.name} className={`rounded-[1.5rem] bg-gradient-to-br ${item.accent} p-[1px]`}>
                <div className="flex h-full flex-col justify-between rounded-[calc(1.5rem-1px)] bg-white/95 p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Collection</p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.caption}</p>
                  </div>
                  <button className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0F5B64]">
                    Discover now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Featured picks</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Most loved this week</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-[#0F5B64]">View all products</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] bg-[#0F5B64] p-8 text-white shadow-xl lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB07A]">Deal of the day</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Weekend savings on the pieces you love.</h2>
              <p className="mt-4 max-w-xl text-base text-slate-200">
                Enjoy free shipping, easy swaps, and curated bundles that make every purchase feel premium.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF5E13] px-5 py-3 font-semibold text-white transition hover:bg-[#e6530d]">
                Claim offer
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] border border-white/20 bg-white/10 p-4 backdrop-blur">
                <Truck size={22} className="text-[#FFB07A]" />
                <p className="mt-3 text-2xl font-semibold">24h</p>
                <p className="text-sm text-slate-200">Dispatch</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/20 bg-white/10 p-4 backdrop-blur">
                <ShoppingBag size={22} className="text-[#FFB07A]" />
                <p className="mt-3 text-2xl font-semibold">300+</p>
                <p className="text-sm text-slate-200">New arrivals</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/20 bg-white/10 p-4 backdrop-blur">
                <Star size={22} className="text-[#FFB07A]" />
                <p className="mt-3 text-2xl font-semibold">4.9/5</p>
                <p className="text-sm text-slate-200">Loved by shoppers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="">
          <CustomerReview />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">Newsletter</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Get first access to new drops.</h2>
              <p className="mt-3 max-w-2xl text-slate-600">Join our list for exclusive offers, launch alerts, and curated recommendations.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-[#0F5B64] sm:w-72" />
              <button className="rounded-full bg-[#0F5B64] px-5 py-3 font-semibold text-white transition hover:bg-[#0a4448]">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
