radio.onReceivedNumber(function (receivedNumber) {
    ShowAngry(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    ShowAngry(9)
})
function ShowAware () {
	
}
input.onButtonPressed(Button.AB, function () {
    Initialize()
})
input.onButtonPressed(Button.B, function () {
	
})
function Initialize () {
    radio.setGroup(1)
    music.setBuiltInSpeakerEnabled(false)
    basic.clearScreen()
}
function ClearScreen () {
    basic.clearScreen()
}
function ShowAngry (receivedNumber: number) {
    basic.showNumber(receivedNumber)
}
Initialize()
basic.forever(function () {
	
})
