import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  objectPosition?: string;
}

export default function ServiceCard({ title, description, icon, image, objectPosition = "center 25%" }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}
          style={{ objectPosition }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 left-4 z-20 bg-white p-3 rounded-xl shadow-lg text-brand-500">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
