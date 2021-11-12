function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal < 1){
        alert("Enter a Positive Number");
        document.getElementById("principal").focus;
        document.getElementById("principal").style.color = "black";
        return false;
    }
    var int_rate = document.getElementById("rate").value;
    var no_of_years = document.getElementById("years").value;
    var interest = principal * int_rate * no_of_years / 100;
    var year = new Date().getFullYear() + parseInt(no_of_years);
    document.getElementById("result").innerHTML = 'If you deposit <mark>' +principal+'</mark>, <br/> at an interest rate of <mark>'+int_rate+'</mark>.<br/> You will receive an amount of <mark>'+interest+'</mark>,<br/>in the year <mark>'+year+'</mark>';
}

function updateRate(){
    int_rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = int_rate + '%';
}        
