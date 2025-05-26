import {create} from "zustand"
import { persist } from "zustand/middleware"

export const useProductDetailsStore = create() (
    persist(
        (set) => ({
            storedProductId: 0,
            setStoredProductId: (id) => set({storedProductId: id}),
        }),
        {name: "storedProductId"}
    )
)


export const useShoppingCartItemsStore = create() (
    persist(
        (set) => ({
            shoppingCartItems: [],
            setShoppingCartItems: (items) => set({shoppingCartItems: items}),
        }),
        {name: "shoppingCartItems"}
    )
)

export const useWishlistItemsStore = create() (
    persist(
        (set) => ({
            wishlistItems: [],
            setWishlistItems: (items) => set({wishlistItems: items}),
        }),
        {name: "wishlistItems"}
    )
)

export const useProductTypeFilterStore = create() (
    persist(
        (set) => ({
            productTypeFilter: "All",
            setProductTypeFilter: (filter) => set({productTypeFilter: filter}),
        }),
        {name: "productTypeFilter"}
    )
)

export const useExtraFilterStore = create() (
    persist(
        (set) => ({
            extraFilter: "None",
            setExtraFilter: (filter) => set({extraFilter: filter}),
        }),
        {name: "extraFilter"}
    )
)

export const useSubTotalPriceStore = create() (
    persist(
        (set) => ({
            subTotalPrice: 0,
            setSubTotalPrice: (price) => set({subTotalPrice: price}),
        }),
        {name: "subTotalPrice"}
    )
)
