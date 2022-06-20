
const btn = document.querySelector(".btn button");

const RulesBox = document.querySelector(".RulesBox");
  
const ExitBtn = document.querySelector(".btn2 .ExitBtn");

const ContinueBtn = document.querySelector(".btn2 .ContinueBtn");

const Questions = document.querySelector(".Questions");



btn.onclick = () => {
  RulesBox.classList.add("activeInfo");
}

ExitBtn.onclick = () => {
  RulesBox.classList.remove("activeInfo");
}

ContinueBtn.onclick = () => {
  RulesBox.classList.remove("activeInfo");
  Questions.classList.add("activeQuiz");
  showQuestions(0)
}

const NextBtn = document.querySelector(".NextBtn");

let que_count = 0;

NextBtn.onclick = () => { 
  if (que_count < questions.length -1) {
     
    que_count++
    showQuestions(que_count)
  } else {
    console.log("You Have Complete Your Task")
   }
}


function showQuestions(index) {
  const que_text = document.querySelector(".text");
  
  const option_list = document.querySelector(".MyOptions");

  let option_tag = '<div class ="options"><span> ' + questions[index].Options[0] + '</span> </div>'
                 + '<div class ="options"><span> ' + questions[index].Options[1] + '</span> </div>'
                 + '<div class ="options"><span> ' + questions[index].Options[2] + '</span></div>'
                 + '<div class ="options"><span> ' + questions[index].Options[3] + ' </span></div>'

  let que_tag = "<span>" + questions[index].numb+'.' + questions[index].question + "</span>";

  que_text.innerHTML = que_tag;

  option_list.innerHTML = option_tag;

  const total_que = document.querySelector(".total_que");
  let total_queTag = '<p>' + questions[index].numb + ' of 5 </p>'
  total_que.innerHTML = total_queTag;
}