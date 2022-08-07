let items = [];
function cal1() {
    var $a = document.getElementById('quantity1').value;
    if($a <= 0) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x biriyani";
        items.push($temp);
        return($a * 150);
    }
}

function cal2() {
    var $a = document.getElementById('quantity2').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x 7up";
        items.push($temp);
        return($a * 60);
    }
}

function cal3() {
    var $a = document.getElementById('quantity3').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x burger";
        items.push($temp);
        return($a * 120);
    }
}

function cal4() {
    var $a = document.getElementById('quantity4').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x dosa";
        items.push($temp);
        return($a * 80);
    }
}

function cal5() {
    var $a = document.getElementById('quantity5').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x Fried Chicken";
        items.push($temp);
        return($a * 350);
    }
}

function cal6() {
    var $a = document.getElementById('quantity6').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x Fried Rice";
        items.push($temp);
        return($a * 60);
    }
}

function cal7() {
    var $a = document.getElementById('quantity7').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x Grill Chicken";
        items.push($temp);
        return($a * 200);
    }
}

function cal8() {
    var $a = document.getElementById('quantity8').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x kabab";
        items.push($temp);
        return($a * 150);
    }
}

function cal9() {
    var $a = document.getElementById('quantity9').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x Non-veg Thali";
        items.push($temp);
        return($a * 120);
    }
}

function cal10() {
    var $a = document.getElementById('quantity10').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x Veg Thali";
        items.push($temp);
        return($a * 100);
    }
}

function cal11() {
    var $a = document.getElementById('quantity11').value;
    if($a <= 0 ) {
        return($a * 0);
    }
    else {
        let $temp = $a + " x Panner Tika";
        items.push($temp);
        return($a * 80);
    }
}

function result() {
    var name = ["Ramesh -> 9679453103", "Raj -> 6248931203", "surendar -> 9175863120", "Mohan -> 9137506348", "Rajesh -> 6734250196", "Suresh -> 9786430264"];
    var $res = 0;
    var $rand;
    $res = cal1() + cal2() + cal3() + cal4() + cal5() + cal6() + cal7() + cal8() + cal9() + cal10() + cal11() + 40;
    $rand = Math.floor(Math.random() * 10000) + 1;

    document.write("<h1 style = text-align:center><u>Your Bill</u></h1>");
    document.write("<br>");
    document.write("<button onclick=window.print() style = float:right>Print Page</button>");
    
    let uniqueitems = [...new Set(items)];

    document.write("<h3>Your order is :- </h3><br>",uniqueitems);
    
    document.write("<br>");
    document.write("<h3>Your total amount is </h3>₹", $res);
    document.write("<br>");
    document.write("<h3>Your pin is </h3>",$rand);
    document.write("<br>");
    document.write("<h3>Your delivery boy and his number is </h3>",name[Math.floor(Math.random() * name.length)]);
    document.write("<br><br>");
    
    document.write("<hr>");

    document.write("<h2 style = text-align:center><u>Note</u></h2>");
    document.write("<br>");
    document.write("<ul><li>You have to share the pin with our delivery person to get your order.</li><li> This is cash on delivery, you have to pay the required amount to the delivery person.</li><li>Your order include ₹40 service and delivery charge.</li>");
    document.write("<h1 style = text-align:center>Thank You For Shopping !!</h1>")
}