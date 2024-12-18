/**
 * Problem
 * - https://adventofcode.com/2024/day/3
 */

import { readFileStringSync } from "../lib/helpers.js";

const fileString = readFileStringSync(import.meta.url, 'input-data.txt');

const targetRegex = /mul\(\d{1,3}\,\d{1,3}\)/g;
const targetMatches = fileString.matchAll(targetRegex);
let total = 0;
const multiplyOperation= (mulStr: string): number => {
    const num1 = parseInt(mulStr.slice(mulStr.indexOf('(') + 1, mulStr.indexOf(',')));
    const num2 = parseInt(mulStr.slice(mulStr.indexOf(',') + 1, mulStr.indexOf(')')));
    return num1 * num2
}
if (targetMatches) for (const element of targetMatches) {
    total += multiplyOperation(element[0])
}
const solution1 = total;
console.log(solution1);
total = 0

const operatorRegex = /mul\(\d{1,3}\,\d{1,3}\)|do\(\)|don't\(\)/g;
const targetMatches2 = fileString.matchAll(operatorRegex);
let enableOperations = true;
if (targetMatches2) for (const element of targetMatches2) {
    let operation = element[0] === 'do()' || element[0] === "don't()" ? true : false;
    if (element[0] === 'do()') enableOperations = true;
    if (element[0] === "don't()") enableOperations = false;
    if (!operation && enableOperations) total += multiplyOperation(element[0]);
}
const solution2 = total;
console.log(solution2);

/** POST SOLUTION NOTES */

// can destructure capture groups with matchAll() so no need to slice entire match

// const targetRegex = /mul\((\d{1,3})\,(\d{1,3})\)/g;

// for (const [, x, y] of targetMatches) {
//     total += parseInt(x) * parseInt(x);
// }