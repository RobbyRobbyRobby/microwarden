input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
music.setBuiltInSpeakerEnabled(true)
let HasHeardSomething = 0
basic.clearScreen()
basic.forever(function () {
    if (input.soundLevel() > 80 && HasHeardSomething < 2) {
        HasHeardSomething = 2
        basic.showIcon(IconNames.Angry)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    } else if (input.soundLevel() > 30 && HasHeardSomething < 1) {
        HasHeardSomething = 1
        basic.showIcon(IconNames.Asleep)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    }
})
loops.everyInterval(3000, function () {
    if (input.soundLevel() < 10 && HasHeardSomething == 0) {
        basic.clearScreen()
    }
    HasHeardSomething = 0
})
