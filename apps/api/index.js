import express from 'express';
import cors from 'cors'; // <-- Importas CORS

const app = express();
app.use(cors());
const PORT = 3000;
const HOST = '0.0.0.0'; 
app.get('/', (req, res) => {
  res.json({ message: "¡Hola desde la API de Recetitas!" });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor accesible en tu red local en el puerto ${PORT}`);
});