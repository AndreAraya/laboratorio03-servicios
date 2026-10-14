const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World desde Express - Actualizado desde Github');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});
