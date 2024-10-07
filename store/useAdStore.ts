// store/useAdStore.ts
import { create } from 'zustand';

interface AdData {
  brandName: string;
  productName: string;
  productDescription: string;
  adCopy: string;
}

interface AdState {
  adData: AdData | null;
  setAdData: (data: AdData) => void;
}

export const useAdStore = create<AdState>((set) => ({
  adData: null,
  setAdData: (data: AdData) => set({ adData: data }),
}));
