let Bildenummer = 0
input.onGesture(Gesture.Shake, function () {
    Bildenummer = randint(0, 2)
    if (Bildenummer == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (Bildenummer == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(3000)
    basic.clearScreen()
})
