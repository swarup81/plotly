console.log(cityGrowths)

// 1.Sort the cities in descending order of population growth.
var sortcity = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016)
sortcity.reverse()
console.log(sortcity)

//or add reverse() function at the end of sort() method
var sortcity = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016).reverse()
console.log(sortcity)

// 2.The next step is to select only the top five cities by population growth. We'll use slice() to perform this task.

var top5city = sortcity.slice(0, 5)
console.log(top5city)

//Create Arrays of City Names and Growth Figures

//Create Arrays of City Names
var top5citynames = cityGrowths.map(function (city) {
    return city.City
})
console.log(top5citynames)

//or use arrow function

var top5citynames = cityGrowths.map(city => city.City)
console.log(top5citynames)

var top5city = top5citynames.slice(0, 5)
console.log(top5city)

//Create Arrays of Growth Figures
//parseInt(converts strings into integers)

var growthfig = cityGrowths.map(growth => parseInt(growth.Increase_from_2016))
console.log(growthfig)

// use slice method to pick top 5 increase poulation.
top5citygrowths = growthfig.slice(0, 5)
console.log(top5citygrowths)


//Create a Bar Chart with the Arrays
var trace = [{
    x: top5city,
    y: top5citygrowths,
    type: "bar"
}]
var data = trace

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "city" },
    yaxis: { title: "Population Growth, 2016-2017" }
}
Plotly.newPlot("plotArea", data, layout)


// Use the same dataset to create a bar chart of the seven largest cities by population.
//first sort data on poulation
var sortdata = cityGrowths.sort((a, b) => a.population - b.population).reverse()
console.log(sortdata)

//get all the sorted cities
cities = sortdata.map(city => city.City)
console.log(cities)

//slice for top 5 cities
var top5cities = cities.slice(0, 5)
console.log(top5cities)

//get all the sorted population
toppopulation = sortdata.map(city => city.population)
console.log(toppopulation)

//slice for top 5 population
top5populated = toppopulation.slice(0,5)
console.log(top5populated)

//bar chart
var trace = [{
    x: top5cities,
    y: top5populated,
    type: "bar"
}]


var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "city" },
    yaxis: { title: "Population Growth, 2016-2017" }
}
Plotly.newPlot("plotArea", trace, layout) 

