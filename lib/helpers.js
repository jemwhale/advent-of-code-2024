import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const readFileLinesSync = (importMetaUrl, file) => {
  const __dirname = fileURLToPath(dirname(importMetaUrl));
  let filePath = `${__dirname}/${file}`;
  return readFileSync(filePath, 'UTF8').toString().split('\n');
}

export const readFileStringSync = (importMetaUrl, file) => {
  const __dirname = fileURLToPath(dirname(importMetaUrl));
  let filePath = `${__dirname}/${file}`;
  return readFileSync(filePath, 'UTF8').toString();
}