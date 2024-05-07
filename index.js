import { generatePassword } from './functions/generatePassword.js'


const button = document.getElementById('button-generate')

button.onclick = () => {
    const inputSize = document.getElementById('size-input')
    const inputUpperCase = document.getElementById('upper-case-input')
    const inputLowerCase = document.getElementById('lower-case-input')
    const inputSymbols = document.getElementById('symbols-input')
    const inputNumbers = document.getElementById('numbers-input')

    const passwordLength = inputSize.value
    const includeLoweCase = inputLowerCase.checked
    const includeUpperCase = inputUpperCase.checked
    const includeSymbols = inputSymbols.checked
    const includeNumbers = inputNumbers.checked

    if (includeLoweCase == false && includeUpperCase == false && includeSymbols == false && includeNumbers == false) {
        alert('It is necessary to select at least one option')
    } else {
        const password = generatePassword(passwordLength, includeLoweCase, includeUpperCase, includeSymbols, includeNumbers)

        const output = document.getElementById('password-output')

        output.textContent = password
    }


}


