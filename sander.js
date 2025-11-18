// Sander oppgavesett 5
console.log("Sander, oppgavesett 5");

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

console.log(`y = ${y}`);
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
let a;
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



console.log("Sander oppgavesett-5 1")
//oppgavesett 5 1

//1) henikten med en funksjon er at maskinen kan gjøre komplekse ting uten å skrive masse kode hver gang.

//2 a
function add(){
    console.log("Hello world")
}
// her vil add brukes som fuksjonen, så når man skriver det og et parantes vil alt som står inne i "{" skje.

/*
2 
b) et funksjonskall er det maskinen eller programe gjør når man utfører en funksjon.

2
c) add()
*/

console.info("Sander oppgavesett-5 oppgave 3")
/*
3
parameter er det som står inne i () på funksjonen.
Argumente er det som man skriver inn i () til funskjonskallet. Og dette vil da bli verdien til funksjonen sitt parameter.
*/

console.info("Sander oppgavesett-5 oppgave 4")
foo("parameteret mitt er");
foo("Dette er parameteret mitt")

function foo(info){
    console.info(info)
}


console.info("Sander oppgavesett-6 oppgave 5");

parameter("hei", "verden");

function parameter(para1, para2){
    console.info(`Jeg fikk to parametere; ${para1} ${para2}.`);
}