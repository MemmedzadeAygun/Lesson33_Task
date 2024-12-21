
//Task1
// let liElement=document.querySelectorAll("li");

// function changeTextColor(event){
//     if (event.target.style.color=="gray") {
//         event.target.style.color="black";
//     }
//     else{
//         event.target.style.color="gray";
//     }
    
// }

// liElement.forEach(li =>{
//     li.addEventListener('click',changeTextColor);
// }) 


//Task2
// let liElement2=document.querySelectorAll("li");
// function method1(e){
//     e.target.style.textDecoration="line-through";

//     e.currentTarget.removeEventListener('click',method2); 
    
// }

// function method2(e){
//     e.currentTarget.style.color="blue";
// }

// liElement2.forEach(element => {
//     element.addEventListener('click',method1);
//     element.addEventListener('click',method2);
// });

//Task3
// document.addEventListener("keyup",(e) => {
//     console.log(e.key);
    
// })


//FormElementsTask1
let textarea=document.querySelector("#textArea");
let btn=document.querySelector("#getText");

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(textarea.value);
    textarea.value="";
    
})

//FormElementsTask2
let formElement=document.querySelector(".user-form");

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const data=new FormData(event.target);

    let passwordInput=document.querySelector('[name="password"]');
    passwordInput.style.border='1px solid red';
    console.log(data.get('age'));
    console.log(data.get('email'));
    
    if (data.get('password').length>5) {
        console.log("Icaze verildi!");
        passwordInput.style.border='1px solid green';
        
    } else {
        console.log("Giris qadagandir!");
        
    }
})