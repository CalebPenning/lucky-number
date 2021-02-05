function snakeToCamel(str) {
    let splitString = str.split("")
    let results = []
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] !== '_' && splitString[i - 1] === '_') {
            splitString[i] = str.charAt(i).toUpperCase();
        }
        if (splitString[i] !== '_') {
            results.push(splitString[i])
        }
    }
    results = results.join('')
    return results
}

