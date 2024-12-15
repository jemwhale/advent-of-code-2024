/**
 * Problem
 * - https://adventofcode.com/2024/day/3
 */

import { readFileStringSync } from "../lib/helpers.js";

const fileString = readFileStringSync(import.meta.url, 'input-data.txt');

const targetRegex = /mul\(\d{1,3}\,\d{1,3}\)/g;
const targetMatches = fileString.matchAll(targetRegex);
let total = 0;
if (targetMatches) for (const element of targetMatches) {
    const num1 = parseInt(element[0].slice(element[0].indexOf('(') + 1, element[0].indexOf(',')));
    const num2 = parseInt(element[0].slice(element[0].indexOf(',') + 1, element[0].indexOf(')')));
    total += num1 * num2
}
const solution1 = total;
console.log(solution1);