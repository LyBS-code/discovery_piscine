setInterval(function(){alert("Please, use me...")}, 30000);


document.getElementById("Tryme").addEventListener("click", 
    function() {
        let n1 = Number(document.getElementById("num1").value);
        let op = document.getElementById("op-select").value;
        let n2 = Number(document.getElementById("num2").value);

        if (n1<0 || n2<0) {
            alert("Error :(")
        }

        else {

            if (op == "+") {
                alert(n1 + n2);
                console.log(n1 + n2);
            };
    
            if (op == "-") {
                alert(n1 - n2);
                console.log(n1 - n2);
            };
    
            if (op == "*") {
                alert(n1 * n2);
                console.log(n1 * n2);
            };
    
            if (op == "/") {
    
                if(n2 == 0) {
                    alert("It’s over 9000!")
                    console.log("It’s over 9000!")
                }
    
                else {
                    alert(n1 / n2);
                    console.log(n1 / n2);
                };
            };
    
            if (op == "%") {
    
                if(n2 == 0) {
                    alert("It’s over 9000!")
                    console.log("It’s over 9000!")
                }
    
                else {
                    alert(n1 / n2);
                    console.log(n1 / n2);
                };
            };
        }
    }
  );