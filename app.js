const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Ruta para obtener todos los elementos
app.get('/api/items', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos');
            return;
        }
        const items = JSON.parse(data);
        res.json(items);
    });
});

// Ruta para obtener un elemento por ID
app.get('/api/items/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos');
            return;
        }
        const items = JSON.parse(data);
        const item = items.find((element) => element.id === id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Elemento no encontrado');
        }
    });
});

// Ruta para crear un nuevo elemento
app.post('/api/items', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos');
            return;
        }
        const items = JSON.parse(data);

        // Encuentra el máximo ID actual
        let maxId = 0;
        items.forEach((item) => {
            if (parseInt(item.id) > maxId) {
                maxId = parseInt(item.id);
            }
        });

        const newItem = {
            id: (maxId + 1).toString(), // Calcula el próximo ID
            text: req.body.text
        };

        items.push(newItem);
        fs.writeFile('data.json', JSON.stringify(items, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error al escribir los datos');
                return;
            }
            res.json(newItem);
        });
    });
});

// Ruta para actualizar un elemento por ID
app.put('/api/items/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos');
            return;
        }
        let items = JSON.parse(data);
        const itemIndex = items.findIndex((element) => element.id === id);
        if (itemIndex !== -1) {
            items[itemIndex].text = req.body.text;
            fs.writeFile('data.json', JSON.stringify(items, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error al escribir los datos');
                    return;
                }
                res.json(items[itemIndex]);
            });
        } else {
            res.status(404).send('Elemento no encontrado');
        }
    });
});

// Ruta para eliminar un elemento por ID
app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos');
            return;
        }
        let items = JSON.parse(data);
        const itemIndex = items.findIndex((element) => element.id === id);
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1);
            fs.writeFile('data.json', JSON.stringify(items, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error al escribir los datos');
                    return;
                }
                res.status(204).send();
            });
        } else {
            res.status(404).send('Elemento no encontrado');
        }
    });
});

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
