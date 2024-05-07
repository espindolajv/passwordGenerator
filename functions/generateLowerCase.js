export function generateLowerCase(lowerChars, verify) {
    if (verify) {
        const randomIndex = Math.floor(Math.random() * 25)
        const charGenerated = lowerChars.at(randomIndex)
        const charGeneratedString = String(charGenerated)

        return charGeneratedString
    } else {
        return ''
    }
}

