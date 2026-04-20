import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Configuración
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    // Lista de ISBNs verificados
    const librosParaMostrar = [
        "9780156013925", // El Principito
        "9780618260300", // El Hobbit
        "0451524934",    // 1984 (versión corta)
        "9780307474728"  // Cien años de soledad
    ];

    const isbnAleatorio = librosParaMostrar[Math.floor(Math.random() * librosParaMostrar.length)];
    
    try {
        const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbnAleatorio}&format=json&jscmd=data`);
        
        // El truco está aquí:
        const bookData = response.data[`ISBN:${isbnAleatorio}`];

        // SI NO HAY DATOS, lanzamos un error controlado para que lo atrape el catch
        if (!bookData) {
            throw new Error("Libro no encontrado en la base de datos");
        }

        res.render("index.ejs", {
            title: bookData.title,
            author: bookData.authors ? bookData.authors[0].name : "Autor Desconocido",
            cover: bookData.cover ? bookData.cover.large : null,
            pages: bookData.number_of_pages || "N/A"
        });

    } catch (error) {
        console.log("Aviso: Se usó el respaldo porque falló el ISBN:", isbnAleatorio);
        
        // RESPALDO: Para que el usuario nunca vea una pantalla de error
        res.render("index.ejs", {
            title: "Libro de Respaldo: Rayuela",
            author: "Julio Cortázar",
            cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
            pages: "600"
        });
    }
});
app.listen(port, () => {
    console.log(`Servidor de libros corriendo en http://localhost:${port}`);
});