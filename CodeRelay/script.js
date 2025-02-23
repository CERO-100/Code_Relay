const codeSnippets = {
    c: [
        `#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;
    printf("Fibonacci of %d: %d\\n", n, fibonacci(n));
    return 0;
}`,

        `#include <stdio.h>
#include <string.h>

int isPalindrome(char str[]) {
    int l = 0;
    int h = strlen(str) - 1;

    while (h > l) {
        if (str[l++] != str[h--]) {
            return 0;
        }
    }
    return 1;
}

int main() {
    char str[] = "madam";
    if (isPalindrome(str)) {
        printf("%s is a palindrome\\n", str);
    } else {
        printf("%s is not a palindrome\\n", str);
    }
    return 0;
}`,

        `#include <stdio.h>

int main() {
    int side = 5;
    int area = side * side;
    printf("Area of the square: %d\\n", area);
    return 0;
}`,

        `#include <stdio.h>

int main() {
    int length = 5;
    int width = 10;
    int area = length * width;
    printf("Area of the rectangle: %d\\n", area);
    return 0;
}`,

        `#include <stdio.h>

int main() {
    float base = 5;
    float height = 10;
    float area = 0.5 * base * height;
    printf("Area of the triangle: %.2f\\n", area);
    return 0;
}`
    ],

    cpp: [
        `#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;
    cout << "Fibonacci of " << n << ": " << fibonacci(n) << endl;
    return 0;
}`,

        `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string str) {
    int l = 0;
    int h = str.length() - 1;

    while (h > l) {
        if (str[l++] != str[h--]) {
            return false;
        }
    }
    return true;
}

int main() {
    string str = "madam";
    if (isPalindrome(str)) {
        cout << str << " is a palindrome" << endl;
    } else {
        cout << str << " is not a palindrome" << endl;
    }
    return 0;
}`,

        `#include <iostream>
using namespace std;

int main() {
    int side = 5;
    int area = side * side;
    cout << "Area of the square: " << area << endl;
    return 0;
}`,

        `#include <iostream>
using namespace std;

int main() {
    int length = 5;
    int width = 10;
    int area = length * width;
    cout << "Area of the rectangle: " << area << endl;
    return 0;
}`,

        `#include <iostream>
using namespace std;

int main() {
    float base = 5;
    float height = 10;
    float area = 0.5 * base * height;
    cout << "Area of the triangle: " << area << endl;
    return 0;
}`
    ],

    java: [
        `public class Main {
    public static int fibonacci(int n) {
        if (n <= 1)
            return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci of " + n + ": " + fibonacci(n));
    }
}`,

        `public class Main {
    public static boolean isPalindrome(String str) {
        int l = 0;
        int h = str.length() - 1;

        while (h > l) {
            if (str.charAt(l++) != str.charAt(h--)) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String str = "madam";
        if (isPalindrome(str)) {
            System.out.println(str + " is a palindrome");
        } else {
            System.out.println(str + " is not a palindrome");
        }
    }
}`,

        `public class Main {
    public static void main(String[] args) {
        int side = 5;
        int area = side * side;
        System.out.println("Area of the square: " + area);
    }
}`,

        `public class Main {
    public static void main(String[] args) {
        int length = 5;
        int width = 10;
        int area = length * width;
        System.out.println("Area of the rectangle: " + area);
    }
}`,

        `public class Main {
    public static void main(String[] args) {
        float base = 5;
        float height = 10;
        float area = 0.5f * base * height;
        System.out.println("Area of the triangle: " + area);
    }
}`
    ],

    python: [
        `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

n = 10
print(f"Fibonacci of {n}: {fibonacci(n)}")`,

        `def is_palindrome(s):
    return s == s[::-1]

s = "madam"
if is_palindrome(s):
    print(f"{s} is a palindrome")
else:
    print(f"{s} is not a palindrome")`,

        `side = 5
area = side * side
print(f"Area of the square: {area}")`,

        `length = 5
width = 10
area = length * width
print(f"Area of the rectangle: {area}")`,

        `base = 5
height = 10
area = 0.5 * base * height
print(f"Area of the triangle: {area}")`
    ]
};

