function SaveOnDB() {
    let id = localStorage.length + 1
    let Name = document.getElementById('DonatorName').value
    let Phone = document.getElementById('DonatorPhone').value
    let Email = document.getElementById('DonatorEmail').value
    let Adrress = document.getElementById('DonatorAddress').value


    let DonatorOBJ = {
        "id": id,
        "name": Name,
        "Email": Email,
        "Phone": Phone,
        "Adrress": Adrress
    }

    localStorage.setItem(id, JSON.stringify(DonatorOBJ))
}

