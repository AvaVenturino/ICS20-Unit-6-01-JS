// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-JS/sw.js", {
    scope: "/ICS2O-Unit-6-01-JS/",
  })
}

"use strict"
/**
 * This function calculates the area of a triangle.
 */
function calculate() {
  // input
  const fahrenheit = document.getElementById("fahrenheit").value
  // process
  const celsius = ((fahrenheit - 32) * 5.0) / 9.0
  // output
  document.getElementById("celsius").innerHTML =
    "The temperature in Celsius is: " + celsius.toFixed(2) + " °C"
}
