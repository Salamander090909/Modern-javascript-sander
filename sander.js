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

console.info('Sander oppgavesett 6a oppgave 3');

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