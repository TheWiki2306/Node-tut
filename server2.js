import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, Name: 'john Doe', location: 'Lagos'},
    {id: 2, Name: 'jon Doe', location: 'Portugal'},
    {id: 3, Name: 'jane Doe', location: 'Texas'},
    {id: 4, Name: 'jinn Doe', location: 'Sango'},
    {id: 5, Name: 'jim Doe', location: 'Pretoria'}
]


//middleware - usually put in a file
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const jsonMiddleWare = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// Route Handler for GET /api/users 
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route Handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    
    if (user) {
        res.write(JSON.stringify(user));
        res.end();
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found'}));
        res.end(); 
    }

} 

// Route handler for POST /api/users
const createNewUser = (req, res) => {
    let body = '';

    // listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}


// not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found'}));
    res.end();
}

const server = createServer((req,res) => {
    logger(req, res, () => { 
        jsonMiddleWare(req, res, () => {
           if(req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9] +)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            } else if (req.url === '/api/users' && req.method === 'POST') {
                createNewUser(req, res);
            } else { 
                notFoundHandler(req, res);
            }
        });
    });

});

  
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);    
})