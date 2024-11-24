const QuestionData = [
    {
      question: "Which of the following is a valid way to declare a variable in JavaScript?",
      options: ["var x = 5;", "let x = 5;", "const x = 5;", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which of these is the correct syntax for an arrow function?",
      options: ["function => () {}", "() => {}", "() -> {}", "=> () {}"],
      answer: "() => {}"
    },
    {
      question: "What does `typeof null` return?",
      options: ["null", "undefined", "object", "number"],
      answer: "object"
    },
    {
      question: "Which of these is a falsy value in JavaScript?",
      options: ["0", "null", "undefined", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What will `console.log(2 + '2');` output?",
      options: ["4", "22", "Error", "undefined"],
      answer: "22"
    },
    {
      question: "How do you create an object in JavaScript?",
      options: ["let obj = {};", "let obj = Object();", "let obj = new Object();", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which method is used to add elements to the end of an array?",
      options: ["push()", "pop()", "unshift()", "concat()"],
      answer: "push()"
    },
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      options: [
        "`==` checks value only, `===` checks value and type",
        "`==` checks type only, `===` checks value and type",
        "`==` and `===` are identical",
        "`===` checks value only, `==` checks value and type"
      ],
      answer: "`==` checks value only, `===` checks value and type"
    },
    {
      question: "Which method is used to convert a JSON string into a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"],
      answer: "JSON.parse()"
    },
    {
      question: "What is the purpose of the `map()` method?",
      options: [
        "To iterate over an array and return a new array",
        "To find the index of an element",
        "To filter elements of an array",
        "To sort elements of an array"
      ],
      answer: "To iterate over an array and return a new array"
    },
    {
      question: "What is the output of `console.log(!!false);`?",
      options: ["true", "false", "undefined", "null"],
      answer: "false"
    },
    {
      question: "Which statement is correct about `let` and `var`?",
      options: [
        "`let` has block scope, `var` does not",
        "`var` has block scope, `let` does not",
        "`let` is function-scoped, `var` is block-scoped",
        "Both `let` and `var` are block-scoped"
      ],
      answer: "`let` has block scope, `var` does not"
    },
    {
      question: "What is the result of `typeof NaN`?",
      options: ["number", "NaN", "undefined", "object"],
      answer: "number"
    },
    {
      question: "How do you declare a default parameter in a function?",
      options: [
        "function func(x = 10) {}",
        "function func(x: 10) {}",
        "function func(x -> 10) {}",
        "function func(x defaults 10) {}"
      ],
      answer: "function func(x = 10) {}"
    },
    {
      question: "Which function can be used to delay code execution?",
      options: ["setTimeout()", "setInterval()", "clearTimeout()", "clearInterval()"],
      answer: "setTimeout()"
    },
    {
      question: "How do you find the length of a string in JavaScript?",
      options: ["string.size", "string.length", "string.count()", "string.size()"],
      answer: "string.length"
    },
    {
      question: "Which of these is not a valid JavaScript data type?",
      options: ["Number", "String", "Float", "Boolean"],
      answer: "Float"
    },
    {
      question: "What will `console.log([1, 2, 3] + [4, 5, 6]);` output?",
      options: ["[1, 2, 3, 4, 5, 6]", "Error", "1,2,34,5,6", "123456"],
      answer: "1,2,34,5,6"
    },
    {
      question: "Which of these is a correct way to create an immediately invoked function expression (IIFE)?",
      options: [
        "(function() {})();",
        "function()(){};",
        "(function() {}){};",
        "()function(){};"
      ],
      answer: "(function() {})();"
    },
    {
      question: "What will `console.log(typeof undefined);` output?",
      options: ["null", "undefined", "object", "string"],
      answer: "undefined"
    },
    {
      question: "Which method is used to check if an array includes a specific value?",
      options: ["includes()", "has()", "find()", "indexOf()"],
      answer: "includes()"
    },
    {
      question: "How do you create a promise in JavaScript?",
      options: [
        "new Promise(resolve, reject) {}",
        "Promise.create()",
        "Promise(() => {})",
        "new Promise((resolve, reject) => {})"
      ],
      answer: "new Promise((resolve, reject) => {})"
    },
    {
      question: "What does the `bind()` method do?",
      options: [
        "Executes a function immediately",
        "Creates a new function with a specified `this` value",
        "Links two objects together",
        "Prevents a function from being called"
      ],
      answer: "Creates a new function with a specified `this` value"
    },
    {
      question: "Which keyword is used to handle errors in JavaScript?",
      options: ["catch", "try", "throw", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the output of `console.log(2 ** 3);`?",
      options: ["6", "8", "9", "16"],
      answer: "8"
    },
    {
      question: "What will `console.log([] == []);` output?",
      options: ["true", "false", "undefined", "Error"],
      answer: "false"
    },
    {
      question: "Which method converts an array to a string?",
      options: ["toString()", "join()", "Both toString() and join()", "None of the above"],
      answer: "Both toString() and join()"
    },
    {
      question: "Which method is used to copy array elements?",
      options: ["copy()", "slice()", "map()", "splice()"],
      answer: "slice()"
    },
    {
      question: "What is the result of `0 || 1 && 2;`?",
      options: ["0", "1", "2", "Error"],
      answer: "2"
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["let", "const", "var", "static"],
      answer: "const"
    },
    {
      question: "Which of these is a valid way to define a class in JavaScript?",
      options: ["class MyClass {}", "function MyClass() {}", "let MyClass = class {}", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What does the `finally` block do?",
      options: [
        "Executes only when an error occurs",
        "Executes only if no error occurs",
        "Executes regardless of whether an error occurs or not",
        "None of the above"
      ],
      answer: "Executes regardless of whether an error occurs or not"
    }
  ];
  
export default QuestionData;