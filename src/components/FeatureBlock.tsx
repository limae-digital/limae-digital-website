import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  id?: string;
};

export default function FeatureBlock({ title, subtitle, children, reverse = false, id }: Props) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid gap-10 items-center md:grid-cols-2 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-400 mb-6">{subtitle}</p>}
            <div className="prose max-w-none text-gray-200">{children}</div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="w-full max-w-lg bg-gradient-to-br from-white/5 to-white/3 rounded-2xl shadow-2xl p-6">
              <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400">
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="80" rx="8" fill="#0b1220"/>
                  <g stroke="#374151" strokeWidth="1.5">
                    <path d="M10 20h100" />
                    <path d="M10 40h100" />
                    <path d="M10 60h100" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
