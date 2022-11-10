let answers = document.getElementsByClassName("answer");
let arrows = document.getElementsByClassName("icon");




function showAnswer(){
    let classList = this.classList;
    
    let answer = this.parentElement.nextElementSibling;
    let question = this.parentElement.children[0];

    if(classList.contains("icon-up")){
        
        classList.remove("icon-up");
        answer.classList.remove("open");
        question.classList.remove("bold");
    }else{
        classList.add("icon-up");
        answer.classList.add("open");
        question.classList.add("bold");
    }
}


for (let arrow of arrows){
    arrow.addEventListener("click",showAnswer)
}