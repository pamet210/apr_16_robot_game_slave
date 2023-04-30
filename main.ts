function rockpaperscissors () {
    play = randint(1, 3)
    if (play == 1) {
        radio.sendString("scissors")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
    } else if (play == 2) {
        radio.sendString("rock")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        radio.sendString("paper")
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
}
function back () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "start") {
        rockpaperscissors()
    }
    if (receivedString == "scissors") {
        if (play == 2) {
            go()
        } else if (play == 3) {
            back()
        }
        radio.sendString("next")
    } else if (receivedString == "rock") {
        if (play == 1) {
            back()
        } else if (play == 3) {
            go()
        }
        radio.sendString("next")
    } else if (receivedString == "paper") {
        if (play == 1) {
            go()
        } else if (play == 2) {
            back()
        }
        radio.sendString("next")
    }
})
function go () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
let play = 0
radio.setGroup(1)
