let cart = [];

function addToCart(element, price, id, name) {
    let qty = parseInt(element.previousElementSibling.querySelectorAll(".quantityInput")[0].value);
    let index = cart.findIndex(function (elm) {
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
    let totalAmount = 0;
    for (let index = 0; index < cart.length; index++) {
        let element = cart[index];
        totalAmount += (element.value * element.qty);
    }
    document.getElementById('totalAmount').innerText = totalAmount;
}

function confirmOrder() {
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let x=document.buy.email.value;
    let atposition=x.indexOf("@");
    let dotposition=x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address ");
    }


    let orderText = ""
    for (let index = 0; index < cart.length; index++) {
        orderText += "Item Name : " + cart[index].name + "\n"
            
            + "Item Qty : " + cart[index].qty + "\n"
            + "Item Price : " + cart[index].value + "\n"
            + "Total Price : " + (cart[index].value * cart[index].qty) + "\n"
            + "-----------------------------------------\n";
    }
    let text = "Your order details \n"
        + "Name : " + name + "\n"
        + "Email : " + email + "\n"
        + "-----------------------------------------\n"
        + orderText

    alert(text);
}