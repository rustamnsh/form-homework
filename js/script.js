"use strict";

function Person(ad, soyad, yas, email, id) {
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
    this.email = email;
    this.id = id;
}
let arrayPeople = [];
let wrapper = document.querySelectorAll()

function submitPerson() {
    let name = document.forms['register']['name'].value;
    let surname = document.forms['register']['surname'].value;
    let birthday = document.forms['register']['birthday'].value;
    let email = document.forms['register']['email'].value;
    let id = arrayPeople.length + 1;
    let age = calculateAge(birthday);
    let Person = new Person(name, surname, age, email, id);
    arrayPeople.push(Person);
    displayNames()
    console.log(arrayPeople)
}
function calculateAge(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}
