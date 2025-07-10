import path from 'path';

const filePath = './dir1/dir2/test.txt';

console.log(path.basename(filePath)) //returns the root.
console.log(path.basename(filePath)) //returns current directory name.
console.log(path.basename(filePath)) //returns the file extension.
console.log(path.basename(filePath)) //returns an object breaking a full file path into its components.
