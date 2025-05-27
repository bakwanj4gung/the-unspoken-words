import { Comfortaa, Gaegu, Klee_One, Mansalva, Pacifico } from "next/font/google";


export const gaegu = Gaegu({
    weight: "400"
})

export const comfortaa = Comfortaa({
    subsets: ["latin"],
    adjustFontFallback: false
});

export const kleeOne = Klee_One({
    adjustFontFallback: false,
    weight: "400"
})

export const mansalva = Mansalva({
    weight: '400',
})

export const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400'
})