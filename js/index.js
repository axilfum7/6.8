const formEl=document.querySelector(".form")
const username=document.querySelector(".username")
const email=document.querySelector(".email")
const phone_number=document.querySelector(".phone_number")
const message=document.querySelector(".message")
const tbodyEl=document.querySelector("tbody")

let data=[]

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    let user={
        id: new Date().getTime(),
        name:username.value,
        email:email.value,
        phone:phone_number.value,
        message:message.value
    };
    data.push(user);
    createTableRow(data);
})

function createTableRow(data){
    tbodyEl.innerHtml=null;
    data.forEach((item,index)=>{
        const trEl=document.createElement("tr")
        trEl.innerHTML=`
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.message}</td>
        `;
        tbodyEl.appendChild(trEl)
    })
}