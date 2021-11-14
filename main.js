function getResult() {
    return document.getElementById("result-value").innerText;
}

function printResult(res) {
    document.getElementById("result-value").innerText=res;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(out){
    if(out == ""){
        document.getElementById("output-value").innerText=out;
    } else {
    document.getElementById("output-value").innerText=getFormattedNumber(out);}
}

function getFormattedNumber(num){
    let n = Number(num);
    let formattedValue = n.toLocaleString("en");
    return formattedValue;
}

function reverseFormatting(num){
    return Number (num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
Array.from(operator).forEach(e => e.addEventListener('click', function(){
    if(this.id=="clear-all"){
        printOutput("");
        printResult("");
    } else{
        let output = getOutput();
        let result = getResult();
        if(output!="") {
            output=reverseFormatting(output);
            result += output;
            if(this.id=="equals"){
                result = eval(result);
                printOutput(result);
                printResult("");
            } else{
                result += this.id;
                printResult(result);
                printOutput("");
            }
        }
    }
}));

const number = document.getElementsByClassName("number");
Array.from(number).forEach(e => e.addEventListener('click', function(){
    let output = reverseFormatting(getOutput());
    if(output!=NaN){
        output += this.id;
        printOutput(output);
    }
}));
