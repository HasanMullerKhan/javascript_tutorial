let js = "Variable 1 = Strawberries";
if(js === "Variable 1 = Strawberries") alert("That is correct!");
else alert("ERROR!");
console.log(5+7*98);

const country = "Pakistan";
const continent = "Asia";
let pakistanPopulation = "216000000.6";

console.log(country);
console.log(continent);
console.log(pakistanPopulation);

const isIsland = false;
let language;

console.log(isIsland);
console.log(language);

console.log(typeof isIsland);
console.log(typeof language);

language = "Pothwari";
console.log(language);

pakistanPopulation /=2;
console.log(pakistanPopulation);
pakistanPopulation ++;
console.log(pakistanPopulation);

let finlandPopulation = 6000000;

console.log(pakistanPopulation > finlandPopulation);

let averagePopulation = 33000000;

console.log (pakistanPopulation < averagePopulation);

let description = country + " is in " + continent + ", and its " + pakistanPopulation + " people speak " + language;

console.log(description);

let massJohnTD1 = 92;
let massMarkTD1 = 78;
let heightJohnTD1 = 1.95;
let heightMarkTD1 = 1.69;


let BMIjohnTD1 = massJohnTD1/heightJohnTD1**2;
let BMImarkTD1 = massMarkTD1/heightMarkTD1**2;

let markHigherBMItd1 = BMImarkTD1 > BMIjohnTD1;
console.log("Mark's BMI is: " + BMImarkTD1 + ".", "John's BMI is: " + BMIjohnTD1 + ".");
if(BMImarkTD1 > BMIjohnTD1) console.log("Mark's BMI is higher than John's.");
else(console.log("John's BMI is higher than Mark's."));
console.log(markHigherBMItd1);

let massJohnTD2 = 85;
let massMarkTD2 = 95;
let heightJohnTD2 = 1.76;
let heightMarkTD2 = 1.88;


let BMIjohnTD2 = massJohnTD2 / heightJohnTD2**2;
let BMImarkTD2 = massMarkTD2 / heightMarkTD2**2;

let markHigherBMItd2 = BMImarkTD2 > BMIjohnTD2;
// console.log("Mark's BMI is: " + BMImarkTD2 + ".", "John's BMI is: " +  + ".");
if(BMImarkTD2 > BMIjohnTD2) console.log(`Mark's BMI is higher than John's and is ${BMImarkTD2}. John's BMI is ${BMIjohnTD2}.`);
else(console.log(`John's BMI is higher than Mark's and is ${BMIjohnTD2}. Mark's BMI is ${BMImarkTD2}`));
// console.log(markHigherBMItd2);

description = `${country} is in ${continent}, and its ${pakistanPopulation} people speak ${language}.`;

console.log(description);

if(pakistanPopulation > 33000000){
    console.log(`${country}'s population is above average.`);
}
else{
    let howMuchBelowAverage = 33000000 - pakistanPopulation;
    console.log(`${country}'s population is ${howMuchBelowAverage} below average.`);
}

console.log('9'-'5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

const numNeighbours = prompt('How many neighbour borders does your country have?');

if (Number(numNeighbours) === 1) {
    console.log('Only 1 border!');
}

else if (numNeighbours > 1) {
    console.log(`More than 1 border! Pakistan has 4 borders!`);
}

else {
    console.log('No borders!');
}

if (language ==="English" && pakistanPopulation <= 50000000 && !island) {
    console.log(`You should live in ${country} :).` );
}

else { 
    console.log(`${country} does not meet your criteria :(.`)
}

let avgScoreDolphins = (96 + 108 + 89) / 3;
let avgScoreKoalas = (88 + 91 + 110) / 3;

console.log(avgScoreDolphins);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas) {
    let pointsDifference = avgScoreDolphins - avgScoreKoalas;
    console.log(`Dolphins win with a score of ${avgScoreDolphins} and beat Koalas by ${pointsDifference}.`);
}

else if (avgScoreDolphins < avgScoreKoalas) {
    let pointsDifference = avgScoreKoalas - avgScoreDolphins;
    console.log(`Koalas win with a score of ${avgScoreKoalas} and beat Dolphins by ${pointsDifference}.`);
}


avgScoreDolphins = (97 + 112 + 101) / 3;
avgScoreKoalas = (109 + 95 + 112) / 3;

console.log(avgScoreDolphins);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    pointsDifference = avgScoreDolphins - avgScoreKoalas;
    console.log(`Dolphins win with a score of ${avgScoreDolphins} and beat Koalas by ${pointsDifference}.`);
}

else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
    pointsDifference = avgScoreKoalas - avgScoreDolphins;
    console.log(`Koalas win with a score of ${avgScoreKoalas} and beat Dolphins by ${pointsDifference}.`);
}


avgScoreDolphins = (97 + 112 + 101) / 3;
avgScoreKoalas = (109 + 95 + 106) / 3;

console.log(avgScoreDolphins);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    pointsDifference = avgScoreDolphins - avgScoreKoalas;
    console.log(`Dolphins win with a score of ${avgScoreDolphins} and beat Koalas by ${pointsDifference}.`);
}

else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
    pointsDifference = avgScoreKoalas - avgScoreDolphins;
    console.log(`Koalas win with a score of ${avgScoreKoalas} and beat Dolphins by ${pointsDifference}.`);
}

else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100){
    console.log(`Draw! Nobody wins the trophy!`);
}

let day = "Thursday";

if (day === "Monday") {
    console.log("Mathematics");
}

else if (day === "Tuesday") {
    console.log("English");
}

else if (day === "Wednesday" || day === "Thursday") {
    console.log("Science");
}

else if (day === "Friday") {
    console.log("Prayers");
}

else {
    console.log("It is the weekend");
}

switch(language) {
    case 'Chinese':
    case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
    case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
    case 'English':
    console.log('3rd place');
    break;
    case 'Hindi':
    console.log('4th place');
    break;
    case 'Pothwari':
    console.log('One of the least spoken languages');
    break;
    default:
        console.log('Great language too!');
}

pakistanPopulation >= 3000000 ? console.log (`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

let bill = 430;

let tip = bill >= 50 & bill <= 300 ? (15 / 100) * bill : (20/100) * bill;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`);