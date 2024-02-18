const monthEl = document.getElementById("month");

const tableEl = document.getElementById("table");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
const month = months[d.getMonth()];
const today = d.getDate();
monthEl.innerHTML = month;
console.log(month);
console.log(today);
//loop through the days of the week
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = d.getDay();
//get the first day of the week
console.log(week[day]);

//get the first day of the month
const firstDay = new Date(d.getFullYear(), d.getMonth(), 1);

//get the last day of the month
const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);

// console.log(firstDay);
// console.log(lastDay);

//get the number of days in the month
const numsInMonth = lastDay.getDate();
console.log(numsInMonth);
let numsInMonthArr = [];

for (let i = 1; i < numsInMonth + 1; i++) {
  numsInMonthArr.push(i);
  //   console.log(i);
}
week.forEach((Weekday) => {
  tableEl.innerHTML += `<tr><td>${Weekday}</td></tr>`;
});
//add the first day to the month
//assign the first day of the month to the correct weekday

let firstWeekFirstDay = firstDay.getDay();
let dayCounter = 1;

for (let i = 0; i < 6; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 7; j++) {
    if (i === 0 && j < firstWeekFirstDay) {
      console.log(j);
      //Empty cell
      //Feb 2024 ,output 0,1,2,3
      let cell = document.createElement("td");
      cell.classList.add("empty");
      row.appendChild(cell);
      row.classList.add("firstRow");
    } else if (dayCounter > numsInMonth) {
      break;
      //Not exist day in month
    } else {
      let cell = document.createElement("td");
      cell.classList.add("day");
      cell.textContent = dayCounter;
      row.appendChild(cell);
      dayCounter++;
    }
  }
  tableEl.appendChild(row);
}
