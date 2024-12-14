/**
 * Problem
 * - https://adventofcode.com/2024/day/2
 */

import { readFileLinesSync } from "../lib/helpers.js";

const lines = readFileLinesSync(import.meta.url, 'input-data.txt');

const isSafe = (report: number[]): boolean => {
    const slicedReport = report.slice(0, -1);

    const isIncreasing = slicedReport.every((level, index) => {
        return level < report[index + 1];
    })
    
    const isDecreasing = slicedReport.every((level, index) => {
        return level > report[index + 1];
    })
    
    const isGradual = slicedReport.every((level, index) => {
        const diff = Math.abs(level - report[index + 1])
        return diff >= 1 && diff <= 3;
    })

    return (isIncreasing || isDecreasing) && isGradual;
}

const reports = lines.map((report) => {
    return report.split(' ').map((level) => parseInt(level));
});

const solution1: number = reports.filter((report) => {
  return isSafe(report)
}).length;

console.log('Part 1 solution: ', solution1);

const isSafeTolerance = (report: number[]): boolean => {

    if (isSafe(report)) return true

    let inTolerance = false

    for (let i = 0; i < report.length; i++) {
        let splicedReport = [...report];
        splicedReport.splice(i, 1);
        let safeReport = isSafe(splicedReport);
        if (safeReport) {
            inTolerance = true;
            break;
        }
    }

    return inTolerance
}

const solution2: number = reports.filter((report) => {
    return isSafeTolerance(report)
  }).length;
  
  console.log('Part 2 solution: ', solution2);