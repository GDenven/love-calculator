//function that hold all the logic and generates random number that act as love number 

function loveCalculator() {
           
    let firstPersonName = document.getElementById("p1").value;
    let secondPersonName = document.getElementById("p2").value;
    let loveValue = Math.floor(Math.random() * 100) + 1;
    let displayResult = document.getElementById("result");
              
    if (firstPersonName == "" || secondPersonName == "") {
        alert("Write name into both box first");
      } else {
        displayResult.innerHTML = firstPersonName +" loves " + secondPersonName + " " + loveValue + "%";
        }
              
  }
  
  //get the current year and displaying it in the footer
  var currentYear = new Date().getFullYear();
  
  document.getElementById("current-year").innerHTML = currentYear;