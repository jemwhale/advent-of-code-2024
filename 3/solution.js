import { readFileStringSync } from "../lib/helpers.js";

const fileString = readFileStringSync(import.meta.url, 'input-data.txt');

console.log(fileString);