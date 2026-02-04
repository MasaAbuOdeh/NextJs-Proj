import {
  ArrowUp,
} from 'lucide-react';

export default function Card({ icon:Icon, title, subtitle, value, changeType}) {
 return (
    <div dir="rtl" className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
            <Icon className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-500">{title}</span>
            <p className="text-xl font-bold tracking-tight text-neutral-900">{subtitle}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full mt-2 px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700">
          <ArrowUp className="h-3 w-3" />
          {value}%
        </span>
      </div>
    </div>
  );
}
