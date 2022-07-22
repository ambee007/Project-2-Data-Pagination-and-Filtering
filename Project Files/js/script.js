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
const page = Math.ceil(list.length/9)-1;
const searchBar = document.querySelector("header");
const searchContent = document.createElement("label");
const searchBarred = document.querySelector("label")
const searchButton = document.querySelector("header button");
console.log(searchButton);

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

function searching(){
   let studentList = [];
   for(let i=0; i < list.length; i++){
   let firstInput = list[i].name.first.toUpperCase();
   let lastInput = list[i].name.last.toUpperCase();  
   if(firstInput.includes(input.value.toUpperCase()) || lastInput.includes(input.value.toUpperCase())){
      newStudentList.push(list[i]);
   }
}};

searchBarred.addEventListener("click", (event)=>{
   document.querySelector('onclick').value = true}
);

searchContent.addEventListener("keyup", (event)=>{
   console.log(event)}
);


function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

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
   const numOfPages = Math.ceil(list.length/9);
   linkList.innerHTML = "";
      for (i=1; i < numOfPages; i++){
         let button = `
      <li>
         <button type="button">${i}</button>
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
      // let clickButton = document.querySelector(targetName)
      showPage(list, e.target.textContent);
   }});




// Call functions
showPage(data,1);
addPagination(data);
addSearchBar();
