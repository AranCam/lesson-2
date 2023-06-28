GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire2, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    GAME_ZIP64.runMotor(100)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
        if (currentposition - 1 > -1) {
            GAME_ZIP64.runMotor(100)
        }
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    display = GAME_ZIP64.createZIP64Display()
    display.setBrightness(30)
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Blue))
    display.setPixelColorAt(1, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(12, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(7, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(21, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(63, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(34, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(57, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setPixelColorAt(52, GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
})
let currentposition = 0
let display: GAME_ZIP64.ZIP64Display = null
display = GAME_ZIP64.createZIP64Display()
display.setBrightness(30)
currentposition = 0
display.setPixelColorAt(currentposition, GAME_ZIP64.colors(ZipLedColors.Red))
display.show()
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
        if (currentposition + 1 < 64) {
            display.setPixelColorAt(currentposition, GAME_ZIP64.colors(ZipLedColors.Blue))
            currentposition += 1
            display.setPixelColorAt(currentposition, GAME_ZIP64.rgb(255, 15, 50))
            display.show()
            basic.pause(200)
        } else {
            GAME_ZIP64.runMotor(100)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Down)) {
        if (currentposition + 7 < 63) {
            display.setPixelColorAt(currentposition, GAME_ZIP64.colors(ZipLedColors.Blue))
            currentposition += 8
            display.setPixelColorAt(currentposition, GAME_ZIP64.rgb(255, 15, 50))
            display.show()
            basic.pause(200)
        } else {
            GAME_ZIP64.runMotor(100)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
        if (currentposition - -1 > -1) {
            display.setPixelColorAt(currentposition, GAME_ZIP64.colors(ZipLedColors.Blue))
            currentposition += -1
            display.setPixelColorAt(currentposition, GAME_ZIP64.rgb(255, 15, 50))
            display.show()
            basic.pause(200)
        } else {
            GAME_ZIP64.runMotor(100)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Up)) {
        if (currentposition - 8 > -1) {
            display.setPixelColorAt(currentposition, GAME_ZIP64.colors(ZipLedColors.Blue))
            currentposition += -8
            display.setPixelColorAt(currentposition, GAME_ZIP64.rgb(255, 15, 50))
            display.show()
            basic.pause(200)
        } else {
            GAME_ZIP64.runMotor(100)
            basic.pause(1000)
        }
    }
})
