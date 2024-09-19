"""
Created by: Ella
Created on: Sep 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *
from time import *

current_temperature = temperature


display.clear
display.show(Image.HAPPY)
sleep(1)

while True:
    if button_a.is_pressed():
        current_temperature = temperature
        display.scroll("The current temperature is:" + str(current_temperature) + "°C")
