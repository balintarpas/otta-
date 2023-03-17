let sprite = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(100)
    sprite = 5
    for (let index = 0; index < 15; index++) {
        for (let index = 0; index < 4; index++) {
            led.plot(2, led.pointBrightness(2, 4))
            led.plot(2, led.pointBrightness(2, 4))
            led.plot(3, 2)
            led.setBrightness(255)
            led.plotBarGraph(
            3,
            5
            )
        }
    }
})
