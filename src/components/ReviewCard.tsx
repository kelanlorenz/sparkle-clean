import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
  date: string;
}

export default function ReviewCard({ name, text, date }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-slate-600 mb-6 flex-grow italic">"{text}"</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="text-sm text-slate-400">{date}</span>
      </div>
    </div>
  );
}
