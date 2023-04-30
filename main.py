def rockpaperscissors():
    global play
    play = randint(1, 3)
    if play == 1:
        radio.send_string("scissors")
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        . # . # .
        """)
    elif play == 2:
        radio.send_string("rock")
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
    else:
        radio.send_string("paper")
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
play = 0
radio.set_group(1)
Flag = 0