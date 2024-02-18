var tableBodyFullList = document.getElementById("table-Body-Full-list")
var tableBodyDetails = document.getElementById("table-Body-Details")



function GetDonator(id) {
  let objDonator = JSON.parse(localStorage.getItem(`Receptor_${id}`))
  tableBodyDetails.innerHTML =
    `</tr>
        <td>${objDonator.name}</td>
        <td>${objDonator.Email}</td>
        <td>${objDonator.Phone}</td>
        <td>${objDonator.Adrress}</td>
        <td>Alguma descrição mais aprofundada</td>
      </td>
      </tr>`
}



Object.keys(localStorage).forEach(key => {
  if (key.includes('Receptor_')) {
    let objDonator = JSON.parse(localStorage.getItem(key))
    let newTR = document.createElement("tr")
    tableBodyFullList.appendChild(newTR)
    newTR.innerHTML =

      `<td>${objDonator.id}</td>
        <td>${objDonator.name}</td>
        <td>${objDonator.Email}</td>
        <td>${objDonator.Phone}</td>
        <td>${objDonator.Adrress}</td>
        <td><button type="button" class="btn btn-info" onclick="GetDonator(${objDonator.id})">Info</button></td>`
    console.log(key)
  }
});