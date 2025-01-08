// Coding Challenge #1
var mark_weight = 78
var mark_height = 1.69

var john_weight = 95
var john_height = 1.88

var BMIM = mark_weight / mark_height ** 2
var BMIJ = john_weight / john_height ** 2

var higherBMI = BMIM > BMIJ

console.log(BMIM, BMIJ, higherBMI)


// Coding Challenge #2

if (higherBMI == true) {
    console.log(`Mark's BMI (${BMIM}) is higher than John's (${BMIJ})!`)
} else {
    console.log(`John's BMI (${BMIJ}) is higher than Mark's (${BMIM})!`)
}

