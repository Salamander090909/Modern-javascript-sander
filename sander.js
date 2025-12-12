console.info('Sander oppgavesett 6a');
//sander oppgavesett 6a oppgave 1

function sjekkverdi(verdi) {
    if (typeof verdi === 'string') {
        console.log('STRING STRING STRING!')
    } else {
        console.log('Dette er ikke en String i det hele tatt')
    }
}

sjekkverdi(1);
sjekkverdi('1')
sjekkverdi('navn')



console.info('Sander oppgavesett 6a oppgave 2');

{
    const a = 5
    const b = 10

    function typer(a, b) {

        if (typeof a === typeof b) {
            console.log('Variablene du brukte er av samme type!')
        } else {
            console.log('Variablene du brukte er IKKE av samme type!')
        }
    }

    /*a)*/typer('en', 1) // dette er ikke likt siden '' er en string mens 1 er et tall
    /*b)*/typer(1,1) // begge er tall så det vil være true
    /*c)*/typer(2,3) // igjen så er begge tall, men forskjellige verdier. Dette har ingenting å si siden den sjekker typeof.
    /*d)*/typer('2','3') // her er begge string så det vil være true
    /*e)*/typer(2,'3') // de er ikke begge string eller number så det vil være false.
}

console.info('Sander oppgavesett 6a oppgave 3a');

let c
{

    function sjekkOmTall(c) {
        if (typeof c === 'number') {
            console.log('Dette er et tall!')
        } else {
            console.log('Test failed')
        }
    }
    
}
sjekkOmTall('1');



let d = 8
let e = "hei"


if (typeof d === "number" && typeof e === "number") {


    if (d > 5 || e > 5) {
        const større = d > 5 ? d : e
        console.log(`Jeg fant en variabel som var større enn fem! Den hadde verdien: ${større}`)
    } else {
        console.log("Ingen av variablene er større enn fem")
    }

    } else {

        if (typeof d !== "number") {
            console.log(`Variabelene er ikke av typen number, den er av typen: ${typeof d}`)
        }
        if (typeof e !== "number") {
            console.log(`Variabelene er ikke av typen number, den er av typen: ${typeof e}`)
        }
    }



console.info('Sander oppgavesett 6b')

//oppg 1) Return returnerer verdien ut av funksjoner til der du kalte den fra.


//oppg 2
function AddereTall(f, g) {
    if (typeof f === "number" && typeof g === "number") {
        return f + g
    } 
}

const result = AddereTall(3, 4)
console.log(result)


//oppg 3

function SjekkeTekst(para1, para2) {
    if (typeof para1 === "string" && typeof para2 === "string") {
        return para1 + para2
    } else console.log('Jeg skriver bare ut tekst!')
}

const tekstResultat = SjekkeTekst('hei jeg heter Sander.',  'Jeg liker hunder')
console.log(tekstResultat)


//oppg 4
function kalkulator(h, i, j) {
    if (typeof h === 'number' && typeof i === 'number') {

        let KalkResultat

        if (j === '+' ) {
            KalkResultat = (h + i)
        } else if (j === '-' ) {
            KalkResultat = (h - i)
        } else if (j === '*' ) {
            KalkResultat = (h * i)
        } else if (j === '/' ) {
            KalkResultat = (h / i)
        } else {
            return `${j} er ikke en gyldig operasjon. Programmet terminerer!`;
        }

        return `${h} ${j} ${i} = ${KalkResultat}`;

    } else {
        return `${h} eller ${i} er ikke et tall! Kan ikke utføre ${j}. Programmet terminerer!`;
    }
}

console.log(kalkulator(5, 3, '*'));