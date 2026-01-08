console.info('Oppgavesett 8-1')

//oppg 1
/*
For lopps
Brukes når man vet hvor mange ganger man vil at koden skal kjøre.

Den har tre deler: Start, betingelse og hva som skjer etter hver rundt */
for (let i = 1; i <= 5; i++) {
  console.log(i);
}




/*
While loops
denne kjører så lenge en betingelse er true. Her må man passe på at man ikke lager en evig loop.

Den funker ved å sjekke betingelsen før hver runde */
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}




/*
Do While Lopps
Den er veldig lik while loop, men den kjører altid minst en gang.

Den funker ved og først kjøre koden også sjekke etter betingelsen. */

let a = 10;

do {
  console.log(i);
} while (i < 5);




/*
For...of-loop
Brukes for å gå gjennom verdier i arrays, sting osv.

Den funker ved å hente hvert element direkte, uten indeks. */

const tall = [2, 4, 6, 8];

for (const nummer of tall) {
  console.log(nummer);
}




/*
For...in-loops
Brukes mest for objekter. Den går gjennom keys, ikke verdier.

Den funker ved å loppe gjennom navnene på egenskapene i et object. */

const person = {
  navn: "Sander",
  alder: 16,
  by: "Asker"
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}



//oppg 2

const navneliste = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda', 'Nina', 'Tine', 'Henrik', 'Agnethe'];

for (let navn of navneliste) {
    console.log(navn + ' har ' + navn.length + ' bokstaver');
}

// jeg valgte denne loopen fordi den er lett å lese, trenger ikke å tenke på index = 0, og det passer perfekt når man har en liste som dette.


//oppg 3

const snuddListe = [];

for (let i = navneliste.length - 1; i >= 0; i--) {
    snuddListe.push(navneliste[i]);
}

console.log(snuddListe);


//oppg 4
console.log(reduceToOddNumber(30));


function reduceToOddNumber(number) {

    if (typeof(number) === 'number') {

        while (number % 2 === 0) {
            number = number / 2;
        }

        return number;
    }
}


//oppg 5
/* jeg har ikke brukt do...while og for...in. Jeg kunne brukt do...while på oppg4 og do...while kunne jeg nok brukt på navnelisten. */



console.info('Oppgavesett 8-2')

//oppg 1
let navn1 = ["Odin", "Thor", "Loki", "Freya", "Baldur", "Frigg", "Tyr", "Heimdall", "Hel", "Idunn", "Njord", "Skadi", "Fenrir", "Jormungandr", "Sleipnir"];

for (let i = 0; i < navn1.length; i++) {
    console.log(navn1[i]);
}


//oppg 2

let tallRekke = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
let sum = 0;

for (let i = 0; i < tallRekke.length; i++) {
    sum += tallRekke[i];
}

console.log(sum);


//oppg 3a

let navn = [
    "Anne", "Jan", "Per", "Bjørn", "Ole", "Lars", "Inger", "Kjell", "Kari",
    "Thomas", "Ingrid", "Svein", "Marit", "Knut", "Tor", "Liv", "Geir",
    "Martin", "Hans", "Morten", "Andreas", "Erik", "Ida", "Arne", "Maria",
    "Anna", "Terje", "Ann", "Eva", "Daniel", "Anders", "John", "Rune",
    "Odd", "Hilde", "Nina", "Marianne", "Magnus", "Kristin", "Eli", "Ola",
    "Siri", "Einar", "Gunnar", "Randi", "Bente", "Johan", "Mona", "Trond",
    "Hege", "Espen", "Siv", "Steinar", "Elin", "Kjetil", "Linda", "Harald",
    "Grete", "Leif", "Anita", "Roar", "Tone", "Jon", "Camilla", "Stig",
    "Lene", "Arild", "Gry", "Frode", "Ragnhild", "Pål", "Britt", "Øyvind",
    "Laila", "Vidar", "Ellen", "Dag", "Sissel", "Knut", "Anne", "Per",
    "Inger", "Bjørn", "Kari", "Ole", "Lars", "Jan", "Marit", "Thomas",
    "Ingrid", "Mohammed", "Ali", "Ahmed", "Aisha", "Fatima", "Hassan",
    "Sara", "Yousef", "Amira", "Omar"
];

function tellNavn(navn, array) {
    let antall = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === navn) {
            antall++;
        }
    }

    console.log(`${navn} er oppført ${antall} ganger i arrayen som er ${array.length} lang`);
}


tellNavn("Arne", navn);




//oppg 3b


function tellNavn(navn, array) {
    let antall = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === navn) {
            antall++;
        }
    }

    console.log(`${navn} er oppført ${antall} ganger i arrayen som er ${array.length} lang`);
}

function tellAlleNavn(array) {
    for (let i = 0; i < array.length; i++) {
        tellNavn(array[i], array);
    }
}

tellAlleNavn(navn);

