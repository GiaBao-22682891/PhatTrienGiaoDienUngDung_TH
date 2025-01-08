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


//Coding Challenge #3

var scoreD = [96, 106, 89]
var scoreK = [88, 91, 110]

var avgD = (scoreD[0] + scoreD[1] + scoreD[2]) / 3
var avgK = (scoreK[0] + scoreK[1] + scoreK[2]) / 3

if (avgD > avgK && avgD >= 100) {
    console.log(`Dolphins win the trophy with score ${avgD}> ${avgK}`)
} else if (avgD < avgK && avgK >= 100) {
    console.log(`Koalas win the trophy with score ${avgK}>${avgD}`)
} else
    console.log('No one wins the trophy!')