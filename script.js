// 'use strict';
let line = 0;
const fprint = (text) => {
  let e = document.createElement("p");
  if (Array.isArray(text)) {
    let message = "[";
    text.forEach((item) => (message += item + ","));
    message += "]";
    e.appendChild(document.createTextNode(`Print ${++line} : ` + message));
  } else {
    e.appendChild(document.createTextNode(`Print ${++line} : ` + text));
  }
  document.getElementById("print").appendChild(e);
};

// const a = {
//     name: 'amine',
//     age: 18
// }

// const b = ({name,age}) => (
//     console.log(`${name} is the best on js, he has ${age} year old`)
// );

// const day ='sunday'

// switch(day){
//     case 'monday':
//         fprint("course of monday")
//         break
//     case 'tursday':
//         fprint("course of tursday")
//         break
//     case 'saturday':
//     case 'sunday':
//         fprint("enjoy the Weekend")
//         break
//     default:
//         fprint("course default")
//         break
// }

// let bill = 100
// let tip = (bill>=50 && bill<= 300)? bill*0.15 : bill*0.20;
// fprint(`The bill was ${bill}, the tip was ${tip}, the total was ${bill+tip}`)

// //functions

// //function declaration
// function calAge(birthday){
//     return 2021-birthday;
// }
// //function expression
// const calAge2 = function(birthday){
//     return 2021-birthday;
// }
// let age = calAge2(1993);

// fprint(calAge(1993));
// fprint(age);

//Arrow functions
// const age = birthday => 2021 - birthday;
// fprint(`your age is : ${age(1993)}`);

// const yearsUntilRetirement = (birthday,firstName)=> {
//     const yearsAge = age(birthday);
//     return `you will be in Retirement after ${60 - yearsAge} years - ${firstName}`;
// }
// fprint(yearsUntilRetirement(1993,"BELFKIH Mohammed Amine"));
// fprint(yearsUntilRetirement(1998,"BELFKIH Chaimae"));
// fprint(yearsUntilRetirement(1963,"BELFKIH Adil"));

// Coding challenge #1
// const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3;

// const avgKoalas = calcAverage(44,23,71);
// const avgDolphins = calcAverage(85,54,41);

// function checkWinner(avgKoalas,avgDolphins){
//     if(avgDolphins>avgKoalas){
//         fprint(`the Dolphins team win (${avgDolphins} vs. ${avgKoalas})`)
//     }else if(avgDolphins<avgKoalas){
//         fprint(`the Koalas team win (${avgKoalas} vs. ${avgDolphins})`)
//     }else{
//         fprint(`No one win this party`)
//     }
// }
// checkWinner(avgKoalas,avgDolphins);

//coding challenge

//Arrays
// const table = ['amine','said','ahmed']
// const tab = new Array("amine","said","ahmed")
// console.log(table);
// console.log(tab);
// // fprint(table.length)
// //array operations
//     //methods
//         //push --Add element
//         tab.push("fahd");
//         fprint(tab);

//         //pop --remove the last element
//         tab.pop();
//         fprint(tab);

//         //indexOf --index of an element in the array -if not exist return -1
//         fprint(tab.indexOf('said'));
//         fprint(tab.indexOf('null'));

//         //includes --verify that an element exist in array
//         fprint(tab.includes('amine'));
//         fprint(tab.includes('null'));

//Arrays

//objects
// const pers = {
//     firstName  : "Mohammed Amine",
//     lastName : "BELFKIH",
//     birthday : 1993,
//     adress : "temara",
//     job : "IT",
//     friends : ['Oussama','Ayoub','Adnane'],

//     calAge : function(){
//         return 2021 - this.birthday
//     }
// }

// fprint(`${pers.firstName} is a ${pers.calAge()}-old ${pers.job}`)

//challenge

// const mark = {
//     fullName : "Mark Miller",
//     mass : 78,
//     height : 1.69,
//     calBMI : function(){
//         return this.mass / (this.height**2)
//     },
//     compareTo : function(pers){
//         return this.calBMI() - pers.calBMI()
//     }
// }
// const john = {
//     fullName : "John Smith",
//     mass : 92,
//     height : 1.95,
//     calBMI : function(){
//         return this.mass / (this.height**2)
//     },
//     compareTo : function(pers){
//         return this.calBMI() - pers.calBMI()
//     }
// }
// const list = {
//     higher : null,
//     lower : null,
//     equals : 0
// }
// if (mark.compareTo(john)>0) {
//     list.higher = mark
//     list.lower = john
// }else if(mark.compareTo(john) == 0){
//     list.higher = john
//     list.lower = mark
// }else{
//     list.equals = 1
// }
//list.equals ==0 ? fprint(`${list.higher.fullName} BMI (${list.higher.calBMI()}) is higher than ${list.lower.fullName} BMI (${list.lower.calBMI()})`) : fprint("equals")
//objects

//while loop

// let i = 0;
// let t = [];
// const run = () => Math.trunc(Math.random() * 15) + 1;
// let n = run();
// while (n !== 15) {
//   t.push(n);
//   n = run();
//   i++;
// }
// fprint(`${i} cycle before generate number 6`);
// fprint(t);
// console.log('123');
// const liste = [10, 5, 18, 2, 19, 1, 18, 2];
// liste.forEach((item, index) => {
//   fprint(`index : ${index}`);
//   if (item === 18) liste.splice(index, 1);
//   fprint(`index : ${index}`);
// });
// fprint(liste);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 5000];
var rem = [2, 5];
var filtered = array.filter((value) => !rem.includes(value));
fprint(filtered);
