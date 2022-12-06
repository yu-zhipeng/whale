import chroma from "chroma-js";

/**
 * calculate the color in dark mode based on the current color
 */
export const calculateDarken = (color: string | number | chroma.Color) => {
    return chroma(color).darken().hex();
}

export const calculateAdjacentColor = (color: string | number | chroma.Color) => {
    return chroma(color).darken().hex();
}

export const calculateAlphaColor = (color: string | number | chroma.Color, alpha: number) => {
    return chroma(color).alpha(alpha).hex();
}