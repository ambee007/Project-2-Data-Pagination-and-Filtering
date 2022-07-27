/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const list = data;
const page = Math.ceil(data.length/9)-1;
const searchBar = document.querySelector("header");
const searchContent = document.createElement("label");


//Exceeds Expectations: Add search bar in Javascript and not html
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


const numPerPage = 9;
let studentList = document.querySelector('.student-list');


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * numPerPage) - numPerPage;
   const endIndex = page * numPerPage;
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
}};


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
       let firstButton = document.querySelector("li button");
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


//Exceeds Expectations: add searching functionality for keyup and submit
//returns No results Found if input is not found in the fullname 
function searching(e){
let newStudentList = [];
let searchString = e.target.value;   
const upperSearch = searchString.toUpperCase();

for(let i=0; i < data.length; i++){
   let fullName = `${data[i].name.first.toUpperCase()}`+
                  `${data[i].name.last.toUpperCase()}`;
   
   if (fullName.includes(upperSearch)){
      newStudentList.push(data[i])
   };
   addPagination(newStudentList);
   showPage(newStudentList, 1);
   } ;

   if (newStudentList.length === 0){
      const noResults = document.querySelector('.student-list');
      noResults.innerHTML += `<li class= "no results found">
      <div>No results found</div>
      </li>` 
   };
};


//event listeneres for the search functionality 
const searchBarred = document.getElementById('search');

searchBarred.addEventListener('keyup', (e) => {
   searching(e);
});
      
searchBarred.addEventListener('submit', (e) => {
   searching(e);
});
