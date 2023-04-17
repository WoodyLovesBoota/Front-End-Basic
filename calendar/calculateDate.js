let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth() + 1;
let nowDay = now.getDay();
let nowDate = now.getDate();
let dateArr = [[]];

document.getElementById("year").innerText = nowYear.toString() + "년 ";
document.getElementById("month").innerText = nowMonth.toString() + "월";

let calendarTable = document.getElementById("calendar-table");

const getDateOfMonth = (year, month) => {
  let totalDate = new Date(year, month, 0).getDate();
  return totalDate;
};

let firstDay = new Date(nowYear, nowMonth - 1, 1).getDay();
let totalRow = Math.ceil((firstDay + getDateOfMonth(nowYear, nowMonth)) / 7);
console.log(firstDay);

console.log(dateArr);

let calendarBodyTable = document.querySelector("#calendar-table-body");
let firstRow = calendarBodyTable.insertRow();
for (let i = 0; i < firstDay; i++) {
  firstRow.insertCell();
}
for (let i = 1; i <= 7 - firstDay; i++) {
  let nowCols = firstRow.insertCell();
  nowCols.innerText = i;
}
let past = 7 - firstDay;

for (let i = 1; i < totalRow; i++) {
  let nowRow = calendarBodyTable.insertRow();
  for (let j = 0; j < 7; j++) {
    let nowCols = nowRow.insertCell();
    nowCols.innerText = past + 1;
    past++;
    if (past >= getDateOfMonth(nowYear, nowMonth)) break;
  }
}
