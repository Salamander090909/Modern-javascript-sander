// Sander oppgavesett 5a
console.log("Sander, oppgavesett 5a");


//Oppgave 1
{
const i = 10;

console.log(`i = ${i}`);
}
//den vil bytte ut {i} med verdien av i, som er 10


//Oppgave 2
const x = 10;
{
console.log(`i = ${x}`);
}
//den vil bytte ut {x} med verdien av x, som er 10. Så det vil stå i = 10 i konsollen.



//Oppgave 3
{
const y = 10;
}

//console.log(`y = ${y}`);
//den vil ikke skrive noe i konsollen fordi y er definert utenfor blokken, og er inne i en parantes. Derfor er y ikke tilgjengelig utenfor blokken, og det vil føre til en


//Oppgave 4
let z;
{
z = 10;

//utskrift a)
console.log(`z = ${z}`);
}

//utskrift b)
console.log(`z = ${z}`);

//utskriften til a vil vise z = 10, dette er fordi at z er inisaliert og deklarert. 
//utskriften til b vil også vise z = 10, dette er fordi z blir initalisert utenfor parantesen.


//Oppgave 5
//let a;
fubar();
console.log(`a = ${a}`);

function fubar(){
a =2;
}
//den initialiserer a med verdien 2. men den vil printe not defined fordi a ikke ble definert først.


//Oppgave 6
let b = 10;

add(b, 5);
console.log(b);

function add(c, d){

let result = c + d;
console.log(result);
}
//jeg er usikker på hva den gjør, add er en funksjon og det er alt jeg vet.
//den gir to utskrifter, den første er b pluss 5 og den andre er resultate av c+d.


console.info("Sander oppgavesett-5b 1 oppgave 6")

//Oppgave 6
//Først vil den gi b en verdi på 10. Så vil den kalle funksjonen add med b og 5 som argumenter. Inne i funksjonen vil c få verdien til b (10) og d få verdien 5. Deretter vil den regne ut result som er c + d (10 + 5 = 15) og skrive ut resultatet (15) i konsollen.


console.info("Sander oppgavesett-5b 1 oppgave 1")

//oppgavesett 5b 1

//1) henikten med en funksjon er at maskinen kan gjøre komplekse ting uten å skrive masse kode hver gang.

//2 a
function add(){
    console.log("Hello world")
}
// her vil add brukes som fuksjonen, så når man skriver det og et parantes vil alt som står inne i "{" skje.

/*
2 
b) et funksjonskall er det maskinen eller programe gjør når man utfører en funksjon.
*/
//2 c)
add()


console.info("Sander oppgavesett-5b 1 oppgave 3")

/*
3
parameter er det som står inne i () på funksjonen.
Argumente er det som man skriver inn i () til funskjonskallet. Og dette vil da bli verdien til funksjonen sitt parameter.
*/

console.info("Sander oppgavesett-5b 1 oppgave 4")
foo("parameteret mitt er");
foo("Dette er parameteret mitt")

function foo(info){
    console.info(info)
}


console.info("Sander oppgavesett-5b 1 oppgave 5");

parameter("hei", "verden");

function parameter(para1, para2){
    console.info(`Jeg fikk to parametere; ${para1} ${para2}.`);
}



console.info("Sander oppgavesett-5b 2 oppgave 1");
//oppgavesett 5b 2 oppgave 1

/*
Return brukes for å avslutte en fonksjon og sende den verdien tilbake til der funksjonen ble kalt.
Dette gjør at vi kan sende verdien ut av scoppet.
*/

/* oppgavesett 5b 2 oppgave 2a*/
console.log(hallo());

function hallo(){
    return "hallo world";
}


//oppgavesett 5b 2 oppgave 2b

let e = 1;
console.log(test(e));

function test(e) {
    e += 1;
    return `sander har bæsjet ${e} ganger idag`;
}

//oppgavesett 5b 2 oppgave 3a
let h = 5;
let g = 10;
console.log(sum(h, g));

function sum(h, g){
    return h * g;
}

//oppgavesett 5b 2 oppgave 3b

function sum(h, g){
    const result = h*g;
    console.log(result);
    return result;
}

sum(5,10);

//oppgavesett 5b 2 oppgave 4a
console.log(sub(10, 5, 3));

function sub(a, b, c) {
    const result = a - b - c;
    return result;
}

//oppgavesett 5b 2 oppgave 4b
sub(10, 5, 3);

function sub(a, b, c) {
    const result = a - b - c;
    console.log(result);
    return result;
}

//oppgavesett 5b 2 oppgave 5

function ferdig(resultat){
    console.log(resultat);
    return resultat;
}

ferdig("Jeg er endelig ferdig med oppgavene, jeg syntes mye av det var vanskelig, men til slutt føler jeg at jeg skjønner det meste. Ganseke fornøyd!")


console.log("Sander oppgavesett 5c")
//oppgavesett 5c

const world = () => {
    console.log("Hello, world!");
}

world()

//oppgavesett 5c 2
let j = 15;
const fuu = j => {
    console.log(j);
}

fuu(j)
//ved at funksjonen kun har en parameter kan man droppe å skrive parenteser rundt parameteret i pilfunksjonen.

//oppgavesett 5c oppg 3
let v, m, n;
v = 2
m = 3
n = 4
const fii = (v,m,n) => {
    console.log(v, m, n);
}

fii(v, m, n)

/*oppgavesett 5c oppg 5
Nei, jeg vet ikke så mye om forskelen mellom funksjoner og pilfunskjoner.
*/

