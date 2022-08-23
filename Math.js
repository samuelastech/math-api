class Math{
    static sum(...numbers){
        return numbers.reduce((a, b) => a + b)
    }
}

module.exports = Math