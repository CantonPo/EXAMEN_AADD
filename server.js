const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const PORT = 443; 

// Cargar los certificados
const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/dev9.cyberbunny.online/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/dev9.cyberbunny.online/fullchain.pem")
};

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor HTTPS con Express funcionando! ");
});

// Crear el servidor HTTPS
https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor HTTPS corriendo en https://dev9.cyberbunny.online`);
});