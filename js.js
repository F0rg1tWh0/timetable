let button = document.querySelector("button");
let inputName = document.querySelector("#name");
let inputDay = document.querySelector("#day");
let inputTime = document.querySelector("#time");
let body = document.querySelector('body')
let hours = document.querySelector('#hours')

let monday9 = document.querySelector(".monday9");
let monday10 = document.querySelector(".monday10");
let monday11 = document.querySelector(".monday11");
let monday12 = document.querySelector(".monday12");
let monday13 = document.querySelector(".monday13");
let monday14 = document.querySelector(".monday14");
let monday15 = document.querySelector(".monday15");
let monday16 = document.querySelector(".monday16");
let monday17 = document.querySelector(".monday17");
let monday18 = document.querySelector(".monday18");
let monday19 = document.querySelector(".monday19");
let monday20 = document.querySelector(".monday20");
let monday21 = document.querySelector(".monday21");

let tuesday9 = document.querySelector(".tuesday9");
let tuesday10 = document.querySelector(".tuesday10");
let tuesday11 = document.querySelector(".tuesday11");
let tuesday12 = document.querySelector(".tuesday12");
let tuesday13 = document.querySelector(".tuesday13");
let tuesday14 = document.querySelector(".tuesday14");
let tuesday15 = document.querySelector(".tuesday15");
let tuesday16 = document.querySelector(".tuesday16");
let tuesday17 = document.querySelector(".tuesday17");
let tuesday18 = document.querySelector(".tuesday18");
let tuesday19 = document.querySelector(".tuesday19");
let tuesday20 = document.querySelector(".tuesday20");
let tuesday21 = document.querySelector(".tuesday21");

let wednesday9 = document.querySelector(".wednesday9");
let wednesday10 = document.querySelector(".wednesday10");
let wednesday11 = document.querySelector(".wednesday11");
let wednesday12 = document.querySelector(".wednesday12");
let wednesday13 = document.querySelector(".wednesday13");
let wednesday14 = document.querySelector(".wednesday14");
let wednesday15 = document.querySelector(".wednesday15");
let wednesday16 = document.querySelector(".wednesday16");
let wednesday17 = document.querySelector(".wednesday17");
let wednesday18 = document.querySelector(".wednesday18");
let wednesday19 = document.querySelector(".wednesday19");
let wednesday20 = document.querySelector(".wednesday20");
let wednesday21 = document.querySelector(".wednesday21");

let thursday9 = document.querySelector(".thursday9");
let thursday10 = document.querySelector(".thursday10");
let thursday11 = document.querySelector(".thursday11");
let thursday12 = document.querySelector(".thursday12");
let thursday13 = document.querySelector(".thursday13");
let thursday14 = document.querySelector(".thursday14");
let thursday15 = document.querySelector(".thursday15");
let thursday16 = document.querySelector(".thursday16");
let thursday17 = document.querySelector(".thursday17");
let thursday18 = document.querySelector(".thursday18");
let thursday19 = document.querySelector(".thursday19");
let thursday20 = document.querySelector(".thursday20");
let thursday21 = document.querySelector(".thursday21");

let friday9 = document.querySelector(".friday9");
let friday10 = document.querySelector(".friday10");
let friday11 = document.querySelector(".friday11");
let friday12 = document.querySelector(".friday12");
let friday13 = document.querySelector(".friday13");
let friday14 = document.querySelector(".friday14");
let friday15 = document.querySelector(".friday15");
let friday16 = document.querySelector(".friday16");
let friday17 = document.querySelector(".friday17");
let friday18 = document.querySelector(".friday18");
let friday19 = document.querySelector(".friday19");
let friday20 = document.querySelector(".friday20");
let friday21 = document.querySelector(".friday21");

let saturday9 = document.querySelector(".saturday9");
let saturday10 = document.querySelector(".saturday10");
let saturday11 = document.querySelector(".saturday11");
let saturday12 = document.querySelector(".saturday12");
let saturday13 = document.querySelector(".saturday13");
let saturday14 = document.querySelector(".saturday14");
let saturday15 = document.querySelector(".saturday15");
let saturday16 = document.querySelector(".saturday16");
let saturday17 = document.querySelector(".saturday17");
let saturday18 = document.querySelector(".saturday18");
let saturday19 = document.querySelector(".saturday19");
let saturday20 = document.querySelector(".saturday20");
let saturday21 = document.querySelector(".saturday21");

