
// soal no 2
let currentNumber = 1; // Mulai dari angka 1
function fizzBuzz() {
    let result = ""; // Ini untuk menyimpan hasil (Fizz, Buzz, atau angka biasa)
    if (currentNumber % 3 === 0) result += "Fizz"; 
    if (currentNumber % 5 === 0) result += "Buzz";   
    // Jika tidak ada hasil (bukan kelipatan 3 atau 5), tampilkan angka itu sendiri
    result = result || currentNumber;

    // Tampilkan hasil dalam div #output
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = result; 

    currentNumber++;

    // Reset jika sudah mencapai angka 15
    if (currentNumber > 15) {
        currentNumber = 1; //mulai dri 1
    } 
}

// Tambahkan event listener untuk tombol
document.querySelector('.btn-1').addEventListener('click', fizzBuzz);


let currentNumbers = 10 
function FB() {
    let result = "";
    if (currentNumbers % 2 === 0) result += "genap";
    result = result || currentNumbers

    const outputs = document.getElementById ('output2');
    outputs.innerHTML = result;

    currentNumbers ++;
    if (currentNumbers >= 40) {
        currentNumbers = 10;
    } else if (currentNumbers >= 20 && currentNumbers < 30) {
        currentNumbers = 30;
    }
} 

document.querySelector('.btn-2').addEventListener('click',FB);


// soal no 1 
function isPalindrome(n) {
    const cleanedStr = n.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }

  document.getElementById('textInput').addEventListener('input', function() {
    const inputText = this.value;
    const resultElement = document.getElementById('result');

    if (inputText.length === 0) {
      resultElement.textContent = "Result will appear here...";
    } else {
      const isPalindromeResult = isPalindrome(inputText);
      resultElement.textContent = isPalindromeResult ? "True - It's a palindrome!" : "False - Not a palindrome.";
      resultElement.style.color = isPalindromeResult ? "green" : "red";
    }
  });




  function sumArray(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }

  function calculateSum() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number); // Convert to array of numbers
    const result = sumArray(array);
    document.getElementById('sumResult').textContent = result;
  }

  // 3. Function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function checkPrime() {
    const input = Number(document.getElementById('primeInput').value);
    const result = isPrime(input);
    document.getElementById('primeResult').textContent = result;
  }

  // 5. Function to sort array without using sort()
  function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  function sortArrayHandler() {
    const input = document.getElementById('sortInput').value;
    const array = input.split(',').map(Number); // Convert to array of numbers
    const result = sortArray(array);
    document.getElementById('sortResult').textContent = `[${result}]`;
  }