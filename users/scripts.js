async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const users = data.users;
  console.log(users[0]);
  let table = document.querySelector("table"); //მთლიანი ცხრილი
  let thead = document.createElement("thead"); //სვეტის სათაური
  let tbody = document.createElement("tbody"); //ცხრილის შიგთავსი
  table.appendChild(thead);
  let headTr = document.createElement("tr");
  thead.appendChild(headTr);
  table.appendChild(tbody);
  users.forEach((item) => {
    let tr = document.createElement("tr"); //მწკრივის ბლოკი
    tbody.appendChild(tr);
    for (const key in item) {
      let td = document.createElement("td");
      td.innerHTML = item[key];
      tr.appendChild(td);
      let headTh = document.createElement("th");
      headTh.innerHTML = key;
      headTr.appendChild(headTh);
    }
  });
  ////////////////////////
  document.querySelector("#submit").addEventListener("click", function () {
    let search = document.querySelector("#search").value;
    console.log(search);
  });
  /////
}
getUsers();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
