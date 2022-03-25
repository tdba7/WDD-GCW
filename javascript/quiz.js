var time;
var correctQuestions = '';
var incorrectQuestions = '';
var emptyQuestions = '';
var total = 0;
var i;
var j;
var isEmpty = 0;
var timer;

function showQuiz(){
    document.getElementById("quizRules").style.display = 'none';
    document.getElementsByClassName("quizQuestions")[0].style.display = 'block';
    document.getElementsByClassName("quizQuestions")[1].style.display = 'block';
    startTimer();
    timeout();
}
    
function startTimer(){
    time = 59;
    timer = setInterval(
        function(){
            document.getElementById('showTimer').innerHTML = time;
            if(time>0){
                time--
            }else{
                stopTimer();
                time=0;
            }
        },1000);
}

function checkAnswers() {
    stopTimer();
    document.getElementById('remainingTime').innerHTML = "Time Remained : " + time + "seconds";
    clearTimeout(setTimer);
    
    for(i = 1; i <= 10; i++) {
        var questionNum = document.getElementsByName('question'+i);
        for(j = 0; j < questionNum.length; j++) {
            var radioValue = questionNum[j];
            if(radioValue.value == "correct" && radioValue.checked) {
                total = total + 2;
                correctQuestions = correctQuestions +'Question '+i+", ";
            }else if (radioValue.value == "wrong" && radioValue.checked) {
                total = total - 1; 
                incorrectQuestions = incorrectQuestions +'Question '+i+", ";
            }else{
                isEmpty += 1;
                if(isEmpty == 4){
                    emptyQuestions = emptyQuestions +'Question '+i+", ";
                }
            }
        }
        isEmpty = 0;
    }
    
    document.getElementById("quizRules").style.display = 'none';
    document.getElementsByClassName("quizQuestions")[0].style.display = 'none';
    document.getElementsByClassName("quizQuestions")[1].style.display = 'none';
    document.getElementById("finalResults").style.display = 'block';
}

function printResult(){
    document.getElementById('totalScore').innerHTML = "Total Score = " + total + "/10";
    document.getElementById('correctAns').innerHTML = "Questions which you entered Correct Answers : " + correctQuestions;
    document.getElementById('incorrectAns').innerHTML = "Questions which you entered Incorrect Answers : " + incorrectQuestions;
    document.getElementById('emptyAns').innerHTML = "Questions which you missed : " + emptyQuestions;
    document.getElementById('remainingTime').innerHTML = "Time Remained : " + time + "seconds";
}
function colorChange(){
    if(total>=10) {
        document.body.style.backgroundImage = "url('../assets/bg.jpg')";
    }else if(total<20 && total>=10){
        document.body.style.backgroundImage = "url('../assets/bg.jpg')";
    }else if(total<10 && total>=5){
        document.body.style.backgroundImage = "url('../assets/bg.jpg')";
    }else if(total<5 && total>=3){
        document.body.style.backgroundImage = "url('../assets/bg.jpg')";
    }else{
        document.body.style.backgroundImage = "url('../assets/bg.jpg')";
    }
} */

function timeout() {
    setTimer = setTimeout('timeUp()',60000);		
}

function timeUp() {
    alert("Your Time is UP!");
    checkAnswers();
    colorChange();
    printResult();
}

function resetPage(){
    document.getElementById("quiz").reset();
    document.getElementById("quizRules").style.display = 'block';
    document.getElementsByClassName("quizQuestions")[0].style.display = 'none';
    document.getElementsByClassName("quizQuestions")[1].style.display = 'none';
    document.getElementById("finalResults").style.display = 'none';
    total = 0;
    correctQuestions = '';
    incorrectQuestions = '';
    emptyQuestions = '';
/*     document.body.style.backgroundColor="#fff";
    document.body.style.backgroundImage = "url('ourbg.jpg')"; */
}

function stopTimer(){
clearInterval(timer);}



