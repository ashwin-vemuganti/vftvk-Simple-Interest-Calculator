function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal < 1){
        alert("Enter a Positive Number");
        document.getElementById("principal").focus;
        document.getElementById("principal").style.color = "red";
        return false;
    }
    var int_rate = document.getElementById("rate").value;
    var no_of_years = document.getElementById("years").value;
    var interest = principal * int_rate * no_of_years / 100;
    var year = new Date().getFullYear() + parseInt(no_of_years);
    document.getElementById("result").innerHTML = 'If you deposit ' +principal+', <br/> at an interest rate of '+int_rate+'.<br/> You will receive an amount of '+interest+',<br/>in the year '+year;
}

function updateRate(){
    int_rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = int_rate;
}        
