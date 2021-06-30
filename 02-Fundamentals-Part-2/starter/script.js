'use strict';

function describeCountry(country, population, capitalCity) {
    return(console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`));
}

describeCountry('Pakistan', 216.6, 'Islamabad');

function percentageOfWorld1(country, population) {
    return(`${country}'s population is ${population}, so it's about ${(population / 7900000000) *100} of the world population.`);
}

let pakistan1 = percentageOfWorld1('Pakistan', 216600000);
percentageOfWorld1('China', 1441000000);
percentageOfWorld1('Japan', 1263000000);

let percentageOfWorld2 = function(country, population) {
    return(`${country}'s population is ${population}, so it's about ${(population / 7900000000) *100} of the world population.`);
}

console.log(pakistan1);

console.log('Expression function: ');
let pakistan2 = percentageOfWorld2('China', 216600000);

console.log(`Both functions together: ${pakistan1} ${pakistan2}`);

// Arrow Function
const percentageOfWorld3 = (country, population) => `${country}'s population is ${population}, so it's about ${(population / 7900000000) *100} of the world population.`;

console.log(percentageOfWorld3('Pakistan', 216600000));

function describePopulation(country, population) {
    
    const percentage = percentageOfWorld1
    
    return (percentageOfWorld1(country, population));
}

console.log('Calling a function inside a function: ' + describePopulation('Pakistan', 216600000));

//Coding Challenge - Functions

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= koalasAvg *2) {
        console.log(`Dolphins win ${dolphinsAvg} vs ${koalasAvg}`);
    }
    else if (koalasAvg >= dolphinsAvg *2) {
        console.log(`Koalas win ${koalasAvg} vs ${dolphinsAvg}`);
    }
    else {
        console.log('Nobody wins!');
    }
}

const dolphinsAvg = calcAvg(85, 54, 41);
console.log(dolphinsAvg);
const koalasAvg = calcAvg(23, 24, 37);

checkWinner (dolphinsAvg, koalasAvg);

const population = [1398000000, 34270000, 82000000, 4685000];

console.log(population.length === 4);

function percentageOfWorld(population) {
    return(`${(population / 7900000000) *100}`);
}

const percentages = [
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3])
];
console.log(percentages);

const neighboursOfSyria = ['Turkey', 'Iraq', 'Jordan', 'Lebanon'];
console.log(neighboursOfSyria.push('Utopia'));
console.log(neighboursOfSyria);
neighboursOfSyria.pop();
console.log(neighboursOfSyria);

if(neighboursOfSyria.includes('Germany')) {
    console.log('Probably not a country in Al-Shaam');
}

neighboursOfSyria[neighboursOfSyria.indexOf('Iraq')] = 'Pakistan';
console.log(neighboursOfSyria)

function calcTip(input) {
    if(input >= 50 && input <= 300) {
        let tipPercentage = (15/100) * input;
        return(tipPercentage);
    }
    else {
        let tipPercentage = (20/100) * input;
        return(tipPercentage);
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(total);

const hasan = {
    firstName: 'Hasan',
    lastName: 'Khan',
    middleName: 'Ali',
    age: 2021 - 1998,
    friends: ['Tyson', 'Vlad', 'Alexander']
}

console.log(`${hasan.firstName} ${hasan.middleName} ${hasan.lastName} is ${hasan.age} and has ${hasan.friends.length} friends, ${hasan.friends[0]}, ${hasan.friends[1]} and ${hasan.friends[2]}.`);

const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: '15000000',
    neighbours: ['Scotland', 'Wales', 'Ireland']
}

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language.toLowerCase()} speaking people, ${myCountry.neighbours.length} neighbouring countries: ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]} and a capital called ${myCountry.capital}.`);

// let date =  new Date().getFullYear();
// console.log(date);
// let newDate = new Date(1998, 5, 1);
// console.log(newDate);



const hasanObject = {
    firstName: 'Hasan',
    lastName: 'Khan',
    birthYear: 1998,
    age: function (){
        return this.age = 2021 - this.birthYear;
    },
    job: 'Teacher',
    hasDriversLicense: false,
    getSummary: function (){
        return `${this.firstName} ${this.lastName} is a ${this.age()} year old ${hasanObject.job.toLowerCase()} and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
    }
} 

console.log(hasanObject.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI is ${mark.bmi} and is higher than John's (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`John's BMI is ${john.bmi} and is higher than Mark's (${mark.bmi})`);
}