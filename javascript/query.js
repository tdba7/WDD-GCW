function query(){

    var aName = document.getElementById("cname");
    var aSurname= document.getElementById("surname");
    var aAddress = document.getElementById("address");
    var aQuery = document.getElementById("details");
    var aTheme = document.getElementById("theme");
    var validateEmail=document.myForm.mail.value;
        var at=validateEmail.lastIndexOf("@");
        var dot=validateEmail.lastIndexOf(".");

    if (aName.value.length == 0){
        alert("Name Required!");
    }

    if (aSurname.value.length == 0){
        alert("Surname Required!");
    }

    if (aAddress.value.length == 0){
        alert("Address Required!");
    }   

    if (at<1 || dot<at+2 || dot+2>=validateEmail.length){
        alert("Please enter a Valid e-mail address!");
    }

    if (aQuery.value.lenth == 0){
        alert("Query details are required!");
    }
    if (aTheme.value.length == ""){
        alert("Query theme must be selected!");
    }
    else{
        hideForm();
    }
}

function hideForm(){
    let hide = document.querySelector("#grid");
    hide.style.display = "none";
    
    var Element = document.createElement("form");
    Element.setAttribute("id","View");
    Element.setAttribute("action","mailto:shehanthi2001@gmail.com");
    Element.setAttribute("method","post");
    Element.setAttribute("enctype","text/plain");

    var sum = document.createElement("textarea");
    sum.setAttribute("id","summary");
    sum.setAttribute("name","Summary of the query:");

    var sumName = document.createTextNode(`\nName :${document.getElementById("cname").value}\n`);  
	sum.appendChild(sumName);

    var sumSur = document.createTextNode(`Surname:${document.getElementById("surname").value}\n`);
	sum.appendChild(sumSur);
	
    var sumAdd = document.createTextNode(`Address :${document.getElementById("address").value}\n`);
	sum.appendChild(sumAdd);

	var sumMail = document.createTextNode(`Email :${document.getElementById("mail").value}\n`);
	sum.appendChild(sumMail);
    
	var sumDetail = document.createTextNode(`Query Details :${document.getElementById("details").value}\n`);
	sum.appendChild(sumDetail);
	Element.appendChild(sum);
	
    var sumTheme = document.createTextNode(`Query Theme:${document.getElementById("theme").value}\n`);
    sum.appendChild(sumTheme);

    // Edit Button
	var eButton = document.createElement("BUTTON");   
	eButton.setAttribute('onclick','Edit();');
	eButton.innerHTML = "Edit"; 
	Element.appendChild(eButton);

	// Send Button
	var sButton = document.createElement("BUTTON");  		
	sButton.setAttribute('type','submit');
	sButton.innerHTML = "Send"; 
	Element.appendChild(sButton);	
	document.body.appendChild(Element);	
	
}

//onclick Edit button 
function Edit(){
	
	var hide = document.querySelector("#View");
	hide.remove();	
	
	var show = document.querySelector("#grid");
	show.style.display = 'block';
}	