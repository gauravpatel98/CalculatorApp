function getValue() {
    let numbers = document.getElementsByTagName("numbers");
    numbers.addEventListener("click", ()=>{
        

    })
    let num0 = document.getElementById("input1").value;
    num1 = parseInt(num0)
    let num2 = document.getElementById("input2").value;
    num3 = parseInt(num2)

}
function addition() {
    getValue();
    let sum = 0;
    sum = num1 + num3;
    document.getElementById("result").innerHTML = sum;
}
function multiplication() {
    getValue()
    let multi = 1;
    multi = num1 * num3;
    document.getElementById("result").innerHTML = multi;
}
function subtraction() {
    getValue()
    let subtract = 0;
    subtract = num1 - num3;
    document.getElementById("result").innerHTML = subtract;
}
function division() {
    getValue()
    let division = 1;
    if (num3 > 0) {
        division = num1/num3;
    document.getElementById("result").innerHTML = division;
    }
    else if(num3 == 0){
    document.getElementById("result").innerHTML = "Infinity";
    }
    else{
        division = num1/num3;
    document.getElementById("result").innerHTML = division;
    }
}
