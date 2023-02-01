//this func makes the form disappear
function BerginSort(){
  const SortHat = document.getElementById('WHOdini');
  //gets current dispaly setting
  var displaySetting = SortHat.style.display;
  //grab the button to change text depending on state
  var buttText = document.getElementById('start');
  //if statment that toogles form
  if (displaySetting == 'block'){
    SortHat.style.display = 'none';
    buttText.innerHTML = 'Click here to sort';
  }
  else{
    SortHat.style.display = 'block';
    buttText.innerHTML='Changed your mind muggle?'
  }
};

//makes the accordion...uh..accord
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//empty array for pushing new students
const studs = [];

//make the app
const wizardTote = (divID, htmlpage) => {
  const choseDiv = document.querySelector(divID);
  choseDiv.innerHTML = htmlpage; 
}

//make the cards
const domcards = (array) => {
  let domString ="";
  for (const whiz of array){
    domString += `<div class="card" style="width: 18rem;">
    <img src="${whiz.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${whiz.name}</p>
    </div>
  </div>`
  }
  whizTote(".whizTote", domString)
};
domcards(studs)
