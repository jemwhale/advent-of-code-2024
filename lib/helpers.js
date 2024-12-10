import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * Given a file path, return an array of strings for each new line in the file
 * @param {String} importMetaUrl - Should be `import.meta.url`
 * @param {String} file - Should be a `.txt` file - Filename of the file to be read from
 * @returns {Array}
 */
export const readFileLinesSync = (importMetaUrl, file) => {
  const __dirname = fileURLToPath(dirname(importMetaUrl));
  let filePath = `${__dirname}/${file}`;
  return readFileSync(filePath, 'UTF8').toString().split('\n');
}

/**
 * Given a file path, return the contents of the file as a string
 * @param {String} importMetaUrl - Should be `import.meta.url`
 * @param {String} file - Should be a `.txt` file - Filename of the file to be read from
 * @returns {String}
 */
export const readFileStringSync = (importMetaUrl, file) => {
  const __dirname = fileURLToPath(dirname(importMetaUrl));
  let filePath = `${__dirname}/${file}`;
  return readFileSync(filePath, 'UTF8').toString();
}