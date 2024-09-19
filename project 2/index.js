// 1. Calculate Difference
function handleCalculateDifference() {
    const num1 = parseInt(document.getElementById('diffNum1').value);
    const num2 = parseInt(document.getElementById('diffNum2').value);
    const result = calculateDifference(num1, num2);
    document.getElementById('diffResult').innerText = `Result: ${result}`;
}

function calculateDifference(a, b) {
    return a - b;
}

// 2. Check if Odd
function handleIsOdd() {
    const num = parseInt(document.getElementById('oddNum').value);
    const result = isOdd(num);
    document.getElementById('oddResult').innerText = result ? "The number is odd" : "The number is not odd";
}

function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Find Minimum Number
function handleFindMin() {
    const array = document.getElementById('minArray').value.split(',').map(Number);
    const result = findMin(array);
    document.getElementById('minResult').innerText = `Minimum: ${result}`;
}

function findMin(arr) {
    return Math.min(...arr);
}

// 4. Filter Even Numbers
function handleFilterEvenNumbers() {
    const array = document.getElementById('evenArray').value.split(',').map(Number);
    const result = filterEvenNumbers(array);
    document.getElementById('evenResult').innerText = `Even Numbers: ${result.join(', ')}`;
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Sort Array Descending
function handleSortArray() {
    const array = document.getElementById('sortArray').value.split(',').map(Number);
    const result = sortArrayDescending(array);
    document.getElementById('sortResult').innerText = `Sorted Array: ${result.join(', ')}`;
}

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// 6. Lowercase First Letter
function handleLowercaseFirstLetter() {
    const str = document.getElementById('lowercaseString').value;
    const result = lowercaseFirstLetter(str);
    document.getElementById('lowercaseResult').innerText = `Result: ${result}`;
}

function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Count Vowels
function handleCountVowels() {
    const str = document.getElementById('vowelString').value;
    const result = countVowels(str);
    document.getElementById('vowelResult').innerText = `Vowels Count: ${result}`;
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

// 8. Find Average
function handleFindAverage() {
    const array = document.getElementById('averageArray').value.split(',').map(Number);
    const result = findAverage(array);
    document.getElementById('averageResult').innerText = `Average: ${result}`;
}

function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}


// 9. Life in Weeks
function calculateLifeInWeeks() {
    const age = parseInt(document.getElementById("ageInput").value);
    const weeksLeft = (90 - age) * 52; 
    document.getElementById("weeksResult").innerText = `You have approximately ${weeksLeft} weeks left in your life.`;
  }