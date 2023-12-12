{
    "editor.tabSize"; 2,
    "editor.formatOnSave"; true,
    "editor.wordWrap"; "wordWrapColumn",
    "html.format.wrapAttributes"; "force-aligned",
    "editor.minimap.maxColumn"; 80,
    "editor.defaultFormatter"; "esbenp.prettier-vscode"
  }

  // Steg 1 och 2

  const express = require('express'); 
  const server = express(); 
  
  
  // Steg 3
  server
    .use(express.json()) 
    .use(express.urlencoded({ extended: false })) 
    .use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });
  
 // Steg 4

 const PORT = 3000;
 server.listen(PORT, () => {
  console.log(`Jamming to https://localhost:${PORT}`);
});

// Steg 5

server.get('/',(req,res)=>{
  res.send('hello there');
});

server.get('/users', (req,res) => {

});
