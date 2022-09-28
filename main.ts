function Serpentine_x (x: number) {
    if (0 % 2 == 1) {
    	
    } else {
        strip.setMatrixColor(Matrixbreite - 1 - x, 0, neopixel.rgb(0, 0, 0))
    }
}
function Serpentine_Matrix_xyRGB (x: number, y: number, R: number, G: number, B: number) {
    if (y % 2 == 1) {
        strip.setMatrixColor(x, y, neopixel.rgb(R, G, B))
    } else {
        strip.setMatrixColor(Matrixbreite - 1 - x, y, neopixel.rgb(R, G, B))
    }
}
let strip: neopixel.Strip = null
let Matrixbreite = 0
Matrixbreite = 8
strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.setMatrixWidth(Matrixbreite)
basic.forever(function () {
    for (let Index = 0; Index <= 7; Index++) {
        strip.setMatrixColor(0, 0, neopixel.colors(NeoPixelColors.Red))
        Serpentine_Matrix_xyRGB(Index, Matrixbreite - 1 - Index, 0, 20, 200)
        Serpentine_Matrix_xyRGB(Index, Index, 200, 20, 0)
        strip.show()
    }
})
