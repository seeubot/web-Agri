import type { AffiliateItem } from "@/lib/types";
import { platformLabel, platformColor } from "@/lib/utils";
import ProductImage from "./ProductImage";
export default function StoreCard({ item }: { item: AffiliateItem }) {
  return (
    <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 hover:border-brand-200 dark:hover:border-brand-800">
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <ProductImage url={item.imageUrl} title={item.title} />
        {item.commissionRate && item.commissionRate > 0 ? (
          <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-700 text-white text-[11px] font-bold shadow-lg">
            ▲ {item.commissionRate}%
          </span>
        ) : null}
        <span
          className={`absolute bottom-2.5 left-2.5 px-2 py-1 rounded-md text-white text-[10px] font-bold tracking-wide shadow ${platformColor(
            item.platform
          )}`}
        >
          {platformLabel(item.platform).toUpperCase()}
        </span>
        {item.isActive === false && (
          <span className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md bg-red-700 text-white text-[10px] font-bold shadow">
            INACTIVE
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <h3 className="font-semibold text-sm leading-snug line-clamp-2 text-gray-900 dark:text-gray-100">
          {item.title}
        </h3>
        {item.teluguTitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {item.teluguTitle}
          </p>
        )}
        {item.category && (
          <span className="inline-block mt-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 w-fit">
            {item.category}
          </span>
        )}
      </div>
    </div>
  );
}
