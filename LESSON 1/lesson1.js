console.log("student score:")
let numa = 85;
let numb = 72;
let numc = 91;
let numd = 64;
let nume = 78;

console.log(numa);
console.log(numb);
console.log(numc);
console.log(numd);
console.log(nume);

console.log("                    ");

let  name1 = numa;
const name2  = " - verygood - passed"
console.log("student 1 : " + name1 + name2);

let  name3 = numb;
const name4 = " - failed"
console.log("student 2 : " + name3 + name4);

let  name5 =numc;
const name6 =" - excellent - passed";
console.log("student 3 : " + name5 + name6);

let name7 = numd;
const name8 = " - failed"
console.log("student 4 : " + name7 + name8);

let name9= nume;
const name10 = " good - passed ";
console.log("student 5 : " + name9 + name10);

console.log("                    ");

let totalScore = numa + numb + numc + numd + nume;
console.log("total score: " + totalScore);

let averageScore = totalScore/5;
console.log("average score: " + averageScore);

console.log("lowest score: " + numd);

let passed = (numa >= 75) + (numb >= 75) + (numc >= 75) + (numd >= 75) + (nume >= 75);
let failed = (numa < 75 ) + (numb < 75) + (numc < 75) + (numd <75) + (nume < 75);

console.log("passed: " + passed);
console.log("failed: " + failed);