/**
 * Problem
 * - https://adventofcode.com/2024/day/1
 */

import { readFileLinesSync } from "../lib/helpers.js";

const lines = readFileLinesSync(import.meta.url, 'input-data.txt');
const list1 = [];
const list2 = [];

const splitLists = () => {
    lines.forEach((line) => {
        list1.push(parseInt(line.slice(0, 5)));
        list2.push(parseInt(line.slice(8)));
    })
}

splitLists();

const sortedList1 = list1.sort();
const sortedList2 = list2.sort();

const sumDiff = () => {
    let totalDiff = 0;
    for (let i = 0; i < sortedList1.length; i++) {
        const comparison = [sortedList1[i], sortedList2[i]];
        const largestNumIndex = sortedList1[i] >= sortedList2[i] ? 0 : 1;
        const smallesNumIndex = largestNumIndex === 1 ? 0 : 1;
        const diff = comparison[largestNumIndex] - comparison[smallesNumIndex];
        totalDiff = totalDiff + diff;
    }
    return totalDiff;
}

const solution1 = sumDiff();

console.log('Part 1 solution: ', solution1);

const sumSimilarity = () => {
    let totalSimilarity = 0;
    sortedList1.forEach((num1) => {
        const multiplier = sortedList2.filter((num2) => num2 === num1).length;
        totalSimilarity = totalSimilarity + (num1 * multiplier);
    })
    return totalSimilarity;
}

const solution2 = sumSimilarity();

console.log('Part 2 solution: ', solution2);