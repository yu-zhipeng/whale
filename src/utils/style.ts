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