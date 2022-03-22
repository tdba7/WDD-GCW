//making GetAlert function
function query(frm){

    if(frm.customertName.value == "")
        alert("Name Required!")
    if (frm.lastName.value == "")
        alert("Surname Required!")
    if (frm.mailAddress.value == "")
        alert("E-mail Address is required!")
    if (frm.customerAddress.value == "")
        alert("Address  Required!")
}
function myfunction(){     
    document.getElementById("check").innerHTML = "Name: "+ document.getElementById("name").value+"\nSurname: "+document.getElementById("surname").value+"\nEmail Adress: "+document.getElementById("mail").value+"\nAdress: "+document.getElementById("address").value + "\n Details:" + document.getElementById("details").value}

