import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  id?: string;
};

export default function FeatureBlock({ title, subtitle, children, id }: Props) {
  return (
    <section id={id} className="py-3 md:py-6">
      <div className="max-w-3xl mx-auto px-2 sm:px-3">
        <div>
          <div className="text-left">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 md:mb-4 text-[#646cff]">{title}</h2>
            {subtitle && <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 md:mb-6">{subtitle}</p>}
            <div className="prose max-w-none text-gray-400 text-sm sm:text-base">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
