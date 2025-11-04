console.log("Oppgave 1: Det vil skrives 10, men siden det er skrevet med const, vil ikke variabelen endre seg.");
const i = 10;
console.log(`i = ${i}`);


//oppgave 2
const x = 10;
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