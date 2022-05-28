//practice test in console
// map() method
var trace = [1, 2, 3, 4]
var double = trace.map(trace => trace + trace)
console.log(double)

//example
var numbers = [1, 2, 3, 4, 5]
var double = numbers.map(numbers => numbers + numbers)
console.log(double)
//or
var numbers = [1, 2, 3, 4, 5]
var double = numbers.map(function (num) {
    return num + 2
})
console.log(double)
//example
var numbers = [0, 2, 4, 6, 8]
var add5 = numbers.map(function (num) {
    return num + 5
})
console.log(add5)
//example
var cities = [
    {
        "Rank": 1,
        "City": "San Antonio ",
        "State": "Texas",
        "Increase_from_2016": "24208",
        "population": "1511946"
    },
    {
        "Rank": 2,
        "City": "Phoenix ",
        "State": "Arizona",
        "Increase_from_2016": "24036",
        "population": "1626078"
    },
    {
        "Rank": 3,
        "City": "Dallas",
        "State": "Texas",
        "Increase_from_2016": "18935",
        "population": "1341075"
    }
];
var cityname = cities.map(function (city) {
    return city.City
})
console.log

//Filter method

//get even numbers in map method
var numbers = [1, 2, 3, 4, 5, 6]
var even = numbers.map(function (num) {
    return num % 2 == 0
})
console.log(even)

//get even numbers using for loop
var numbers = [1, 2, 3, 4, 5, 6]
var evenno = []
numbers.forEach(function (num) {
    if (num % 2 == 0) {
        evenno.push(num)
    }
})
console.log(evenno)

//use filter()method
var numbers = [1, 2, 3, 4, 5, 6]
var greaterthan1 = numbers.filter(function (num) {
    return num > 1
})
console.log(greaterthan1)

//Filter the results to include only animals 
//whose species name starts with the letter "s."

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var starts = words.filter(function (word) {
    return word.startsWith('s')
})
console.log(starts)    

//using arrow functions
var numbers = [1,2,3,4,5];
var double = numbers.map(numbers => numbers*2)
console.log(double)

//using arrow function and  sort method  ( ascending or descending order)
//ascending order(where((a,b) => a-b))
var familyAge = [3,2,39,37,9];
var sortage = familyAge.sort ((a,b) => a-b)
console.log(sortage)

//descending order
var familyAge = [3,2,39,37,9];
var sortage = familyAge.sort ((a,b) => b-a)
console.log(sortage)

//slice()method
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3)
console.log(slice1)

//or

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(0,3)
console.log(words)

//or 
console.log(words.slice(0,3))
