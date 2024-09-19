/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella
 * Created on: Sep 2024
 * This program tells the current temperature
*/

//variable for the current temperature
let currentTemperature = input.temperature()

//
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function() {
    currentTemperature = input.temperature()
    basic.showString('The current temperature is:' + (currentTemperature).toString() + '°C')
})
