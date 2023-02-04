//starting over becuase i suck
//dom rendering
const domRender = (divID, htmlPage) =>{
  const choseDiv = document.querySelector(divID);
  choseDiv.inneraHTML = htmlPage;
};

const skooncin = () =>{
  let domString ="";
  domString= `<div class="SortHat-card" id="SkoonCap">
  <div class="SortHatBody">
  <h1 class="SortHatTitle"></h1>
  <p class="realHistory">"The Ilvermorny School of Witchcraft and Wizardry was founded in 1627, in order to escape teh tyranical rule
of the puritans by use of magic. The orignal sorting hat resembled a capotain hat,
however the personality of this magical item became too old fashioned for the school's 
staff to manage as it spewed horrible demeaning words at the little witches and wizards. Thus,
the headmaster of Ilvermorny at the time, David Crockett, imbued his famous coonskin cap with the
ability to sort new students!"</p>
  </div>
  </div>`
}
