var questions = [
	{
		"question" : "In their 1979 UK top 10 hit, Quantum Jump sang about which famous TV cowboy show?",
		"answer1" : "A. Lone Ranger",
		"answer2" : "B. Gun Smoke",
		"answer3" : "C. The Virginian",
		"answer4" : "D. Bonanza",
		"correctAnswer" : "1"
	},{
		"question" : "Michael Jackson had hits in the 1970s, 1980s and 1990s. What was the name of his all-time best selling album?",
		"answer1" : "A. Bad",
		"answer2" : "B. Off The Wall",
		"answer3" : "C. Thriller",
		"answer4" : "D. Blood on the Dance",
		"correctAnswer" : "3"
	},{
		"question" : "Take That had a UK #1 in 1993 with 'Relight My Fire'. Who featured on the song with the band?",
		"answer1" : "A. Lulu",
		"answer2" : "B. Madonna",
		"answer3" : "C. Diana Ross",
		"answer4" : "D. Kylie Minogue",
		"correctAnswer" : "1"
	},{
		"question" : "What's Elvis Presley's biggest hit song?",
		"answer1" : "A. Burning Love",
		"answer2" : "B. Cant help falling in Love",
		"answer3" : "C. Heartbreak Hotel",
		"answer4" : "D. Spanish eyes",
		"correctAnswer" : "3"
	},{
		"question" : "Who came up with the name 'ABBA'?",
		"answer1" : "A. Lucy",
		"answer2" : "B. Agnetha",
		"answer3" : "C. Benny",
		"answer4" : "D. The band's manager",
		"correctAnswer" : "2"
	},{
		"question" : "Which of these singers had a #1 hit on the Hot 100 in 1980?",
		"answer1" : "A. Bon Jovi",
		"answer2" : "B. Billy Joel",
		"answer3" : "C. John Denver",
		"answer4" : "D. A Elton John",
		"correctAnswer" : "4"
	},{
		"question" : "Which of these was an opening act for Madonna in the 1980s?",
		"answer1" : "A. A DJ Jazzy Jeff and the Fresh Prince",
		"answer2" : "B. Beastie Boys",
		"answer3" : "C. LL Cool J",
		"answer4" : "D. ABBA",
		"correctAnswer" : "2"
	},{
		"question" : "How old was Elvis Presley when he died?",
		"answer1" : "A. 1980",
		"answer2" : "B. 1775",
		"answer3" : "C. 1970",
		"answer4" : "D. 1977",
		"correctAnswer" : "4"
	},{
		"question" : "'Kung Fu Fighting' is a disco song by which vocalist?",
		"answer1" : "A. Carl Douglas",
		"answer2" : "B. Benny",
		"answer3" : "C. Stevie Wonder",
		"answer4" : "D. Clarence",
		"correctAnswer" : "1"
	},{
		"question" : "On July 1st 1979, the first Sony Walkman went on sale. How much did it cost at the time?",
		"answer1" : "A. $75",
		"answer2" : "B. $100",
		"answer3" : "C. $125",
		"answer4" : "D. $150",
		"correctAnswer" : "4"
	} ]



var quiz = document.getElementById('quiz');
var questional = document.getElementById('question');

var answer1 = document.getElementById('a1');
var answer2 = document.getElementById('a2');
var answer3 = document.getElementById('a3');
var answer4 = document.getElementById('a4');

var next = document.getElementById('next');
var resultCont = document.getElementById('result');

var currentQuestion = 0;
var totQuestions = questions.length;


function loadQuestion(questionIndex){
	
	var q = questions[questionIndex];
	questional.textContent = (questionIndex + 1)+' . '+q.question;
	a1.textContent = q.answer1;
	a2.textContent = q.answer2;
	a3.textContent = q.answer3;
	a4.textContent = q.answer4;
};

var marks = 0;
var score = 0;


function nextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	if(!selectedOption){					
		alert('You have to select an answer to continue!');
		return;
	}

	var selectedAnswer = selectedOption.value; 
	
	
	if(questions[currentQuestion].correctAnswer == selectedAnswer){ 
		
		marks += 2;
		score +=1;
	}else
	{
		selectedOption.checked = false;
		
		marks-=1;
	}
	currentQuestion+=1;
	
	
	if(currentQuestion == totQuestions - 1){
		next.textContent = 'Finish';
	}
	
	if(marks <0)					
	{
	marks = 0;
	};
	
	if(currentQuestion == totQuestions){			
		
		var timeSpend = 60 - time;
		
		
		clearInterval(counter);				
		{
		document.getElementById("timer").innerHTML = "";
		};
		
		quiz.style.display = 'none';
		resultCont.style.display = '';
		
		resultCont.textContent = " You have taken "+ timeSpend+" seconds to answer the quiz. You got "+score+
		" answer correct out of 10.Your final mark is "+marks+"."; 
		
		if(marks=>10)
		{
			document.getElementById("frame001").style.background="green";
		}
		if(marks<10)
		{
			document.getElementById("frame001").style.background="red";
		}
		return;
	}
	
	loadQuestion(currentQuestion);
};
loadQuestion(currentQuestion);

var time=60;							

var counter=setInterval(timer, 1000); 

function timer()
{	


	time=time-1;
	if (time <= 0)
	{
	var timeSpend = 60 - time;
	

    clearInterval(counter);
	document.getElementById("timer").innerHTML = "Timer Expired";
	document.getElementById("timer").innerHTML = "";
	 

    quiz.style.display = 'none';
	resultCont.style.display = '';
	resultCont.textContent = "Time has run out. You got "+score+" answers correct out of 10. Your final mark is "+marks+".";
		

		if(marks=>10)
		{
			document.getElementById("frame001").style.background="green";
		}
		if(marks<10)
		{
			document.getElementById("frame001").style.background="red";
		}
     
     return;
  }
document.getElementById("timer").innerHTML="You got " + time + " seconds left!"; 
}

function retry(){
    location.reload();
}