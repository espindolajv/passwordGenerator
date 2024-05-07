export function generateNumbersChars(numberChars, verify) {
    if (verify) {
        const randomIndex = Math.floor(Math.random() * 9)
        const charGenerated = numberChars.at(randomIndex)
        const charGeneratedString = String(charGenerated)
    
        return charGeneratedString
    } else {
        return ''
    }
}