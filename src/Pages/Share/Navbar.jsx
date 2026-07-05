import { useState } from 'react';
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../public/img/logo.png';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'Deals', to: '/deals' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl ">
            <img src={logo} alt="VibeHive Logo" className="h-12 w-12" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">VibeHive</p>
            <p className="text-xs text-slate-500">Style, simplified</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.name} to={link.to} className={`text-sm font-semibold transition ${isActive ? 'text-[#0F5B64]' : 'text-slate-600 hover:text-[#0F5B64]'}`}>
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-[#0F5B64] hover:text-[#0F5B64]">
            <Search size={18} />
          </button>
          <button className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-[#0F5B64] hover:text-[#0F5B64]">
            <Heart size={18} />
          </button>
          <button className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-[#0F5B64] hover:text-[#0F5B64]">
            <ShoppingBag size={18} />
          </button>
          <Link to="/login" className="rounded-full bg-[#0F5B64] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a4448]">
            Login
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-slate-200 p-2.5 text-slate-700 lg:hidden">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.name} to={link.to} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <button className="rounded-full border border-slate-200 p-2.5 text-slate-600">
                <User size={18} />
              </button>
              <Link to="/login" className="rounded-full bg-[#0F5B64] px-4 py-2.5 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
