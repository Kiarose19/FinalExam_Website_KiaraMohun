// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//var tablinks = document.getElementsByClassName("tab-links")
//var tabcontents = document.getElementsByClassName("tab-contents")

//function opentab(tabname){
  //for ( tablink of tablinks){
   // tablink.classList.remove("active-link");
  //}

  //for ( tabcontent of tabcontents){
  //  tabcontent.classList.remove("active-tab");
  //}
  
 // event.currentTarget.classList.add("active-link");
 
  

 
//}

function openInformation(evt, informationName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(informationName).style.display = "block";
  evt.currentTarget.className += " active";
}

//function myFunction() {
 // return "Changes may be made if you leave";
//}


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function openModal(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
 function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
 function openModal2(){
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
 function closeModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => GoToAboutPage());

function GoToAboutPage(){
  window.location.replace("https://kiarose19.github.io/FinalExam_Website_KiaraMohun/about.html");
}

var blogsBtn = document.querySelector("#blogsBtn");
blogsBtn.addEventListener("click", () => GoToBlogsPage());

function GoToBlogsPage(){
  window.location.replace("https://kiarose19.github.io/FinalExam_Website_KiaraMohun/blogs.html");
}

var designsBtn = document.querySelector("#designsBtn");
designsBtn.addEventListener("click",() => GoToDesignsPage());

function GoToDesignsPage(){
  window.location.replace("https://kiarose19.github.io/FinalExam_Website_KiaraMohun/design.html");
}

var essayBtn = document.querySelector("#essayBtn");
essayBtn.addEventListener("click", () => GoToBlogsPage());

function GoToBlogsPage(){
  window.location.replace("https://kiarose19.github.io/FinalExam_Website_KiaraMohun/blogs.html");
}

var portfolioBtn = document.querySelector("#portfolioBtn");
portfolioBtn.addEventListener("click", () => GoToPortfolioPage());

function GoToPortfolioPage(){
  window.location.replace("https://kiarose19.github.io/FinalExam_Website_KiaraMohun/portfolio.html");
}

var contactBtn = document.querySelector("#contactBtn");
contactBtn.addEventListener("click", () => GoToContactPage());

function GoToContactPage(){
  window.location.replace("https://kiarose19.github.io/FinalExam_Website_KiaraMohun/contact.html");
}

