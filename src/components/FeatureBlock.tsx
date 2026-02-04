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
        <div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-[#646cff]">{title}</h2>
            {subtitle && <p className="text-lg text-gray-400 mb-6">{subtitle}</p>}
            <div className="prose max-w-none text-gray-400 space-y-4">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
