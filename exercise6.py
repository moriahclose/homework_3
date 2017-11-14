# exercise6.py
# Moriah Tolliver and Gabriel Say

import math

a = 17.27
b = 237.7

RH = float( input( "Enter relative humidity: " ))
T = float( input( "Enter temperature in degrees celsius: " ))

f = ((a * T) / (b + T)) + math.log(RH)

dewPoint = (b * f) / (a - f)

print(dewPoint)
