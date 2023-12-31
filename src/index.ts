import * as http from 'http';
import * as os from 'os';

const port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT, 10) : 8080;


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        // Récupérer les headers de la requête
        const headers = req.headers;
        console.log(os.hostname());
        // Configurer les headers de la réponse
        res.setHeader('Content-Type', 'application/json');

        // Retourner les headers au format JSON
        res.end(JSON.stringify(headers));
    } else {
        // Retourner une réponse 404 si l'URL n'est pas correcte
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({}));
    }
});


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});