input.onButtonPressed(Button.A, function () {
    control2 = randint(1, 6)
    if (control2 == 1) {
        basic.showString("S")
    } else if (control2 == 2) {
        basic.showString("R")
    } else {
        basic.showString("N")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (lista_de_texto._pickRandom()))
})
input.onButtonPressed(Button.B, function () {
    control2 = randint(1, 6)
    if (control2 == 1) {
        basic.showString("N")
    } else if (control2 == 2) {
        basic.showString("R")
    } else {
        basic.showString("S")
    }
})
let control2 = 0
let lista_de_texto: string[] = []
lista_de_texto = [
"Si",
"No",
"Depende",
"Seguro que si",
"Seguro que no",
"No lo se",
"A lo mejor",
"Es favorable",
"Desfavorable"
]
basic.showString("hola")
basic.forever(function () {
	
})
