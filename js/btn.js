var inputs = document.querySelectorAll(".plus");
const typeEnter = document.querySelector("#enter");
const answer = "hello";

typeEnter.addEventListener('click',checkAnswer);

function checkAnswer(event){
    event.preventDefault();
    inputs = document.querySelectorAll(".plus");
   for(let i=0;i<5;i++){
        if(inputs[i].value == answer[i]){
            inputs[i].style.background ='green';
        }else if(answer.includes(inputs[i].value)){
            inputs[i].style.background ='yellow';
        }else{
            inputs[i].style.background ='red';
        }
        inputs[i].classList.remove('plus');
   }
   // 다 초록색이면 끝내
   // 아니면 다음 div에 클래스 추가
}