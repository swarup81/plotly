//read and parse the actual data
d3.json("samples.json").then(function (data) {
  console.log(data);
});

// simple message
d3.json("samples.json").then(function (data) {
  console.log("hello");
});

//Roza wants to extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array. What would her code look like?
d3.json("samples.json").then(function (data) {
  wfreq = data.metadata.map(person => person.wfreq)
  console.log(wfreq)
})

//Roza now wants to sort the wfreq array in descending order. What would her code look like?
d3.json("samples.json").then(function (data) {
  wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a)
  console.log(wfreq)
});

//Roza now wants to delete null values from the sorted wfreq array. Which of the following methods would she use?
d3.json("samples.json").then(function (data) {
  wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a)
  filteredwfreq = wfreq.filter(a => a != null)
  console.log(filteredwfreq)
})

//The Object.entries() method allows access to both an object's keys and values. It returns each key-value pair as an array.
researcher1 = {
  name: 'Roza',
  age: 34,
  hobby: 'Hiking'
};
console.log(Object.entries(researcher1))

//problem
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  console.log(Object.entries(data))
});

//display the metadata of any individual from the dataset:
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key ,":" ,value);});
});