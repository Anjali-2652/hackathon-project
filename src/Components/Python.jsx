const QuestionData = [
    
    {
      question: "Which of the following is a valid Python data type?",
      options: ["list", "tuple", "dictionary", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "How do you create a set in Python?",
      options: ["{1, 2, 3}", "set(1, 2, 3)", "[1, 2, 3]", "(1, 2, 3)"],
      answer: "{1, 2, 3}"
    },
    {
      question: "What is the output of `print(2 ** 3)`?",
      options: ["6", "8", "9", "Error"],
      answer: "8"
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "fun", "lambda"],
      answer: "def"
    },
    {
      question: "What does the `len()` function do?",
      options: [
        "Returns the length of a string",
        "Returns the number of items in an iterable",
        "Returns the size of an object",
        "Both A and B"
      ],
      answer: "Both A and B"
    },
    {
      question: "Which of the following is not a valid Python keyword?",
      options: ["pass", "assert", "eval", "switch"],
      answer: "switch"
    },
    {
      question: "How do you write a single-line comment in Python?",
      options: ["// comment", "# comment", "/* comment */", "None of the above"],
      answer: "# comment"
    },
    {
      question: "What is the output of `print(type(5.0))`?",
      options: ["int", "float", "double", "number"],
      answer: "float"
    },
    {
      question: "Which statement is used to handle exceptions in Python?",
      options: ["try", "catch", "except", "Both try and except"],
      answer: "Both try and except"
    },
    {
      question: "What will be the output of `print(bool(0))`?",
      options: ["True", "False", "Error", "None"],
      answer: "False"
    },
    {
      question: "What does the `is` keyword check?",
      options: [
        "If two variables have the same value",
        "If two variables are the same object in memory",
        "If two variables are of the same type",
        "None of the above"
      ],
      answer: "If two variables are the same object in memory"
    },
    {
      question: "What is the output of `[x for x in range(3)]`?",
      options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "Error"],
      answer: "[0, 1, 2]"
    },
    {
      question: "Which function is used to read input from the user?",
      options: ["get()", "scan()", "input()", "read()"],
      answer: "input()"
    },
    {
      question: "Which of these is used to create an immutable sequence?",
      options: ["list", "tuple", "set", "dict"],
      answer: "tuple"
    },
    {
      question: "What is the correct way to open a file for writing?",
      options: ["open('file.txt', 'r')", "open('file.txt', 'w')", "open('file.txt', 'x')", "open('file.txt', 'a')"],
      answer: "open('file.txt', 'w')"
    },
    {
      question: "Which of the following is not a valid Python loop?",
      options: ["for", "while", "do-while", "None of the above"],
      answer: "do-while"
    },
    {
      question: "What does the `break` statement do?",
      options: ["Exits the current loop", "Skips the current iteration", "Ends the program", "Pauses the program"],
      answer: "Exits the current loop"
    },
    {
      question: "How do you define a dictionary in Python?",
      options: ["{key: value}", "[key, value]", "(key, value)", "dict(key: value)"],
      answer: "{key: value}"
    },
    {
      question: "What is the output of `3 * 'abc'`?",
      options: ["abcabcabc", "abc3", "Error", "abc*3"],
      answer: "abcabcabc"
    },
    {
      question: "Which module is used to work with regular expressions in Python?",
      options: ["regex", "re", "regexp", "None of the above"],
      answer: "re"
    },
    {
      question: "What is the output of `print(bool([]))`?",
      options: ["True", "False", "Error", "None"],
      answer: "False"
    },
    {
      question: "How do you check the type of a variable in Python?",
      options: ["type(var)", "typeof(var)", "var.type()", "isinstance(var)"],
      answer: "type(var)"
    },
    {
      question: "Which method is used to remove an item from a list by value?",
      options: ["pop()", "remove()", "delete()", "discard()"],
      answer: "remove()"
    },
    {
      question: "What is the output of `print(5 // 2)`?",
      options: ["2.5", "2", "3", "Error"],
      answer: "2"
    },
    {
      question: "What does the `continue` statement do?",
      options: [
        "Exits the loop",
        "Skips the current iteration and continues with the next iteration",
        "Pauses the loop",
        "Restarts the loop"
      ],
      answer: "Skips the current iteration and continues with the next iteration"
    },
    {
      question: "What is the correct way to create a function in Python?",
      options: [
        "function func() {}",
        "def func() {}",
        "function func():",
        "def func():"
      ],
      answer: "def func():"
    },
    {
      question: "Which of these is used to import modules in Python?",
      options: ["load", "require", "import", "include"],
      answer: "import"
    },
    {
      question: "How do you create a lambda function in Python?",
      options: [
        "lambda x: x**2",
        "def lambda(x): x**2",
        "function(x) => x**2",
        "lambda(x) -> x**2"
      ],
      answer: "lambda x: x**2"
    },
    {
      question: "Which of these is not a valid list method?",
      options: ["append()", "extend()", "concat()", "insert()"],
      answer: "concat()"
    },
    {
      question: "How do you catch exceptions in Python?",
      options: ["catch", "try-except", "catch-finally", "try-finally"],
      answer: "try-except"
    },
    {
      question: "What does the `@staticmethod` decorator do?",
      options: [
        "Defines a method that belongs to the class and not the instance",
        "Defines a method that belongs to the instance only",
        "Makes a method private",
        "None of the above"
      ],
      answer: "Defines a method that belongs to the class and not the instance"
    },
    {
      question: "What is the correct way to check for an attribute in an object?",
      options: ["attr in obj", "hasattr(obj, 'attr')", "obj.contains(attr)", "obj.attr.exists()"],
      answer: "hasattr(obj, 'attr')"
    },
    {
      question: "What is the output of `print(2 < 3 < 4)`?",
      options: ["True", "False", "Error", "None"],
      answer: "True"
    },
    {
      question: "Which keyword is used to define a class in Python?",
      options: ["class", "Class", "defclass", "object"],
      answer: "class"
    },
    {
      question: "What does the `dir()` function do?",
      options: [
        "Lists all methods of an object",
        "Returns a string representation of an object",
        "Returns the directory path of a file",
        "None of the above"
      ],
      answer: "Lists all methods of an object"
    }
  
  



];

export default QuestionData;