const codeExplanations = {
    c: [
        `This C program defines a function called \`fibonacci\` that calculates the Fibonacci sequence using recursion. 
The \`main\` function calls this function with an example value of 10 and prints the result.`,

        `This C program checks if a given string is a palindrome. 
The \`main\` function calls the \`isPalindrome\` function with an example string "madam" and prints whether it is a palindrome or not.`,

        `This C program calculates the area of a square with a given side length and prints the result.`,

        `This C program calculates the area of a rectangle with given length and width, and prints the result.`,

        `This C program calculates the area of a triangle with a given base and height, and prints the result.`
    ],

    cpp: [
        `This C++ program defines a function called \`fibonacci\` that calculates the Fibonacci sequence using recursion. 
The \`main\` function calls this function with an example value of 10 and prints the result.`,

        `This C++ program checks if a given string is a palindrome. 
The \`main\` function calls the \`isPalindrome\` function with an example string "madam" and prints whether it is a palindrome or not.`,

        `This C++ program calculates the area of a square with a given side length and prints the result.`,

        `This C++ program calculates the area of a rectangle with given length and width, and prints the result.`,

        `This C++ program calculates the area of a triangle with a given base and height, and prints the result.`
    ],

    java: [
        `This Java program defines a method called \`fibonacci\` that calculates the Fibonacci sequence using recursion. 
The \`main\` method calls this function with an example value of 10 and prints the result.`,

        `This Java program checks if a given string is a palindrome. 
The \`main\` method calls the \`isPalindrome\` function with an example string "madam" and prints whether it is a palindrome or not.`,

        `This Java program calculates the area of a square with a given side length and prints the result.`,

        `This Java program calculates the area of a rectangle with given length and width, and prints the result.`,

        `This Java program calculates the area of a triangle with a given base and height, and prints the result.`
    ],

    python: [
        `This Python program defines a function called \`fibonacci\` that calculates the Fibonacci sequence using recursion. 
An example value of 10 is passed to this function and the result is printed.`,

        `This Python program checks if a given string is a palindrome. 
An example string "madam" is checked and it prints whether it is a palindrome or not.`,

        `This Python program calculates the area of a square with a given side length and prints the result.`,

        `This Python program calculates the area of a rectangle with given length and width, and prints the result.`,

        `This Python program calculates the area of a triangle with a given base and height, and prints the result.`
    ]
};

let selectedLanguage = '';
let editor;
let startTime;
let timerInterval;
let selectedTaskIndex;

function shuffleLines(code) {
    const lines = code.split('\n');
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    return lines.join('\n');
}

function selectLanguage(language) {
    selectedLanguage = language;
    document.getElementById('language-selection').style.display = 'none';

    selectedTaskIndex = Math.floor(Math.random() * codeSnippets[language].length);
    const selectedSnippet = codeSnippets[language][selectedTaskIndex];
    const shuffledSnippet = shuffleLines(selectedSnippet);

    document.getElementById('code-snippet').textContent = shuffledSnippet;
    document.getElementById('code-explanation').textContent = codeExplanations[language][selectedTaskIndex];
    document.getElementById('code-display').style.display = 'block';

    startTime = Date.now();
    startTimer();

    setTimeout(() => {
        document.getElementById('code-display').style.display = 'none';
        document.getElementById('code-editor').style.display = 'block';
        initializeEditor();
    }, 300000); // Display code for 5 minutes (300000 ms)
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.style.display = 'block';
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        timerElement.textContent = `Time elapsed: ${minutes} minutes ${seconds} seconds`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function initializeEditor() {
    editor = ace.edit("editor-container");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/" + selectedLanguage);
    editor.setOption("showPrintMargin", false);
    editor.setOption("tabSize", 4);
    editor.setOption("useSoftTabs", true);
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const resultMessage = document.getElementById('result-message');
    const outputMessage = document.getElementById('output-message');
    const timeTakenMessage = document.getElementById('time-taken');

    submitButton.addEventListener('click', () => {
        const userCode = editor.getValue().trim();
        const correctCode = codeSnippets[selectedLanguage][selectedTaskIndex].replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '').trim();

        const endTime = Date.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = (timeTaken % 60).toFixed(2);
        timeTakenMessage.textContent = `Time taken: ${minutes} minutes ${seconds} seconds`;

        stopTimer();

        if (userCode === correctCode) {
            resultMessage.textContent = '✅ Mission Successful';
            resultMessage.style.color = 'green';
            playSound('win.mp3');
        } else {
            resultMessage.textContent = '😢 Try Again';
            resultMessage.style.color = 'red';
            playSound('failure.mp3');
        }
    });
});

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}