function level_10() {
    document.getElementById("l10").innerHTML = "Hello, world!";
}


function level_11() {
    if(!(document.getElementById("l11").style.backgroundColor == "yellow")){
        document.getElementById("l11").style.backgroundColor = "yellow";
        return;
    }
    document.getElementById("l11").style.backgroundColor = "";
}

function level_13() {
    rows = document.getElementById("l13_input").value;
    output = ""
    for(let j = 1; j <= rows; j++){
        for(let i = 0; i < j; i++){
            output += "*";
        }
        output += "<br>";
    }
    document.getElementById("l13_output").innerHTML = output;
}
