console.log('oppgavesett-10 oppg10')
//a)
/*

executor()

function heiVerden() {
    console.log('Hello world!')
}

function lever() {
    console.log('I’m alive')
}

function green() {
    console.log('Its not easy being green!')
}

function executor() {
    heiVerden()
    lever()
    green()
}
//b)

function executor(piler, cri, Parles) {
  piler();
  cri();
  Parles();
}

executor(
  () => console.log("Amors piler treffer alltid i hjertet!"),
  () => console.log("Cri’ Cri’ d’amore!"),
  () => console.log("Parles vous francois?")
);



console.info('oppg 2')

function hei(name) {
    console.log(`Hello ${name}`)
}

function login(name) {
    console.log(`${name} just logged in`)
}

function logout(name) {
    console.log(`${name} just logged out`)
}

function executor(name, callback) {
  callback(name);
}

executor("Sander", hei);
executor("Sander", login);
executor("Sander", logout);

//b

executor("", () => console.log("Franskmenn liker ikke piler"));
executor("", () => console.log("Piler kan være farlige, eller de kan bare vise vei!"));
executor("", () => console.log("Pilgård er ikke en pil, selv om han piler fra sted til sted!"));

*/

console.log('oppg 3')

function runRoutine(...routines) {
  let index = 0
  let lastTime = Date.now()

  function next() {
    const now = Date.now()
    const secondsPassed = ((now - lastTime) / 1000).toFixed(2)

    if (index !== 0) {
      console.log(`Tid siden forrige kall: ${secondsPassed} sek`)
    }

    lastTime = now
    routines[index]()
    index++

    if (index < routines.length) {
      const delay = Math.random() * 2 // mellom 0 og 2 sekunder
      console.log(`Venter ${delay.toFixed(2)} sek før neste...\n`)
      setTimeout(next, delay * 1000)
    } else {
      console.log("\n Alle funksjoner er kjørt")
    }
  }

  next()
}

function funcA() {
  console.log('Kjører funksjon A')
}

function funcB() {
  console.log('Kjører funksjon B')
}

function funcC() {
  console.log("Kjører funksjon C")
}

const routines = [
  funcA,
  funcB,
  funcC,
  funcA,
  funcB,
  funcC,
  funcA,
  funcB,
  funcC,
  funcA
]

runRoutine(...routines)
