// Sander IMC - Oppgavesett 3a Operators

console.log("Elev Elevesen - Oppgavesett 3a Operators");

//oppg 2
let x;
x = 5;

console.log(x);

x = 10;
console.log(x);

//oppg 3

let a;
let b;

a = 5;
b = 3;

console.log(a + b);

//opratøren + legger sammen to eller flere verdier.

//oppg 4
let c;
let d;

c = 10;
d = 4;
 
console.log(c - d);
//opratøren trekker fra to eller flere verdier.


//oppg 5
let e;
let f;

e = 20;
f = 5;

console.log(e / f);
//opratøren deler to eller flere verdier.


//oppg 6
let g;
let h;

g = 6;
h = 7;

console.log(g * h);
//opratøren ganger to eller flere verdier.

//oppg 7
let resultat;
resultat = (5 + 3) * 2;

console.log(resultat);

//først så regner den ut det som er inni parentesen, altså 5 + 3 = 8, deretter ganger den det med 2, som gir 16.


//Sander - Oppgavesett 3b Sammensatte operatorer

console.log("Sander - Oppgavesett 3b Sammensatte operatorer");

//oppgave 2
let score;
score = 10;

score = 20;
console.log(score);


//oppgave 3
let points;
points = 10;

points += 5;
console.log(points);
//Det den gjør er at den adder 5 til den opprinelige verdien av points, som var 10, så det blir 15.

//oppgave 4
let lives;
lives = 3;

lives -= 1;
console.log(lives);
//Det den gjør er at den trekker 1 fra den opprinelige verdien av lives, som var 3, så det blir 2.

//oppgave 5
let multiplier;
multiplier = 4;

multiplier *= 2;
console.log(multiplier);
//Det den gjør er at den ganger den opprinelige verdien av multiplier, som var 4, med 2, så det blir 8.

//oppgave 6
let speed;
speed = 100;

speed /= 2;
console.log(speed);
//Det den gjør er at den deler den opprinelige verdien av speed, som var 100, med 2, så det blir 50.

//oppgave 7
let number;
number = 10;

number += 5; //dette adderer 5 til 10
number *= 2; //dette ganger resultatet med 2
number -= 4; //dette trekker fra 4
number /= 2; //dette deler resultatet med 2
console.log(number); //tilsammen blir dette 13, etter alle operasjonene.

//oppgave 8

let k = 8;
let l = 10;

console.log(k * l);


//Sander - Oppgavesett 3c Operatorer og datatyper

console.log("Sander - Oppgavesett 3c Operatorer og datatyper");


//oppgave 2
console.log(5 + 5);
console.log(10 + 20);
//Den legger sammen to tall i to forskelige operasjoner.

//oppgave 3
console.log("5" + "5");
console.log("Hei " + "verden");
//her er alle datatypene strenger, det gjør at istedenfor at 5 + 5 blir 10, så blir det "55". I den andre operasjonen så blir det "Hei verden".

//oppgave 4

console.log("5" + 5); // dette blir 55 fordi den ser på 5 som en streng.
console.log(5 + "5"); // samme her, den ser på 5 som en streng.
console.log("Tall: " + 5 + 5); // her blir det "Tall: 55" fordi den ser på alt som strenger.
console.log("Sum: " + (5 + 5)); // her blir det "Sum: 10" fordi den regner ut 5 + 5 først.

//oppgave 5

console.log("10" - "5");
console.log("10" * "2");
console.log("10" / "2");
console.log("10" - 3);
console.log("10" * 3);
console.log("10" / 3);
//den tenker at alle verdiene er tall, så den regner ut som vanlig.

//oppgave 6

console.log("Hei" - "der");
console.log("Hei" * 3);
console.log("Hei" / 2);
//den vil nå si til oss at man ikke kan dele på ting som ikke er tall, så det blir NaN (Not a Number) i alle tre operasjonene.

//oppgave 7
{

    let a = 10;
    a += 5;
    console.log(a);
    
    let b = "Hei";
    b += " verden";
    console.log(b);
    //det blir ganske likt på begge to, den legger til det nye til den opprinelige verdien.

}

//oppgave 8

{
    let c = 20;
    c -= 5;
    console.log(c);

    let d = "Hei";
    d += " verden";
    console.log(d);
}