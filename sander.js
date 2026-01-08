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


console.info('Sander Oppgavesett6c')
//sander oppgavesett-6c


//oppg 1
console.log(convertToCelsius(40));

function convertToCelsius(fahren) {
    const celsius = (fahren - 39) * 5/9;
    return `${fahren} fharenhait = ${celsius} celsius`
}


//oppg 2
console.log(calculateAge(2009))

function calculateAge(FødÅr) {
    const alder = (2025 - FødÅr);
    return `Du er ${alder} år gammel`
}


//oppg 3
console.log(calculate(3, 5, '*'))

function calculate(k, l, m) {

    let calcResult

    if (m === '+') {
        calcResult = (k + l)
    } else if (m === '-') {
        calcResult = (k - l)
    } else if (m === '*') {
        calcResult = (k * l)
    } else if (m === '/') {
        calcResult = (k / l)
    } else {
        return '${m} er ikke en regneoppratør.'
    }

    return `${k} ${m} ${l} = ${calcResult}`
}

//oppg 4
console.log(isEven(10))
console.log(isEven(5))

let tall
function isEven(tall) {
    return tall % 2 === 0
}


//oppg 5
console.log(findMax(15, 10))

function findMax(n, o) {

    let max

    if (n < o) {
        max = o
    } else if (n > o) {
        max = n
    } else {
        return `Tallene er like store`
    }

    return `${max} er det største tallet`
}


//oppg 6
console.log(calculateTax(67000))

function calculateTax(inntekt) {

    let tax

    if (inntekt < 50000) {
        tax = '10%'
    } else if (inntekt > 50000 && inntekt < 100000) {
        tax = '20%'
    } else if (inntekt > 100000) {
        tax = '30%'
    }

    return `Du må betale ${tax} skatt`
}


//oppg 7
console.log(isValidEmail('sandertennstrand@gmail'))

function isValidEmail(mail) {
    return mail.includes('@')

}

//oppg 8
console.log(findLongestString('sander', 'sander'))

function findLongestString(string1, string2) {
    if (string1.length > string2.length) {
        return `${string1} er lengst`
    } else if (string1.length < string2.length) {
        return `${string2} er lengst`
    } else {
        return `Stringene er like lange`
    }

    return `${findLongestString}`
}

//oppg 9
console.log(calculateDiscount(100, 10))
console.log(calculateDiscount(200, 25));

function calculateDiscount(pris, rabatt) {
    const nyPris = pris - (pris * rabatt / 100);

    return nyPris
};

//oppg 10 
console.log(isStrongPassword('JegLikerPølse15'))

function isStrongPassword(password) {
    const langtNok = password.length >= 8
    const harTall = /\d/.test(password)

    if (langtNok && harTall) {
        return `True`
    } else {
        return `false`
    }
}


console.info('Oppgavesett 6d')

//oppg 1

function velgMeny(selectedOption) {
    if (typeof selectedOption !== 'number') {
        console.log('Error');
        return

    }

    if (selectedOption === 1) {
        console.log('Brukeren startet programmet')
    }
    else if (selectedOption === 2) {
        console.log('Brukeren vil gjøre en utskrift')
    }
    else if (selectedOption === 3) {
        console.log('Brukeren vil avslutte programmet')
    } else {
        console.log('Valget var ikke gyldig, velg på nytt')
    }
}

velgMeny('2')


//oppg 2
console.log(calculator('4', 5, 1))

function calculator(q, r, s) {
    if (typeof r !== 'number' || typeof s !== 'number') {
        return 'syntax error';
    }

        let calculatorResult;

        switch (q) {
            case '+':
                calculatorResult = r + s;
                break;
            
            case '-':
                calculatorResult = r - s;
                break;
            
            case '*':
                calculatorResult = r * s;
                break;

            case '/':
                calculatorResult = r / s;
                break;
            
            default:
                return 'syntax error';
        }

    return `${r} ${q} ${s} = ${calculatorResult}`;
       
    }

