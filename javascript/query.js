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

    if (query.value.lenth == 0){
        alert("Query details are required!")
    }
    else{
        hideform();
    }

    function hidefunction(){
        
    }
    var txt1 = document.createTextNode(`\nName :${document.getElementById("Fname").value}\n`);  
	ele.appendChild(txt1);
	var br = document.createElement("br");				
	ele.appendChild(br);
	Element.appendChild(ele);	
	
	var txt2 = document.createTextNode(`Email :${document.getElementById("Email").value}\n`);
	ele.appendChild(txt2);
	var br = document.createElement("br");				
	ele.appendChild(br);
	Element.appendChild(ele);	
	
	var txt3 = document.createTextNode(`Subject :${document.getElementById("Query").value}\n`);
	ele.appendChild(txt3);
	var br = document.createElement("br");				
	ele.appendChild(br);
	Element.appendChild(ele);	
	
	var txt4 = document.createTextNode(`Details :${document.getElementById("Details").value}\n`);
	ele.appendChild(txt4);
	Element.appendChild(ele);
	
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
//functioning Edit Button
function Edit(){
	
	var hide2 = document.querySelector("#ViewDetails");
	hide2.remove();	
	
	var show = document.querySelector("#formgrid");
	show.style.display = 'block';
	

   
   /* if(frm.customerName.value == "")
        alert("Name Required!")
    if (frm.lastName.value == "")
        alert("Surname Required!")
    if (frm.mailAddress.value == "")
        alert("E-mail Address is required!")
    if (frm.customerAddress.value == "")
        alert("Address  Required!")
}
function myfunction(){     
    document.getElementById("check").innerHTML = "Name: "+ document.getElementById("name").value+"\nSurname: "+document.getElementById("surname").value+"\nEmail Adress: "+document.getElementById("mail").value+"\nAdress: "+document.getElementById("address").value + "\n Details:" + document.getElementById("details").value}*/
        