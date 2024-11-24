const QuestionData = [

    
    {
      question: "Which of the following is not a C++ keyword?",
      options: ["class", "virtual", "include", "private"],
      answer: "include"
    },
    {
      question: "Which operator is used to define a pointer in C++?",
      options: ["*", "&", "->", "."],
      answer: "*"
    },
    {
      question: "What is the correct syntax to declare a class in C++?",
      options: ["class MyClass {}", "class MyClass() {}", "class MyClass;", "MyClass class {}"],
      answer: "class MyClass {}"
    },
    {
      question: "Which feature of OOP allows multiple functions with the same name but different arguments?",
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Overloading"],
      answer: "Overloading"
    },
    {
      question: "What is the output of `cout << 10/3;`?",
      options: ["3", "3.33", "10/3", "Error"],
      answer: "3"
    },
    {
      question: "Which of the following is used to allocate memory dynamically in C++?",
      options: ["malloc()", "new", "alloc()", "memory()"],
      answer: "new"
    },
    {
      question: "What will happen if a base class constructor requires arguments, and the derived class object is created?",
      options: ["Compiler error", "Derived class must initialize the base class", "Default constructor is called", "None of these"],
      answer: "Derived class must initialize the base class"
    },
    {
      question: "What is the correct way to make a function inline in C++?",
      options: ["inline int func()", "int inline func()", "int func() inline", "All of the above"],
      answer: "inline int func()"
    },
    {
      question: "Which operator is overloaded for object dereferencing in C++?",
      options: ["*", "&", "->", "."],
      answer: "->"
    },
    {
      question: "What does the 'this' pointer point to?",
      options: ["The function arguments", "The object calling the function", "The parent class", "None of these"],
      answer: "The object calling the function"
    },
    {
      question: "Which of the following is not a feature of object-oriented programming?",
      options: ["Encapsulation", "Inheritance", "Preprocessor", "Polymorphism"],
      answer: "Preprocessor"
    },
    {
      question: "Which C++ header file is used for input and output operations?",
      options: ["<stdio.h>", "<iostream>", "<string>", "<fstream>"],
      answer: "<iostream>"
    },
    {
      question: "How do you access a private member of a class?",
      options: ["Directly using the object", "Using a friend function", "Using a pointer", "It cannot be accessed"],
      answer: "Using a friend function"
    },
    {
      question: "Which of the following concepts means wrapping up data and functions into a single unit?",
      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      answer: "Encapsulation"
    },
    {
      question: "What is the purpose of a destructor in C++?",
      options: ["To allocate resources", "To initialize objects", "To destroy objects", "To free memory"],
      answer: "To free memory"
    },
    {
      question: "Which keyword is used to prevent a class from being inherited?",
      options: ["private", "static", "final", "sealed"],
      answer: "final"
    },
    {
      question: "What is the use of the `virtual` keyword in C++?",
      options: ["To declare an abstract class", "To achieve function overriding", "To implement multiple inheritance", "To prevent inheritance"],
      answer: "To achieve function overriding"
    },
    {
      question: "What is the return type of a constructor in C++?",
      options: ["int", "void", "class type", "Constructors do not have a return type"],
      answer: "Constructors do not have a return type"
    },
    {
      question: "Which of the following can be inherited from a base class?",
      options: ["Private members", "Protected members", "Constructors", "Destructors"],
      answer: "Protected members"
    },
    {
      question: "Which of the following best describes abstraction?",
      options: ["Hiding data implementation", "Hiding data members", "Hiding classes", "Hiding function prototypes"],
      answer: "Hiding data implementation"
    },
    {
      question: "What is the result of `10 % 3` in C++?",
      options: ["1", "3", "10", "0"],
      answer: "1"
    },
    {
      question: "Which of the following is not a type of inheritance in C++?",
      options: ["Single", "Multiple", "Multilevel", "Hybrid"],
      answer: "Hybrid"
    },
    {
      question: "How do you create an array in C++?",
      options: ["array[];", "int arr[];", "array arr[10];", "int arr[10];"],
      answer: "int arr[10];"
    },
    {
      question: "What is the use of the `friend` keyword?",
      options: ["To access private data", "To inherit members", "To define a special type", "To create a friend class"],
      answer: "To access private data"
    },
    {
      question: "What does the `std` namespace provide?",
      options: ["String functions", "Standard functions", "All standard C++ libraries", "Input/Output operators"],
      answer: "All standard C++ libraries"
    },
    {
      question: "Which function is used to open a file in C++?",
      options: ["open()", "fstream::open()", "ifstream::open()", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which operator is used to deallocate memory in C++?",
      options: ["delete", "free", "delete[]", "Both delete and delete[]"],
      answer: "Both delete and delete[]"
    },
    {
      question: "What will happen if a class has no constructor?",
      options: ["Compile error", "Runtime error", "A default constructor is provided by the compiler", "The object cannot be created"],
      answer: "A default constructor is provided by the compiler"
    },
    {
      question: "Which feature allows reusing code in C++?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Friendship"],
      answer: "Inheritance"
    },
    {
      question: "What is the output of `cout << sizeof(double);`?",
      options: ["2", "4", "8", "Depends on the platform"],
      answer: "8"
    },
    {
      question: "How can you stop inheritance in C++?",
      options: ["Using final keyword", "Using private inheritance", "Using static keyword", "None of these"],
      answer: "Using final keyword"
    },
    {
      question: "What is the output of `cout << (4 > 2 ? \"Yes\" : \"No\");`?",
      options: ["Yes", "No", "4", "2"],
      answer: "Yes"
    },
    {
      question: "Which operator is overloaded for object comparison?",
      options: ["==", "<", ">", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the use of a virtual destructor?",
      options: ["To delete derived class objects", "To override constructors", "To access private members", "None of these"],
      answer: "To delete derived class objects"
    },
    {
      question: "Which keyword is used to handle exceptions in C++?",
      options: ["try", "throw", "catch", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which of the following is a valid C++ comment?",
      options: ["#comment", "//comment", "/*comment*/", "Both // and /* */"],
      answer: "Both // and /* */"
    },
    {
      question: "What is the default access specifier for class members in C++?",
      options: ["private", "public", "protected", "None of these"],
      answer: "private"
    },
    {
      question: "What is a pure virtual function in C++?",
      options: ["A function with no implementation", "A function with implementation", "A friend function", "A static function"],
      answer: "A function with no implementation"
    },
    {
      question: "How do you define a constant in C++?",
      options: ["Using const", "Using define", "Both const and define", "None of these"],
      answer: "Both const and define"
    }
  
  


];

export default QuestionData;