let x = Math.floor(Math.random()*100 + 1)
let y = Math.floor(Math.random()*100 + 1)

document.getElementById("randomnumber1").textContent = x
document.getElementById("randomnumber2").textContent = y


document.getElementById("addition").textContent = x + y
document.getElementById("multiplikation").textContent = x * y
document.getElementById("division").textContent = x/y
document.getElementById("rest").textContent = x%y