let sunday9 = document.querySelector(".sunday9");
let sunday10 = document.querySelector(".sunday10");
let sunday11 = document.querySelector(".sunday11");
let sunday12 = document.querySelector(".sunday12");
let sunday13 = document.querySelector(".sunday13");
let sunday14 = document.querySelector(".sunday14");
let sunday15 = document.querySelector(".sunday15");
let sunday16 = document.querySelector(".sunday16");
let sunday17 = document.querySelector(".sunday17");
let sunday18 = document.querySelector(".sunday18");
let sunday19 = document.querySelector(".sunday19");
let sunday20 = document.querySelector(".sunday20");
let sunday21 = document.querySelector(".sunday21");

let mondayList = GetListOfDays("monday");
let tuesdayList = GetListOfDays("tuesday");
let wednesdayList = GetListOfDays("wednesday");
let thursdayList = GetListOfDays("thursday");
let fridayList = GetListOfDays("friday");
let saturdayList = GetListOfDays("saturday");
let sundayList = GetListOfDays("sunday");

// console.log(mondayList, tuesdayList, wednesdayList, sundayList)

let mondays = [
  monday9,
  monday10,
  monday11,
  monday12,
  monday13,
  monday14,
  monday15,
  monday16,
  monday17,
  monday18,
  monday19,
  monday20,
  monday21,
];
let tuesdays = [
  tuesday9,
  tuesday10,
  tuesday11,
  tuesday12,
  tuesday13,
  tuesday14,
  tuesday15,
  tuesday16,
  tuesday17,
  tuesday18,
  tuesday19,
  tuesday20,
  tuesday21,
];
let wednesdays = [
  wednesday9,
  wednesday10,
  wednesday11,
  wednesday12,
  wednesday13,
  wednesday14,
  wednesday15,
  wednesday16,
  wednesday17,
  wednesday18,
  wednesday19,
  wednesday20,
  wednesday21,
];
let thursdays = [
  thursday9,
  thursday10,
  thursday11,
  thursday12,
  thursday13,
  thursday14,
  thursday15,
  thursday16,
  thursday17,
  thursday18,
  thursday19,
  thursday20,
  thursday21,
];
let fridays = [
  friday9,
  friday10,
  friday11,
  friday12,
  friday13,
  friday14,
  friday15,
  friday16,
  friday17,
  friday18,
  friday19,
  friday20,
  friday21,
];
let saturdays = [
  saturday9,
  saturday10,
  saturday11,
  saturday12,
  saturday13,
  saturday14,
  saturday15,
  saturday16,
  saturday17,
  saturday18,
  saturday19,
  saturday20,
  saturday21,
];
let sundays = [
  sunday9,
  sunday10,
  sunday11,
  sunday12,
  sunday13,
  sunday14,
  sunday15,
  sunday16,
  sunday17,
  sunday18,
  sunday19,
  sunday20,
  sunday21,
];

button.addEventListener("click", function () {
  let name = inputName.value;
  let day = inputDay.value;
  let newTime = inputTime.value.split("-");
  let time = [];
  for (let i = 0; i <= newTime[1] - newTime[0]; i++) {
    time.push((parseInt(newTime[0]) + i).toString());
  }
  console.log(time);
  for (let i = 0; i < time.length; i++) {
    let value = day + time[i];
    // console.log(value);
    for (let i = 0; i < mondays.length; i++) {
      Func(mondays[i], mondayList[i], value, name);
      Func(tuesdays[i], tuesdayList[i], value, name);
      Func(wednesdays[i], wednesdayList[i], value, name);
      Func(thursdays[i], thursdayList[i], value, name);
      Func(fridays[i], fridayList[i], value, name);
      Func(saturdays[i], saturdayList[i], value, name);
      Func(sundays[i], sundayList[i], value, name);
    }
  }
});

function Func(dayValue, day, value, name) {
  if (value == day) {
    let newBlock = document.createElement('div')
    hours.appendChild(newBlock)
    newBlock.appendChild(dayValue)
    newBlock.innerHTML = name
    newBlock.classList.add('active')
    // newBlock.style.display = 'grid'
    // newBlock.classList.add('active')
    // dayValue.classList.add("active")
    // dayValue.innerHTML = name;
    dayValue.style.border = 0;
  }
}
function GetListOfDays(day) {
  let list = [];
  for (let i = 9; i < 22; i++) {
    let a = day + i.toString();
    list.push(a);
  }
  return list;
}
// let newBlock = document.createElement('div')
//     hours.appendChild(newBlock)
//     newBlock.innerHTML = 'DCTV GHBDTN'
//     newBlock.style.backgroundColor = 'black'
