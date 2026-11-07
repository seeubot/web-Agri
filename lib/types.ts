export type Platform = "amazon" | "flipkart" | "meesho" | "other";

export interface AffiliateItem {
  _id: string;
  title: string;
  teluguTitle?: string;
  description?: string;
  platform: Platform;
  category?: string;
  imageUrl?: string;
  productUrl?: string;
  downloadUrl?: string;
  commissionRate?: number;
  displayOrder?: number;
  isActive?: boolean;
}

export interface Pagination { page: number; pages: number; total: number; limit: number; }
export interface ListResponse { items: AffiliateItem[]; pagination: Pagination; }
