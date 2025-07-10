import url from 'url';

const urlString = 'https://www.google.ca/search?q=hello+world'; //Sample url.

const urlObj = new URL(urlString); //Gets url object.
console.log(urlObj); //Prints url object.
console.log(url.format(urlObj)); //Prints to console as url string.
console.log(import.meta.url); //Prints filepath of current file.
console.log(url.pathToFileURL(import.meta.url)); //prints object of file url.
console.log(urlObj.search); //prints string query.
const params = new URLSearchParams(urlObj.search); //Create a URLSearchParams object to work with the query parameters.
console.log(params.get('q')); //get the value of the 'q' parameter.
params.append('limit', '5'); //add a new parameter named limit.
params.delete('limit'); //delete the new parameter.
