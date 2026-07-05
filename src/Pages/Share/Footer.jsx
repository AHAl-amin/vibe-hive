import { Facebook, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react';
import logo from '../../../public/img/logo.png';
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl  text-lg font-semibold text-white">
                <img src={logo} alt="VibeHive Logo" className="h-12 w-12 rounded-xl " />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">VibeHive</p>
                <p className="text-sm text-slate-500">Curated for modern living</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Discover elevated essentials, smart savings, and design-forward picks made to turn everyday routines into something extraordinary.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-[#0F5B64] hover:text-[#0F5B64]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#0F5B64]">New arrivals</a></li>
              <li><a href="#" className="hover:text-[#0F5B64]">Best sellers</a></li>
              <li><a href="#" className="hover:text-[#0F5B64]">Deals</a></li>
              <li><a href="#" className="hover:text-[#0F5B64]">Gift cards</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#0F5B64]">Shipping & returns</a></li>
              <li><a href="#" className="hover:text-[#0F5B64]">Contact us</a></li>
              <li><a href="#" className="hover:text-[#0F5B64]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#0F5B64]">Track order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Stay in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#FF5E13]" /> +880 1700 000 000</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-[#FF5E13]" /> hello@vibehive.com</li>
              <li className="flex items-center gap-2"><Send size={16} className="text-[#FF5E13]" /> Live chat available</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VibeHive. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#0F5B64]">Privacy</a>
            <a href="#" className="hover:text-[#0F5B64]">Terms</a>
            <a href="#" className="hover:text-[#0F5B64]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;