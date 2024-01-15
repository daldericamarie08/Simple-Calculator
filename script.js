function calculate() {
    // Get input values
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  
    // Check if the input is valid
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    // Calculate results
    var sum = firstNumber + secondNumber;
    var difference = firstNumber - secondNumber;
    var product = firstNumber * secondNumber;
    var quotient = firstNumber / secondNumber;
  
    // Display results
    document.getElementById("sum").innerText = "Sum: " + sum;
    document.getElementById("difference").innerText = "Difference: " + difference;
    document.getElementById("product").innerText = "Product: " + product;
    document.getElementById("quotient").innerText = "Quotient: " + quotient;
  
    // Show the results container
    document.getElementById("resultsContainer").style.display = "block";
  }
  
  function clearResults() {
    // Clear input fields
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
  
    // Clear results
    document.getElementById("sum").innerText = "Sum: ";
    document.getElementById("difference").innerText = "Difference: ";
    document.getElementById("product").innerText = "Product: ";
    document.getElementById("quotient").innerText = "Quotient: ";
  
    // Hide the results container
    document.getElementById("resultsContainer").style.display = "none";
  }
  