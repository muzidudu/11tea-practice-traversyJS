const inputtext = document.getElementById('inputtext').textContent;

const outputtext = document.getElementById('outputtext')

console.log(inputtext)
console.log(outputtext)







console.log(inputtext.split(' ')[1][0].toUpperCase())
console.log(inputtext.length)
let ergebnis = ""


const inputworte = inputtext.split(' ')

for (let i = 0; i < inputworte.length; i++) {
    const ersterBuchstabe = inputworte[i][0].toUpperCase();
    // console.log(ersterBuchstabe)
    // console.log(inputworte[i])

    // console.log(inputworte[i][0])
    const wortrest = inputworte[i].slice(1,inputworte[i].length)
    const wort = ersterBuchstabe + wortrest
    console.log(wort)
    ergebnis = `${ergebnis} ${wort}`
    
}
console.log(ergebnis)
outputtext.textContent = `${ergebnis}`