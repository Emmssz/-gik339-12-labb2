{
    "editor.tabSize"; 2,
    "editor.formatOnSave"; true,
    "editor.wordWrap"; "wordWrapColumn",
    "html.format.wrapAttributes"; "force-aligned",
    "editor.minimap.maxColumn"; 80,
    "editor.defaultFormatter"; "esbenp.prettier-vscode"
  }

  // Uppgift 2 - Steg 1 och 2
  //importerar npm paketet express via variabeln express 
  const express = require('express'); 
  //deklarerar en variabel för serverobjektet
  const server = express(); 
  
  
  // Uppgift 2 - Steg 3 (importerat från uppgiftsbeskrivningen)
  server
    .use(express.json()) 
    .use(express.urlencoded({ extended: false })) 
    .use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });
  
 // Uppgift 2 - Steg 4

 //tilldelar variabeln PORT värdet 3 000
 const PORT = 3000;
 //använder listen för att 
 server.listen(PORT, () => {
  console.log(`Jamming to https://localhost:${PORT}`);
});

// Uppgift 2 - Steg 5
server.get('/',(req, res)=>{
  res.send('hello there');
});

server.get('/users', (req,res) => {

});


// Uppgift 3
//importerar npm paketet sqlite3 via variabeln sqlite3
const sqlite3 = require ('sqlite3').verbose()

// Upggift 3 - Steg 1
//deklarerar variabeln db och kopplar den till filen med databasen
const db = new sqlite3.Database('./gik339-labb2.db');
const sql = 'SELECT * FROM users';
//Uppgift 3 - steg 2
// Funktion för att kunna fråga SQL
db.all(sql, (err, rows)=> {
  if(err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});