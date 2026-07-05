import { ArrowRight } from 'lucide-react';

const PageHero = ({ badge, title, subtitle, actions }) => {
    return (
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                    {badge ? <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13]">{badge}</p> : null}
                    <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h1>
                    {subtitle ? <p className="mt-4 text-base leading-8 text-slate-600">{subtitle}</p> : null}
                </div>
                {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
            </div>
        </div>
    );
};

export default PageHero;
