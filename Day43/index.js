
const calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this.value;
    },
    subtract: function(num) {
        this.value -= num;
        return this.value;
    },
    reset: function() {
        this.value = 0;
        return this.value;
    }
};

// Examples:
console.log(calculator.add(10));      
console.log(calculator.subtract(3)); 
console.log(calculator.reset());     