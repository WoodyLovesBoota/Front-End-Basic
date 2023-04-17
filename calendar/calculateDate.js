let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth() + 1;

let calendarTable = document.getElementById("calendar-table");
let calendarBodyTable = document.querySelector("#calendar-table-body");
const getDateOfMonth = (year, month) => {
  let totalDate = new Date(year, month, 0).getDate();
  return totalDate;
};

const drawCalendar = () => {
  let firstDay = new Date(nowYear, nowMonth - 1, 1).getDay();
  let totalRow = Math.ceil((firstDay + getDateOfMonth(nowYear, nowMonth)) / 7);
  let past = 7 - firstDay;

  document.getElementById("year").innerText = nowYear.toString() + "년 ";
  document.getElementById("month").innerText = nowMonth.toString() + "월";

  while (calendarBodyTable.rows.length > 0) {
    calendarBodyTable.deleteRow(calendarBodyTable.rows.length - 1);
  }

  let firstRow = calendarBodyTable.insertRow();

  for (let i = 0; i < firstDay; i++) {
    firstRow.insertCell();
  }

  for (let i = 1; i <= 7 - firstDay; i++) {
    let nowCols = firstRow.insertCell();
    nowCols.innerText = i;
  }

  for (let i = 1; i < totalRow; i++) {
    let nowRow = calendarBodyTable.insertRow();
    for (let j = 0; j < 7; j++) {
      let nowCols = nowRow.insertCell();
      nowCols.innerText = past + 1;
      past++;
      if (past >= getDateOfMonth(nowYear, nowMonth)) break;
    }
  }
};

window.onload = () => {
  drawCalendar();
};

const prev = () => {
  if (nowMonth > 1) nowMonth--;
  else {
    nowYear--;
    nowMonth = 12;
  }
  drawCalendar();
};

const next = () => {
  if (nowMonth < 12) nowMonth++;
  else {
    nowYear++;
    nowMonth = 1;
  }
  drawCalendar();
};
