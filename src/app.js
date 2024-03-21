/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let employees = "company-x";
  let worker = " ";

  let person1 = {
    name: "Juana",
    job: "cleaner",
    age: 55,
    dept: "cleaning",
    skills: ["gardening", "decoration", "ironing"]
  };
  let person2 = {
    name: " Aroa",
    job: "cleaner",
    age: 45,
    dept: "cleaning",
    skills: ["hairdressing", "laundry", "ironing"]
  };
  let person3 = {
    name: "Diana",
    job: "cleaner",
    age: 37,
    dept: "cleaning",
    skills: ["organizing", "dry-cleaning", "laundry"]
  };
  let person4 = {
    name: "Diego",
    job: "Head of Manteinance",
    age: 45,
    dept: "Manteinance",
    skills: ["organizing", "admin", "electricity", "plumbing", "construction"]
  };
  let person5 = {
    name: "Juan",
    job: "electrician",
    age: 40,
    dept: "manteinance",
    skills: ["electricity", "cabling", "domotics"]
  };
  let person6 = {
    name: "Albaro",
    job: "worker",
    age: 35,
    dept: "manteinance",
    skills: ["construction", "heavy-duty", "safety"]
  };

  let workers = [person1, person2, person3, person4, person5, person6];
  workers.map(item => {
    console.log(item.name);
    item.skills.map(element);
  });
};
