console.info('opggavesett 7-1')

/* oppg 1
a) arrays er en enklere måte å sammle mange tall, dette er praktisk når man skal endre på ting senere som for eksempel en poengsum.
b) Det som er forskelig fra andre kodespråk er at en variabel kan holde mange verdier, de ligger i en fast rekkefølge og at man henter de ved å bruke plaseringen deres. Den første plasseringen i en rekke starter altid på 0
*/

// oppg 2 a

const liste = [];

//b
const ender = ["Donald Duck", "Ole", "Dole", "Doffen", "Skrue McDuck", "Petter Smart", "Bestemor Duck", "Naboen", "Guffen", "Magica"];



//c
console.log(ender[2], ender[5], ender[8])


//oppg 3
//a) index er plasseringen til en verdi i en array. Så donald duck vil ha index 0 i dette tilfelle.

//b første index i en array er altid 0

//c) det finnes egentlig ikke noe fast slutt på array, men indexen til den siste i rekken er bare plasseringen -1

//d) array.length er hvor lang rekken er, så vis det er tre elementer i arrayen, vil length være 3.

//e) siden index starter på 0, vil altid array.length -1 være verdien av indexen.


//oppg 4
console.log(typeof ender)

//a) vis man bruker typeof på en array vil det bli object som man kan se.

//b) for å sjekke om en variabel eller en konstant er en array bruker man 'array.isArray()'. Den vil da returnere true vis det er en array.

//c)
console.log(sjekkArray(ender));


function sjekkArray(verdi) {
    if (Array.isArray(verdi)) {
        return `Argumente er en array`;
    } else {
        return `Argumente er ikke en array`
    }
}


console.log('Oppgavesett-7-2')

//oppg 1
const tall = [10, 20, 30]

console.log(tall[2])

//oppg 2
const helloWorld = [];

helloWorld[0] = 'hello';
helloWorld[1] = 'world';

console.log(helloWorld)

//oppg 3
const lengde = [1, 2, 3, 4, 5];

console.log(lengde.length)

//oppg 4
const frukt = ["apple", "banana", "cherry"]

frukt[1] = "blueberry";

console.log(frukt)

//oppg 5
const tallRekke = [5, 10, 15]

tallRekke[3] = 20;

console.log(tallRekke);


//oppg 6
const farger = ['red', 'green', 'blue']

console.log(farger[farger.length - 1])

//oppg 7
const syvGangen = [7, 14, 21];

if (syvGangen[0] < syvGangen[2]) {
    console.log('true')
} else {
    console.log('false')
}


//oppg 8
const toGangen = [2, 4, 6, 8]

console.log(toGangen[0], toGangen[2])


//oppg 9
const SubArrays = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(SubArrays[1][1])


//oppg 10
const x = 100;
const y = 200;
const z = 300;

const variabel = [x, y, z];

console.log(variabel);