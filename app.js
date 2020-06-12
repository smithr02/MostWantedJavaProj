"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      mainMenu(searchResults, people);
      break;
    case 'no':
      searchResults = searchByName(people);
      // TODO: search by traits
      searchResults = searchByTraits(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person);
    return mainMenu(person, people);
    break;
    case "family":
    // TODO: get person's family
    displayFamily(person,people);
    return mainMenu(person, people);
    break;
    case "descendants":
    // TODO: get person's descendants
    displayPeople(searchForDescendants(person, people));
    return mainMenu(person, people);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  foundPerson = foundPerson[0];
  return foundPerson;
}

function searchBuilder(people, search = {}){
let search = promptFor("What do you want to search for?, first name, last name, gender, dob, height, weight, eye color, or occupation. Input exit to start search",chars)
switch (search.toLowerCase()) {
  case "firstname":
    case "first name": 
    search["firstName"] = promptFor("Enter first name", chars);
    break;

  case "lastname":
    case "last name":
    search["lastName"] = promptFor("Enter last name", chars);
    break;

  case "gender":
    search["gender"] = promptFor("Enter gender", chars);
    break;

    case "dob":
    search["dob"] = promptFor("Enter dob", chars);
    break;

    case "height":
    search["height"] = promptFor("Enter height", chars);
    break;

    case "weight":
    search["weight"] = promptFor("Enter weight", chars);
    break;

    case "eyecolor":
    search["eyeColor"] = promptFor("Enter eye color", chars);
    break;

    case "occupation":
    search["occupation"] = promptFor("Enter dob", chars);
    break;
    
  case "exit":
  search(people, search);
    break;
}
searchBuilder(people, search)
}

function search(people, search){
if (search["firstName"] != undefined);
  var searchByFirstName = people.filter(p => p.firstName == search["firstName"]);

if (search["lastName"] != undefined);
  var searchByLastName = people.filter(p => p.lastName == search["lastName"]);

if (search["gender"] != undefined);
  var searchByGender = people.filter(p => p.gender == search["gender"]);

if (search["dob"] != undefined);
  var searchByDob = people.filter(p => p.dob == search["dob"]);

if (search["height"] != undefined);
  var searchByHeight = people.filter(p => p.height == search["height"]);

if (search["weight"] != undefined);
  var searchByWeight = people.filter(p => p.weight == search["weight"]);

if (search["eyeColor"] != undefined);
  var searchByEyeColor = people.filter(p => p.eyeColor == search["eyeColor"]);

if (search["occupation"] != undefined);
  var searchByOccupation = people.filter(p => p.occupation == search["occupation"]);


var finalResults = [];
if (search["fisrtName"] != undefined);
finalResults = finalResults.concat(searchByFirstName);

if (search["lastName"] != undefined);
finalResults = finalResults.concat(searchByLastName);

if (search["gender"] != undefined);
finalResults = finalResults.concat(searchByGender);

if (search["dob"] != undefined);
finalResults = finalResults.concat(searchByDob);

if (search["height"] != undefined);
finalResults = finalResults.concat(searchByHeight);

if (search["weight"] != undefined);
finalResults = finalResults.concat(searchByWeight);

if (search["eyeColor"] != undefined);
finalResults = finalResults.concat(searchByEyeColor);

if (search["occupation"] != undefined);
finalResults = finalResults.concat(searchByOccupation);

displayPeople(finalResults);
}
// got all searches
// need to only add items that exist in all searches


function searchByTraits(peopleList) {

  let genderCriteria = promptFor("What is their gender? Type male, female", gender);

  let birthdayCriteria = promptFor("What is their birthday? Put it in this format (M/DD/YYYY)", birthday);

  let heightCriteria = promptFor("What is their height?", height);

  let weightCriteria = promptFor("What is their weight?", weight);

  let eyecolorCriteria = promptFor("What is their eye color? Chose between these colors (brown, black, hazel, blue, or green)", eyeColor);

  let occupationCriteria = promptFor("What is their occupation? Chose between these occupations (programmer, doctor, politician, nurse, assistant, landscaper, architect, or student?)", occupation);

  if (genderCriteria != "male" || "female"){
    return false;
  }
  if (birthdayCriteria != "(M/DD/YYY)"){
    return false;
  }
  if (heightCriteria != "inches"){
    return false;
  }
  if (weightCriteria != "pounds"){
    return false;
  }
  if (eyecolorCriteria != "brown, black, hazel, blue, green"){
    return false;
  }
  if (occupationCriteria != "programmer, doctor, politician, nurse, assistant, landscaper, architect, student"){
    return false;
  }

  return peopleList;
}



// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Height" + person.height + "\n";
  personInfo += "Weight" + person.weight + "\n";
  personInfo += "Eye Color" + person.eyeColor + "\n";
  personInfo += "Occupation" + person.occupation + "\n";
  alert(personInfo);
}

function displayFamilyMembers(person, people){
var displayingFamilyMember = person["parents"].map(function(parent){
return people.filter(p => p.id == parent);
}).join("\n");
alert("parents");
displayPeople(displayingFamilyMember);

if (person["currentSpouse"] != null){
displayingFamilyMember = people.filter(p => p.id == person["currentSpouse"]);
displayPeople(dispplayingFamilyMember);
}
var siblings =[];
person["parents"].map(function(parent){
  people.map(p =>{
    p["parents"].map(eachParent => {
      if (parent == eachParent) {
        siblings.push(p);
      }
  })});  //welcome to bracket city, population: lots of brackets
});
displayPeople(siblings);
}



// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
