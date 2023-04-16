let memNum = prompt("총 몇명인가요?");
let colNum = prompt("한 줄에 몇 명 씩 앉나요?");
let rowNum =
  memNum % colNum === 0
    ? parseInt(memNum / colNum)
    : parseInt(memNum / colNum) + 1;
document.write("<table>");
for (let i = 0; i < rowNum; i++) {
  document.write("<tr>");
  for (let j = 1; j <= colNum; j++) {
    let seatNo = i * colNum + j;
    if (seatNo > memNum) break;
    document.write("<td> 좌석" + seatNo + " </td>");
  }
  document.write("</tr>");
}
document.write("</table");
