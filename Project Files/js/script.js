/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const list = data;
const page = Math.ceil(data.length/9)-1;
const searchBar = document.querySelector("header");
const searchContent = document.createElement("label");


function addSearchBar () {
   searchContent.className = "student-search";
   searchContent.innerHTML = 
      `<label for="search" class="student-search">
       <span>Search by name</span>
       <input id="search" placeholder="Search by name...">
       <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
     </label>`;
     searchBar.appendChild(searchContent);
     };


// function searching(searchInput){
//    const pageButton = document.querySelectorAll('button');
//    pageButton[0].className = 'active';
//    let newStudentList = [];
   
//    for(let i=0; i < data.length; i++){
//    let fullName = `${data[i].name.first.toUpperCase()} ${data[i].name.last.toUpperCase()}`;
//    if(fullName.includes(searchInput.toUpperCase())){
//       newStudentList.push(data[i]);
//    }

//    // if(firstInput.includes(searchInput.toUpperCase()) || lastInput.includes(searchInput.toUpperCase())){
//    //    newStudentList.push(list[i]);
//    // }
// }};

const numPerPage = 9;

function showPage(list, page) {
   const startIndex = (page * numPerPage) - numPerPage;
   const endIndex = page * numPerPage;

   let studentList = document.querySelector('.student-list');
      studentList.innerHTML = " ";
      for (let i=0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
         let studentHTML = 
         `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}">
               <h3> ${list[i].name.title}. ${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML("beforeend", studentHTML);
      };
}}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

let linkList = document.querySelector('.link-list');

function addPagination(list) {
   const numOfPages = list.length / numPerPage;
   linkList.innerHTML = "";
      for (i=0; i < numOfPages; i++){
         let button = `
      <li>
         <button type="button">${i+1}</button>
       </li>`
       linkList.insertAdjacentHTML("beforeend", button);
       let firstButton = document.querySelector("li button")
       firstButton.className = "active";
      }; 
};


linkList.addEventListener("click", (e) => {
   if (e.target.tagName == "BUTTON"){
      let priorButton = document.querySelector(".active");
      priorButton.className = "";
      e.target.className = "active";
      showPage(list, e.target.textContent);
   }});




// Call functions
showPage(data,1);
addPagination(data);
addSearchBar();

//***THIS IS THE CORRECT TARGETED VALUE */
const searchBarred = document.getElementById('search');

let newStudentList = [];
let fullName = `${data[i].name.first.toUpperCase()}`+
               `${data[i].name.last.toUpperCase()}`;

searchBarred.addEventListener('keyup', (e) => {
   let searchString = e.target.value;   
   const upperSearch = searchString.toUpperCase();
   console.log(data);
   console.log(upperSearch)
   for(let i=0; i < data.length; i++){
      if (fullName.includes(upperSearch)){
         newStudentList.push(data[i])
      };
      console.log(newStudentList);
   }

   addPagination(newStudentList);
   showPage(newStudentList, 1);

});
      



searchBarred.addEventListener('submit', (e) => {
   let searchString = e.target.value;  
   console.log(searchString.toUpperCase());


})




// let fullName = `${data[i].name.first.toUpperCase()} 
// ${data[i].name.last.toUpperCase()}`;

// for(let i=0; i < data.length; i++){

// if(fullName.includes(searchString.toUpperCase())){
//    newStudentList.push(data[i]);
// }
// console.log(newStudentList);
// showPage(newStudentList, 1)
// addPagination(newStudentList)}

// function searching(){
//    let fullName = `${data[i].name.first.toUpperCase()} 
//    ${data[i].name.last.toUpperCase()}`;

// };

// let newStudentList = [];

// function searching(target){

//    let fullName = `${data[i].name.first.toUpperCase()} 
//    ${data[i].name.last.toUpperCase()}`;
   
//    for(let i=0; i < data.length; i++){
   
//    if(fullName.includes(searchString.toUpperCase())){
//       newStudentList.push(data[i]);
//    }
//    console.log(newStudentList);
//    showPage(newStudentList, 1)
//    addPagination(newStudentList)}
// ;};
         


