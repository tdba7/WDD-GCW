function query(){

    var Aname = document.getElementById("name");
    var Asurname= document.getElementById("surname");
    var Aaddress = document.getElementById("address");
    var Amail = document.getElementById("mail");
    var Aquery = document.getElementById("details");

    if (Aname.value.length == 0){
        alert("Name Required!");
    }
    if (Asurname.value.length == 0){
        alert("Surname Required!");
    }

    if (Aaddress.value.length == 0){
        alert("Address Required!");
    }

    if (Amail.value.length == 0){
        alert("Email Required!");
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
	var br = document.createElement("br");				
	sum.appendChild(br);
	Element.appendChild(sum);	

    var sumSur = document.createTextNode(`Surname:${document.getElementById("surname").value}\n`);
	sum.appendChild(sumSur);
	var br = document.createElement("br");				
	sum.appendChild(br);
	Element.appendChild(sum);	
	
    var sumAdd = document.createTextNode(`Address :${document.getElementById("address").value}\n`);
	sum.appendChild(sumAdd);
	var br = document.createElement("br");				
	sum.appendChild(br);
	Element.appendChild(sum);	

	var sumMail = document.createTextNode(`Email :${document.getElementById("mail").value}\n`);
	sum.appendChild(sumMail);
	var br = document.createElement("br");				
	sum.appendChild(br);
	Element.appendChild(sum);	
	
	
	var sumDetail = document.createTextNode(`Query Details :${document.getElementById("details").value}\n`);
	sum.appendChild(sumDetail);
	Element.appendChild(sum);
	
	var btn1 = document.createElement("BUTTON");   // Creates a Edit Button
	btn1.setAttribute('class','Edit');
	btn1.setAttribute('onclick','Edit();')
	btn1.innerHTML = "Edit"; 
	Element.appendChild(btn1);
	
	var btn2 = document.createElement("BUTTON");   // Creates a Send Button
	btn2.setAttribute('id','send');		
	btn2.setAttribute('type','submit');
	btn2.innerHTML = "Send"; 
	Element.appendChild(btn2);	
	document.body.appendChild(Element);	
	
}
//Edit Button
function Edit(){
	
	var hide2 = document.querySelector("#View");
	hide2.remove();	
	
	var show = document.querySelector("#grid");
	show.style.display = 'block';
}	