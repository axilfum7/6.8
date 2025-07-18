
const inputName = document.querySelector(".input-name");
const inputProfession = document.querySelector(".input-profession");
const tbodyEl = document.querySelector(".table tbody");

const data = [];


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    let user = {
        id: new Date().getTime(),
        name: inputName.value,
        profession: inputProfession.value,
    };
    data.push(user);
    createTableRow(data);
    inputName.value = ""

});

 function createTableRow(data){
    tbodyEl.innerHTML = null;
    data.forEach((item, index) => {
        const trEl = document.createElement("tr");
        trEl.innerHTML = `
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.profession}</td>
                <td>${item.profession}</td>       
       
       `;
       tbodyEl.appendChild(trEl);
   });
 }