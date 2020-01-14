module.exports = function parseStringAsArray(arrayAsSstring) {
    return arrayAsSstring.split(',').map(tech => tech.trim());
}