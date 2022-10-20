radio.onReceivedNumber(function (receivedNumber) {
    ShowAngry(receivedNumber)
})
function FlashLEDs (numberOfFlashes: number) {
    for (let index = 0; index < numberOfFlashes; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
    }
    ClearScreen()
}
input.onButtonPressed(Button.A, function () {
    ShowAngry(9)
})
function ShowAware () {
	
}
input.onButtonPressed(Button.B, function () {
    Initialize()
})
function Initialize () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    radio.setGroup(1)
    music.setBuiltInSpeakerEnabled(false)
    basic.clearScreen()
}
function ClearScreen () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function ShowAngry (receivedNumber: number) {
    basic.showNumber(receivedNumber)
    FlashLEDs(receivedNumber)
}
Initialize()
