//starting over becuase i suck
// .class-name or #id-name
//dom rendering
const domRender = (divID, htmlPage) =>{
  const choseDiv = document.querySelector(divID);
  choseDiv.inneraHTML = htmlPage;
};

//make the sorting hat, now with non transphobe baskstory!!
// const skooncin = () =>{
//   let domString ="";
//   domString= `<div class="SortHat-card" id="SkoonCap">
//   <div class="Sort-Hat-Body">
//   <h1 class="Sort-Hat-Title"></h1>
//   <p class="real-History">"The Ilvermorny School of Witchcraft and Wizardry was founded in 1627, in order to escape teh tyranical rule
// of the puritans by use of magic. The orignal sorting hat resembled a capotain hat,
// however the personality of this magical item became too old fashioned for the school's 
// staff to manage as it spewed horrible demeaning words at the little witches and wizards. Thus,
// the headmaster of Ilvermorny at the time, David Crockett, imbued his famous coonskin cap with the
// ability to sort new students!"</p>
// <a href="#" id="haus-picker" class="btn btn-primary">Pick a Yankee House</a>
//   </div>
//   </div>`
// domRender()
// };

//gotta see the hat
const hatCard= () =>{
let domString="";
domString =`<div id="welcome-card" class="card-welcomeToIlvermorny">
<div class="card-body">
<h1 class="card-title"> Hey Y'all!! Welcome to Ilevrmorny</h1>
<P class=""card-desc">"You've been selected to attend the finest school of Whiccraft & Wizardy this side of the Mississippi"</P>
<a href="#" id="haus-picker" class="btn btn-primary">Pick a Yankee House</a>
</div>
</div>`
};

//build the form
const studForm = () =>{
  let domString="";
  domString= ``
  domRender("#studForm", domString)
}

//build 4 different haus buttons
const hausbutts = () => {
  let domString="";
  domString=`<button id="buttContainer" type="button" class="btn btn-prime">All Students</button>
  <button id="hsButt" type="button" class="btn btn-1">Horned Serpent</button>
  <button id="wamButt" type="button" class="btn btn-2">Wampus</button>
  <button id="tbirdButt" type="button" class="btn btn-3">Thunderbird</button>
  <button id="pukButt" type="button" class="btn btn-4">Pukwudgie</button>`
  domRender("#hausbutts",domString)
};

//american house randomizer
const hausort = (array, divID)=>{
  let domString =``;
  for (let i of array){
    const hsHaus = i.haus === "Horned Serpent";
    const wpHaus = i.haus === "Wampus";
    const tbHaus = i.haus === "Thunderbird";
    const pwHaus = i.haus === "Pukwudgie";
    domString += ``
  }
  domRender(divID, domString)
};

//jerk patrol expulsion pile
const jerkpel = (array) =>{

};

//filter houses
const hausFilter = () =>{

};

//start the sorting
const SortMe = () =>{
document.querySelector("#welcome-card").addEventListener("click", (e) => {
  if(e.target.id === "haus-picker") {
    document.querySelector("#haus-picker").style.display="none";
    document.querySelector("#skoon-cap-img").style.display="none";
    studForm();
    hausbutts();
    hausFilter();
  }
})
};

//good ol math. whatever
const hausRandomizer = () => {
  const hauser =["Horned Serpent", "Wampus","Thunderbird","Pukwudgie"]
};

//Expel the naughty whiz
const Expel = () =>{

};


//makes everything work
function SortWhiz(){

};
SortWhiz();
