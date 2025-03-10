  
    document.getElementById("match-test").addEventListener("click", function() {   
        var yourName = document.getElementById("your-name").value;
        var crushName = document.getElementById("crush-name").value;
        if(yourName == "" || crushName == "") {
            alert("Please enter both names to test compatibility");
            return;
        }
        var result = Math.floor(Math.random() * 101);
        document.getElementById("result").innerHTML = result + "%"; 
        if(result > 80) {
            document.getElementById("result-text").innerHTML = "You are a perfect match!";
        } else if(result > 60) {    
            document.getElementById("result-text").innerHTML = "You are a good match!";
        } else if(result > 40) {                                                                
            document.getElementById("result-text").innerHTML = "You are an average match!";
        } else if(result > 20) {
            document.getElementById("result-text").innerHTML = "You are a bad match!";
        } else {
            document.getElementById("result-text").innerHTML = "You are a terrible match!";
        }   
    });