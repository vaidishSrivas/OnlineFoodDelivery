function check() {
    var $num = document.getElementById('pnrno').value;
    
    if(confirm("Is Your PNR number is "+$num)){
        alert("Thank You!!")
    }
    
}