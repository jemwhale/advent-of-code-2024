/**
 * Problem
 * - https://adventofcode.com/2024/day/4
 */

import { readFileLinesSync } from "../lib/helpers.js";

const lines = readFileLinesSync(import.meta.url, 'input-data.txt');

const findWord = (wordStr: string, wordsearch: string[]): number => {
    let totalMatches = 0;
    const word = wordStr.toLowerCase();
    const wordLength = word.length;
    const limitX = wordsearch[0].length - wordLength;
    const limitY = wordsearch.length - wordLength;

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if (i <= limitX) {
                if (checkHorizontal(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (i >= (wordsearch[i].length - (limitX + 1))) {
                if (checkHorizontalBackwards(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (j <= limitY) {
                if (checkVertical(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (j >= (wordsearch.length - (limitY + 1))) {
                if (checkVerticalBackwards(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (i <= limitX && j <= limitY) {
                if (checkDiagonalDown(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (i >= (wordsearch[i].length - (limitX + 1)) && j <= limitY) {
                if (checkDiagonalDownBackwards(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (i <= limitX && j >= (wordsearch.length - (limitY + 1))) {
                if (checkDiagonalUp(word, wordLength, wordsearch, i, j)) totalMatches++
            }
            if (i >= (wordsearch[i].length - (limitX + 1)) && j >= (wordsearch.length - (limitY + 1))) {
                if (checkDiagonalUpBackwards(word, wordLength, wordsearch, i, j)) totalMatches++
            }
        }
    }

    return totalMatches;
}

const checkHorizontal = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x + i][y].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkHorizontalBackwards = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x - i][y].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkVertical = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x][y + i].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkVerticalBackwards = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x][y - i].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkDiagonalDown = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x + i][y + i].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkDiagonalDownBackwards = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x - i][y + i].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkDiagonalUp = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x + i][y - i].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const checkDiagonalUpBackwards = (word: string, wordLength: number, wordsearch: string[], x: number, y: number): boolean => {
    for (let i = 0; i < wordLength; i++) {
        const char = wordsearch[x - i][y - i].toLowerCase();
        if (char !== word[i]) return false;
    }

    return true;
}

const solution1 = findWord('xmas', lines);
console.log('Part 1 solution: ', solution1);