export function generateUpperCase(upperChars, verify) {
    if (verify) {
        const randomIndex = Math.floor(Math.random() * 25)
        const charGenerated = upperChars.at(randomIndex)
        const charGeneratedString = String(charGenerated)
        
        return charGeneratedString
    } else {
        return ''
    }
}