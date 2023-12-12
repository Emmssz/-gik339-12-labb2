{
    "editor.tabSize"; 2,
    "editor.formatOnSave"; true,
    "editor.wordWrap"; "wordWrapColumn",
    "html.format.wrapAttributes"; "force-aligned",
    "editor.minimap.maxColumn"; 80,
    "editor.defaultFormatter"; "esbenp.prettier-vscode"
  }

  const express = require('express'); 
  const server = express(); 
  const PORT = 3000; 
  
 
  server
    .use(express.json()) 
    .use(express.urlencoded({ extended: false })) 
    .use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });
  
 
  server.get('/users', (req, res) => {
   
  });
  

  server.listen(PORT, () => {
    console.log(`Jamming to https://localhost:${PORT}`);
    
  });
  