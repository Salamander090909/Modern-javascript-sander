// Sander oppgavesett 4
console.log("Sander, oppgavesett 4");


//oppfgave 1
console.log(1 === 1)
console.log(1 === 2)
console.log(3 === 3)
console.log(2 === 3)
// denne vil nå skjekke om verdien er lik, på de som er tre er lik tegn vil den også skjekke om data typen er lik. Dereter vil den printe ut false eller true.

//oppgave 2
console.log(1 == '1')
console.log(2 === '2')
// her vil den første printe ut true fordi den skjekker bare verdien, mens den andre vil printe ut false fordi den skjekker både verdi og datatype.

//oppgave 3
console.log(1==1 && 2==2) //denne blir true fordi den bare skjekker verdien og de er like
console.log(1==='1' && 2===2) //denne blir false fordi den skjekker både verdi og datatype og de er ikke like
console.log(1===1 && '2' ===2) //denne blir false fordi den skjekker både verdi og datatype og de er ikke like
console.log(1=='1' && 2=='2') //denne blir true fordi den bare skjekker verdien og de er like

//oppgave 4
console.log(1==='1' || 2===2) //denne blir true fordi den skjekker både verdi og datatype og de er ikke like
console.log(2=='2' || 1==='1') //denne blir true fordi den bare skjekker verdien og de er like
console.log(2===2 || 1===1 || 3==='3') //denne blir true fordi den skjekker både verdi og datatype og de er like

//oppgave 5
console.log(1 !== 1) //denne blir false fordi den skjekker verdi og de er like
console.log(2 !== 1) //denne blir true fordi den skjekker verdi og de er ikke like
console.log(2 !== 1 && 1 === 1) //denne blir true fordi den skjekker verdi og de er ikke like
console.log(2 !== '2' && 1=== '1' || 2=='2' ) //denne blir true fordi den skjekker verdi og de er ikke like


//oppgavesett-4 b
console.log("Sander, oppgavesett 4b");

//oppgave 1
console.log(5 > 3) //denne blir true fordi 5 er større enn 3
console.log(5 < 3) //denne blir false fordi 5 ikke er mindre enn 3
console.log(10 > 10) //denne blir false fordi 10 ikke er større enn 10
console.log(10 >= 10) //denne blir true fordi 10 er lik 10
console.log(8 <= 12) //denne blir true fordi 8 er mindre enn 12

//oppgave 2
console.log(4 >= 5) 
console.log(7 <= 7)
console.log(9 <= 4)
console.log(6 > 2)
// alle disse vil printe ut enten true eller false basert på sammenligningen mellom tallene. Når det står <= eller >= så betyr det at tallene kan være like også.


//oppgave 3
console.log(5 == 5) //denne blir true fordi 5 er lik 5
console.log(5 == '5') //denne blir true fordi verdien er lik selv om datatypen er forskjellig.
console.log(5 === '5') //derfor vil denne bli false siden den skjekker både verdi og datatype, som ikke er lik.
console.log(5 != 4) //denne blir true fordi 5 ikke er lik 4
console.log(5 !== '5') //denne blir true fordi den skjekker både verdi og datatype, som ikke er lik.


//oppgave 4
console.log(5 > 3 && 10 > 5)
console.log(5 > 3 && 10 < 5)
console.log(7 >= 7 && 2 < 5)
console.log(4 < 2 && 3 > 1)
//for at en && skal bli 



//oppgave 5
console.log(5 > 3 || 10 > 5)
console.log(5 > 3 || 10 < 5)
console.log(7 < 7 || 2 < 1)
console.log(4 < 2 || 3 > 1)
//for at alle her skal bli true trenger en av opprasjonene å være true.


//oppgave 6
console.log(5 > 3 && 10 > 5 || 2 === 2)
console.log(4 < 2 && 3 > 1 || 10 === 10)
console.log(5 === 5 && 3 > 10 || 8 < 12)
//her vil den først skjekke && delen, det er fordi den står først. Også sjekker den resten. Vis man hadde brukt parantes kunne dette ha påvirket svarert.


