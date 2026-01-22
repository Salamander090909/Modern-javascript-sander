console.info('oppgavesett-9 oppg 1')

const elev1 = {
    fornavn: 'Sander',
    etternavn: 'Bry',
    alder: 16
};

const elev2 = {
    fornavn: 'Andreas',
    etternavn: 'Ostby',
    alder: 16
};

const elev3 = {
    fornavn: 'Knut',
    etternavn: 'Solberg',
    alder: 16
};

const elev4 = {
    fornavn: 'Mikael',
    etternavn: 'Munch',
    alder: 16
};

console.info('Oppg 2');

hentNavn(elev1)

function hentNavn(elev) {
    console.log(
        ' Navn: ' + elev.fornavn +
        ' Etternavn: ' + elev.etternavn +
        ' Alder ' + elev.alder
    );
};

console.info('oppg 3 og 4')

let serienummerTeller = 1;

function carFactory(seter, hestekrefter, modell, type) {
  return {
    seter: seter,
    hestekrefter: hestekrefter,
    modell: modell,
    type: type,
    serienummer: null,

    genererSerienummer() {
      this.serienummer = serienummerTeller;
      serienummerTeller++;
    }
  };
}

const bil1 = carFactory(5, 150, "Toyota Corolla", "Sedan");
bil1.genererSerienummer();

const bil2 = carFactory(7, 300, "Volvo XC90", "SUV");
bil2.genererSerienummer();

const bil3 = carFactory(5, 190, "Audi A4", "Stasjonsvogn");
bil3.genererSerienummer();

const bil4 = carFactory(2, 420, "Porsche 911", "Sport");
bil4.genererSerienummer();


const biler = [bil1, bil2, bil3, bil4];

console.log(biler);

console.info('jeg skjønner ikke siste oppgave')