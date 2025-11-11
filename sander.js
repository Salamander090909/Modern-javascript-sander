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



console.log("Oppgave 1: Det vil skrives 10, men siden det er skrevet med const, vil ikke variabelen endre seg.");
const i = 10;
console.log(`i = ${i}`);


//oppgave 2
//const x = 10;
console.log(`i = ${x}`);

console.log("Det den gjør er at den bytter ut x med i, så det blir i = 10");

//oppgave 3
const y = 10;

console.log(`y = ${y}`);
console.log("Den vil nå bytte y med y, også skrive ut den opprinelige verdien, som er 10.");

//Oppgave 4


let z;
{
    z = 10;

    //utskrift a)
    console.log(`z = ${z}`);
}

//utskrift b)
console.log(`z = ${z}`)

console.log("Begge utskriftene vil gi 10, fordi z er deklarert utenfor blokken, og dermed tilgjengelig både inni og utenfor blokken.");