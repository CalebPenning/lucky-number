function snakeToCamel(str) {
    for (let s of str) {
        if (s === '_') {
            str[s + 1].toUpperCase();
            str[s] = "";
        }
    }
    return str;
}

