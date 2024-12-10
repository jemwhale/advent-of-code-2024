import { readFileLinesSync } from "../lib/helpers.js";

const lines = readFileLinesSync(import.meta.url, 'input-data.txt');

console.log(lines);