//Uppgift 6 och 7
document.addEventListener('DOMContentLoaded', () => {
    //Uppgift 7 - Steg 1
    // skapar "divbox" i html
    var divBox = document.createElement('div');
    
    //Uppgift 6 - Steg 1 och 2
    // använder fetch för att hämta data från servern
    fetch("http://localhost:3000/users")
    //Uppgift 6 - Steg 3 och 4
      .then(response => response.json())
      .then(users => {
        //Uppgift 7 - Steg 2
        // upprepar koden (till li) för varje element i listan, via map()
        users.map(user => {
            //Uppgift 7 - Steg 3
            // lägger till info för li-elementen
            let element = `<ul class="list">
                <div class="list__profile" style="background-color:${user.color}"></div>
                <li class="list__info name">Name: ${user.firstName} ${user.lastName}</li>
                <li class="list__info username">Username: ${user.username}</li>
                <li class="list__info id">ID: ${user.id}</li>
                <li class="list__info color">Color: ${user.color}</li>
                </ul>`;
            //Uppgift 7 - Steg 4
            //lägger till koden ovan i html
            divBox.insertAdjacentHTML('beforeend', element);
        });
        //placerar div:en på rätt ställe på sidan (i infoSection)
        var placeDiv = document.getElementById('infoSection');
        placeDiv.appendChild(divBox);
      })
      //fångar upp fel och skriver ut det i konsolen
      .catch(error => console.error("Error fetching data:", error));
  });