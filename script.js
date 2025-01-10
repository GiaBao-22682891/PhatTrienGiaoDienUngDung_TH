//Part 1
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

// Coding Challenge #4

var bill = 275
var tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


//Part 2
//Coding Challenge #1
function calcAverage (s1, s2, s3) {
    return (s1 + s2 + s3)/3;
}

var scoresD = [44, 23, 71];
var scoresK = [65, 54, 49];

var scoresD2 = [85, 54, 41];
var scoresK2 = [23, 34, 27];

var playerD_p1 = calcAverage(...scoresD)
var playerK_p1 = calcAverage(...scoresK)

var playerD_p2 = calcAverage(...scoresD2)
var playerK_p2 = calcAverage(...scoresK2)

function checkWinner (player1, player2) {
    if (player1 >= 2*player2){
        console.log('Dolphins win (${player1} vs. ${player2})')
    }
    else if (player1*2 <= player2){
        console.log('Koalas win (${player1} vs. ${player2})')
    }
    else {
        console.log('No one wins');
    }
        
}
checkWinner(playerD_p1, playerK_p1)
checkWinner(playerD_p2, playerK_p2)
