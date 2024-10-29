// import fs from 'fs';
import { writeFile } from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./text.text', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./text.text', 'utf8');
// console.log(data);

// readFile() - Promise
// fs.readFile('./text.text', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
    try{
        const data = await fs.readFile('./text.text', 'utf8');
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}



// WriteFile() - async/await
const WriteFile = async () => {
    try{
        await fs.writeFile('./text.text', 'Hello, i am writing to overide you');
        console.log('File written to...');
        
    } catch(error) {
        console.log(error);
        
    }
}

// appendFile - async/await
const appendFile = async () => {
    try {
        await fs.appendFile('./text.text', '\nThis line was appended');
        console.log('File appended to...');

    } catch (error) {
        console.log(error);
        
    }
}

// WriteFile();
// appendFile();
// readFile();
