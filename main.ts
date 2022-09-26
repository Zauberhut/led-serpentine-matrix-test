function Serpentine_Matrix_xyRGB (x: number, y: number, R: number, G: number, B: number) {
    if (y % 2 == 1) {
        strip.setMatrixColor(x, y, neopixel.rgb(R, G, B))
    } else {
        strip.setMatrixColor(Matrixbreite + 1 - x, y, neopixel.rgb(R, G, B))
    }
}
let strip: neopixel.Strip = null
let Matrixbreite = 0
Matrixbreite = 8
strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.setMatrixWidth(Matrixbreite)
basic.forever(function () {
    Serpentine_Matrix_xyRGB(3, 4, 0, 20, 255)
    strip.show()
})
