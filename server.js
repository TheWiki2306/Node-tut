import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// console.log(__filename, __dirname);


const server = http.createServer(async(req, res) => {
    try {
        if (req.method === 'GET') {

            let filePath;

            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html')
            } else if(req.url === '/about') {
               filePath = path.join(__dirname, 'public', 'about.html')
            }else if(req.url === '/contacts'){
               filePath = path.join(__dirname, 'public', 'contacts.html')
            }else{
                throw new Error('Not found')
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else{
            throw new Error('Not allowed');
        }
    } catch (error) {
             res.writeHead(500, {'Content-Type':'text/plain'});
             res.end('server error');
    }
       

    // res.writeHead(404, {'content-type': 'application/json'});
    // res.end(JSON.stringify({ message: "server error"}));
})

server.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
    
})

