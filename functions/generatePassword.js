import { generateLowerCase } from './generateLowerCase.js'
import { generateUpperCase } from './generateUpperCase.js'
import { generateSymbolsChars } from './generateSymbolsChars.js'
import { generateNumbersChars } from './generateNumbersChars.js'


export function generatePassword(lenght, lowerCase, upperCase, symbols, numbers) {
    const lowerChars = lowerCase ? 'abcdefghijklmnopqrstuvwxyz' : ''
    const upperChars = upperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
    const symbolsChars = symbols ? '@#$%!&?' : ''
    const numberChars = numbers ? '1234567890' : ''
    
    const stackFunc = [
        () => generateLowerCase(lowerChars, lowerCase),
        () => generateUpperCase(upperChars, upperCase),
        () => generateSymbolsChars(symbolsChars, symbols),
        () => generateNumbersChars(numberChars, numbers)
    ]

    let password = ''

    for (let i = 0; i < lenght + 1; i++) {
        let randomNumber = Math.floor(Math.random() * stackFunc.length)
        password += stackFunc[randomNumber]();
        
        i = password.length
        
        if (password.length >= lenght) {
            break
        }
    }

    return password
}