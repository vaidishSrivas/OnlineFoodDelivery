function address(){
    var $add = document.getElementById('add').value;
    if(confirm("Do you wish to continue with this address "+$add)) {
        alert("Address has been updated");
    }
}


var $sum = 0, $tax = 0, $total = 0,$delivery = 20;
var $totalarray = [0,0,0,0,0,0,0,0,0,0,0];
let items= new Array(11);
function cal1() {
    var $amt = document.getElementById('quantity1').value;
    if($amt <= 0) {
        $totalarray[0] = 0; 
    }
    else {
        if(confirm("Sure to add "+$amt+" Biriyani to cart")) {
            let $temp = $amt + " x biriyani";
            items[0] =  $temp;
            alert("Item Added");
            $totalarray[0] = $amt * 150; 
        }
    }
}

function cal2() {
    var $amt = document.getElementById('quantity2').value;
    if($amt <= 0 ) {
        $totalarray[1] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" 7Up to cart")) {
            let $temp = $amt + " x 7up";
            items[1] = $temp;
            alert("Item Added");
            $totalarray[1] = $amt * 60;
        }
    }
}

function cal3() {
    var $amt = document.getElementById('quantity3').value;
    if($amt <= 0 ) {
        $totalarray[2] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Burger to cart")) {
            let $temp = $amt + " x burger";
            items[2] = $temp;
            alert("Item Added");
            $totalarray[2] = $amt * 120;
        }
    }
}

function cal4() {
    var $amt = document.getElementById('quantity4').value;
    if($amt <= 0 ) {
        $totalarray[3] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Dosa to cart")) {
            let $temp = $amt + " x dosa";
            items[3] = $temp;
            alert("Item Added");
            $totalarray[3] = $amt * 80;
        }
    }
}

function cal5() {
    var $amt = document.getElementById('quantity5').value;
    if($amt <= 0 ) {
        $totalarray[4] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Fried Chicken to cart")) {
            let $temp = $amt + " x Fried Chicken";
            items[4] = $temp;
            alert("Item Added");
            $totalarray[4] = $amt * 350;
        }
    }
}

function cal6() {
    var $amt = document.getElementById('quantity6').value;
    if($amt <= 0 ) {
        $totalarray[5] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Fried Rice to cart")) {
            let $temp = $amt + " x Fried Rice";
            items[5] = $temp;
            alert("Item Added");
            $totalarray[5] = $amt * 60;
        }
    }
}

function cal7() {
    var $amt = document.getElementById('quantity7').value;
    if($amt <= 0 ) {
        $totalarray[6] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Grill Chicken to cart")) {
            let $temp = $amt + " x Grill Chicken";
            items[6] = $temp;
            alert("Item Added");
            $totalarray[6] = $amt * 200;
        }
    }
}

function cal8() {
    var $amt = document.getElementById('quantity8').value;
    if($amt <= 0 ) {
        $totalarray[7] = 0;
    }
    else {
            let $temp = $amt + " x kabab";
            items[7] = $temp;
            alert("Item Added");
            $totalarray[7] = $amt * 150;

    }
}

function cal9() {
    var $amt = document.getElementById('quantity9').value;
    if($amt <= 0 ) {
        $totalarray[8] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Non-veg Thali to cart")) {
            let $temp = $amt + " x Non-veg Thali";
            items[8] = $temp;
            alert("Item Added");
            $totalarray[8] = $amt * 120;
        }
    }
}

function cal10() {
    var $amt = document.getElementById('quantity10').value;
    if($amt <= 0 ) {
        $totalarray[9] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Veg Thali to cart")) {
            let $temp = $amt + " x Veg Thali";
            items[9] = $temp;
            alert("Item Added");
            $totalarray[9] = $amt * 100;
        }
    }
}

function cal11() {
    var $amt = document.getElementById('quantity11').value;
    if($amt <= 0 ) {
        $totalarray[10] = 0;
    }
    else {
        if(confirm("Sure to add "+$amt+" Panner Tika to cart")) {
            let $temp = $amt + " x Panner Tika";
            items[10] = $temp;
            alert("Item Added");
            $totalarray[10] = $amt * 80;
        }
    }
}

function remove($i) {
    if($totalarray[$i - 1] > 0) {
        let $rem = "quantity" + $i;
        document.getElementById($rem).value = 0;
        $totalarray[$i - 1] = 0;
        items[$i - 1] = null;
        $sum = 0;
        $tax = 0;
        $total = 0;
        alert("item Successfully Removed");
    }
    else {
        alert("item not present");
    }
}

function cal() { 
    for(var i = 0; i < 11; i++) {
        $sum += $totalarray[i];
    }
    document.getElementById('item').innerHTML = items.join(' ');
    document.getElementById('totalamt').innerHTML = $sum;
    $tax = ($sum * 5) /100;
    document.getElementById('tax').innerHTML = $tax;
    $total = $sum + $tax + $delivery;
    document.getElementById('total').innerHTML = $total;
}

function bill() {

    var name = ["Ramesh -> 9679453103", "Raj -> 6248931203", "surendar -> 9175863120", "Mohan -> 9137506348", "Rajesh -> 6734250196", "Suresh -> 9786430264"];
    var $rand;
    $rand = Math.floor(Math.random() * 10000) + 1;

    document.write("<h1 style = text-align:center><u>Your Bill</u></h1>");
    document.write("<br>");
    document.write("<button onclick=window.print() style = float:right>Print Page</button>");
    
    let uniqueitems = [...new Set(items)];

    document.write("<h3>Your order is :- </h3><br>",uniqueitems);
    
    document.write("<br>");
    document.write("<h3>Your total amount is </h3>₹", $total);
    document.write("<br>");
    document.write("<h3>Your pin is </h3>",$rand);
    document.write("<br>");
    document.write("<h3>Your delivery boy and his number is </h3>",name[Math.floor(Math.random() * name.length)]);
    document.write("<br><br>");
    
    document.write("<hr>");

    document.write("<h2 style = text-align:center><u>Note</u></h2>");
    document.write("<br>");
    document.write("<ul><li>You have to share the pin with our delivery person to get your order.</li><li> This is cash on delivery, you have to pay the required amount to the delivery person.</li><li>Your order include ₹40 service and delivery charge.</li>");
    document.write("<h1 style = text-align:center>Thank You For Shopping !!</h1>");

}