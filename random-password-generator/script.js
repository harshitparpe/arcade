    const error1 = "*password length must be atleast 1"
    const error2 = "*Atleast 1 set of characters needs to be selected"

function generatePassword(length, includeUppercase, includeLowercase, includeNumber, includeSymbols){
    
    const lowercaseChar = "abcdefghijklmnopqrstuvwyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+-="

    let allowedChars = ""
    let password = ""

    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeLowercase ? lowercaseChar : ""  
    allowedChars += includeNumber ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""

    if(length <= 0){
        return error1
    }
    if(allowedChars.length === 0){
        return error2
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password
}



document.getElementById("submit").addEventListener("click", () => {

    const passwordLength = document.getElementById("length").value
    const includeLowercase = document.getElementById("lowercase").checked
    const includeUppercase = document.getElementById("uppercase").checked
    const includeNumber = document.getElementById("numbers").checked
    const includeSymbols = document.getElementById("symbols").checked

    const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSymbols)

    console.log(password);
    
    if(password !== error1 && password !== error2){
        document.getElementById('password').innerText = `${password}`
        document.getElementById("error-message").innerText = ""
    }
    else{
        document.getElementById('password').innerText = " "
        document.getElementById("error-message").innerText = ""
    }

    if(password == error1){
        document.getElementById("error-message").innerText = error1
    }
    if(password == error2){
        document.getElementById("error-message").innerText = error2
    }
})

document.getElementById("copy-icon").addEventListener("click", () => {
    // document.getElementById('password').select()
    // navigator.clipboard.writeText(document.getElementById('password').value)

    navigator.clipboard.writeText(document.getElementById('password').innerText)
    alert("Copied the text: " + document.getElementById('password').innerText)
})
