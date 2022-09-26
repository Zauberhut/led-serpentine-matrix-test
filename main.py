def Serpentine_Matrix_xyRGB(x: number, y: number, R: number, G: number, B: number):
    if y % 2 == 1:
        strip.set_matrix_color(x, y, neopixel.rgb(R, G, B))
    else:
        strip.set_matrix_color(Matrixbreite + 1 - x, y, neopixel.rgb(R, G, B))
strip: neopixel.Strip = None
Matrixbreite = 0
Matrixbreite = 8
strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.set_matrix_width(Matrixbreite)

def on_forever():
    Serpentine_Matrix_xyRGB(3, 4, 0, 20, 255)
    strip.show()
basic.forever(on_forever)
