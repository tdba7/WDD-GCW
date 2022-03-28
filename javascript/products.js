var cart = [];

function addToCart(element, price, id, name) {
    var qty = parseInt(element.previousElementSibling.querySelectorAll(".quantityInput")[0].value);
    var index = cart.findIndex(function (elm) {
        return elm.id == id
    });
    if (index > -1) {
        cart[index].qty = qty;
        cart[index].value = price;
    } else {
        cart.push({
            id: id,
            name: name,
            value: price,
            qty: qty
        })
    }
    var totalAmount = 0;
    for (let index = 0; index < cart.length; index++) {
        var element = cart[index];
        totalAmount += (element.value * element.qty);
    }
    document.getElementById('totalAmount').innerText = totalAmount;
}

function confirmOrder() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var x=document.buy.email.value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address ");
    }


    var orderText = ""
    for (let index = 0; index < cart.length; index++) {
        orderText += "Movie Name : " + cart[index].name + "\n"
            
            + "Movie Qty : " + cart[index].qty + "\n"
            + "Movie Price : " + cart[index].value + "\n"
            + "Total Price : " + (cart[index].value * cart[index].qty) + "\n"
            + "-----------------------------------------\n";
    }
    var text = "Your order details \n"
        + "Name : " + name + "\n"
        + "Email : " + email + "\n"
        + "-----------------------------------------\n"
        + orderText

    alert(text);
}