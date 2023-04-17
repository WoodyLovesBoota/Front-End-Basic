let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth() + 1;
let nowDay = now.getDay();
let nowDate = now.getDate();
let dateArr = [[]];

document.getElementById("year").innerText = nowYear;
document.getElementById("month").innerText = nowMonth;

let calendarTable = document.getElementById("calendar-table");
let tr = document.createElement("tr");
let td = document.createElement("td");

const getDateOfMonth = (year, month) => {
  let totalDate = new Date(year, month, 0).getDate();
  return totalDate;
};

let firstDay = new Date(nowYear, nowMonth - 1, 1).getDay();
let totalRow = Math.ceil((firstDay + getDateOfMonth(nowYear, nowMonth)) / 7);
console.log(totalRow);

for (let i = 0; i < totalRow; i++) {
  calendarTable.appendChild(tr);
}
for (let i = 0; i < 7; i++) {
  tr.appendChild(td);
}

console.log(dateArr);
