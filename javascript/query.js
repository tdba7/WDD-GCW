function query(){

    var Aname = document.getElementById("name");
    var Asurname= document.getElementById("surname");
    var Aaddress = document.getElementById("address");
    var Aquery = document.getElementById("details");
    var validateEmail=document.myForm.mail.value;
        var at=validateEmail.lastIndexOf("@");
        var dot=validateEmail.lastIndexOf(".");

    if (Aname.value.length == 0){
        alert("Name Required!");
    }

    if (Asurname.value.length == 0){
        alert("Surname Required!");
    }

    if (Aaddress.value.length == 0){
        alert("Address Required!");
    }   

    if (at<1 || dot<at+2 || dot+2>=validateEmail.length){
        alert("Please enter a Valid e-mail address");
    }

    if (Aquery.value.lenth == 0){
        alert("Query details are required!")
    }

    else{
        hideform();
    }
}
    function hideform(){
        let hide = document.querySelector("#grid")
        hide.style.display = "none";
    
    var Element = document.createElement("form");
    Element.setAttribute("id","View");
    Element.setAttribute("action","mailto:shehanthi2001@gmail.com")
    Element.setAttribute("method","post");
    Element.setAttribute("enctype","text/plain");

    var sum = document.createElement("textarea");
    sum.setAttribute("id","summary")
    sum.setAttribute("name","summary:");

    var sumName = document.createTextNode(`\nName :${document.getElementById("name").value}\n`);  
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
	
    // Edit Button
	var eButton = document.createElement("BUTTON");   
	eButton.setAttribute('class','Edit');
	eButton.setAttribute('onclick','Edit();')
	eButton.innerHTML = "Edit"; 
	Element.appendChild(eButton);

	// Send Button
	var sButton = document.createElement("BUTTON");   
	sButton.setAttribute('id','send');		
	sButton.setAttribute('type','submit');
	sButton.innerHTML = "Send"; 
	Element.appendChild(sButton);	
	document.body.appendChild(Element);	
	
}

function Edit(){
	
	var hide2 = document.querySelector("#View");
	hide2.remove();	
	
	var show = document.querySelector("#grid");
	show.style.display = 'block';
}	