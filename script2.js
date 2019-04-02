"use strict"

let persons[];

const letterPattern = /[a-zA-Z]*$/;
const birthdayPattern = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const emailPattern =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


const inputName = document.forms["userForm"]["firstname"];
const inputSurname = document.forms["userForm"]["surname"];
const inputBirthday = document.forms["userForm"]["birthday"];
const inputEmail = document.forms["userForm"]["email"];


let Person = function(id,name,surname,birthday,email){
    this.id = id;
    this.name = name ;
    this.surname = surname;
    this.birthday = birthday ;
    this.age = 0;
    this.email = email ;
    this.calculateAge = function(){
        let calculatedAge = new Date(). getFullYear() - new Date(this.birthday).getFullYear();
        this.age = calculatedAge ;
    };
    
};

let idCounter = (function(){
    var counter = 0;
    return function(){
        return counter+=1;
    }
})();

function validateForm(){
    if(inputName.value == "" || inputSurname.value == "" || inputBirthday.value == "" || inputEmail.value == "") {
        alert("WRONG");
        return false;
    }

    
    if(!inputName.value.match(letterPattern)|| !inputSurname.value.match(letterPattern) ){
        alert("sehv ad ya surname");
        return false;
    }
    if( !inputBirthday.value.match(birthdayPattern)){
        alert("birthday forma not valid");
        return false;
    }
    if(inputEmail.value.match(emailPattern)){
        alert("email format is not correct")
    }
    
    
    let createdPerson = new Person(idCounter(), inputName.value, inputSurname.value,inputBirthday.value,inputEmail.value);
    createdPerson.calculateAge();
    persons.push(createdPerson);
    displayList();



    return false;
}
function displayList(){
    let lists = '<li class="list-group-item">test</li';
    for (let i=0; i< persons.length; i++){
        lists +='<li class="list-group-item"> ${ persons[i].id}`
    }
}