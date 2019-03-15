//Variables
//get tbody by id
  var tbody = document.getElementById("tbody");
  // create object XMLHttpRequest
  var xhttp = new XMLHttpRequest();
  //function get JSON file
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var listCustomers = JSON.parse(this.responseText);
      //stock board in var customers
      var customers = listCustomers.customers;
      //loop customers board for get object
      for (let i = 0; i < customers.length; i++) {
        var tr = document.createElement("tr");
          tbody.appendChild(tr);
        for(infos in customers[i])  {
          var td = document.createElement("td");
          tr.appendChild(td);
          //fill td balise with array values
          td.innerHTML = customers[i][infos];
        }
      }
    }
};

//Functions






//Code Logic
xhttp.open("GET", "customers.json", true);
xhttp.send();
