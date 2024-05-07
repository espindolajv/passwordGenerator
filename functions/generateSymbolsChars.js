export function generateSymbolsChars(symbolsChars, verify) {
    if (verify) {
        const randomIndex = Math.floor(Math.random() * 6)
        const charGenerated = symbolsChars.at(randomIndex)
        const charGeneratedString = String(charGenerated)
        
        return charGeneratedString
    } else {
        return ''
    }
}