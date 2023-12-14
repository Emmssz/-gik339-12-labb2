//Uppgift 6
// deklarerar variabeln request och sparar ner länken till servern
const request = new Request('http://localhost:3000/users');

//funktion för att hämta data
async function fetchData(){
    const response = await fetch(request);
}