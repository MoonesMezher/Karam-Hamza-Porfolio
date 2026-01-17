import { create } from "zustand";
import { persist } from "zustand/middleware"

const useLang = create(
    persist(

        (set) => ({
            lang: "en",
            setLang: (newLang) => set({ lang: newLang })
        }),
        {
            name: "theme-storage",
        }
    )
);

export default useLang;
