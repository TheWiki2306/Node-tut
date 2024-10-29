import path from 'path';
import url from 'url';


const filePath = './dir1/dir2/text.text';

// basename
console.log(path.basename(filePath));

// dirname
console.log(path.dirname(filePath));

// extention name
console.log(path.extname(filePath));

// parse
console.log(path.parse(filePath));


 const __filename = url.fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

//  console.log(__filename, __dirname);
 

//  join - create a file path based on arguments pass in
const filepath2 = path.join(__dirname, 'dir1', 'dir2', 'text.text');
console.log(filepath2);

// Resolve
const filepath3 = path.resolve(__dirname, 'dir1', 'dir2', 'text.text')
console.log(filepath3);

