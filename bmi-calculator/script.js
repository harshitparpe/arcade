const weight = document.getElementById("weight-input")
const height = document.getElementById("height-input")
const container = document.getElementById("container")
const calc = document.getElementById("submit")
const BMI = document.getElementById("output")
const weightOutput = document.getElementById("weight-output")
const heightOutput = document.getElementById("height-output")
const weightInput = document.getElementById("weight-input")
const heightInput = document.getElementById("height-input")


function updateSlider(){
    weightOutput.innerText = `${weight.value}kg`
    heightOutput.innerText = `${height.value}cm`
}

weightInput.addEventListener("change", updateSlider)
heightInput.addEventListener("change", updateSlider)

window.onload = () => {
    calc.addEventListener("click", calcBMI)
}

function calcBMI(){
    let bmi = (weight.value)/((height.value/100)*(height.value/100))
    console.log(`weight = ${weight.value}`)
    console.log(`height = ${height.value}`)
    console.log(`BMI = ${bmi}`);
    BMI.innerText = `BMI: ${bmi.toFixed(2)}`
}
