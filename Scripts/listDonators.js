var selectedDonator = document.getElementById('receptores')
var infoDonatorDiv  = document.getElementById('show-donator-info')

selectedDonator.addEventListener("input", listDonator);

function listDonator() { // Implementação da função (10 pontos)
    let createChild = document.createElement("p")
    if(selectedDonator.value == "ong"){
      createChild.innerHTML = "ong"  
      infoDonatorDiv.appendChild(createChild)
    }
}

//apenas pra saber como a lógica vai funcionar. n terminei de implementar 
//pois n sei se vou usar um json externo ou db do navegador