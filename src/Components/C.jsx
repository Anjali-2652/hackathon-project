const QuestionData = [

    {
  question: "Which of the following is a valid C variable name?",
  options: ["2variable", "variable_name", "variable-name", "variable name"],
  answer: "variable_name"
},
{
  question: "Which header file is required for using `printf` and `scanf` functions?",
  options: ["<conio.h>", "<string.h>", "<stdio.h>", "<stdlib.h>"],
  answer: "<stdio.h>"
},
{
  question: "What is the output of `printf(\"%d\", 5+3*2);`?",
  options: ["16", "11", "10", "13"],
  answer: "11"
},
{
  question: "Which operator is used to access the value at an address in C?",
  options: ["*", "&", "->", "."],
  answer: "*"
},
{
  question: "Which function is used to allocate memory dynamically?",
  options: ["malloc()", "calloc()", "free()", "Both malloc() and calloc()"],
  answer: "Both malloc() and calloc()"
},
{
  question: "What will be the output of `sizeof(char)`?",
  options: ["1", "2", "4", "8"],
  answer: "1"
},
{
  question: "Which of the following is not a keyword in C?",
  options: ["typedef", "volatile", "inline", "function"],
  answer: "function"
},
{
  question: "What is the default value of a local variable in C?",
  options: ["0", "Garbage value", "NULL", "It depends on the data type"],
  answer: "Garbage value"
},
{
  question: "Which of the following is used to terminate a loop early in C?",
  options: ["break", "exit", "continue", "return"],
  answer: "break"
},
{
  question: "What is the range of values for a signed 8-bit integer?",
  options: ["0 to 255", "-128 to 127", "-255 to 255", "-127 to 128"],
  answer: "-128 to 127"
},
{
  question: "Which of these operators has the highest precedence in C?",
  options: ["&&", "||", "==", "++"],
  answer: "++"
},
{
  question: "How is a single-line comment written in C?",
  options: ["//", "/* */", "#", "`"],
  answer: "//"
},
{
  question: "What is the output of `printf(\"%c\", 'A' + 1);`?",
  options: ["A", "B", "1", "66"],
  answer: "B"
},
{
  question: "What is the use of the `continue` statement in C?",
  options: ["To exit the loop", "To skip the current iteration", "To stop program execution", "To end the function"],
  answer: "To skip the current iteration"
},
{
  question: "What does the `void` keyword mean in a function declaration?",
  options: ["The function returns an integer", "The function returns nothing", "The function has no parameters", "The function is a placeholder"],
  answer: "The function returns nothing"
},
{
  question: "Which of these functions is used to compare two strings in C?",
  options: ["strcmp()", "strcat()", "strlen()", "strcpy()"],
  answer: "strcmp()"
},
{
  question: "Which loop is guaranteed to execute at least once?",
  options: ["for", "while", "do-while", "All of the above"],
  answer: "do-while"
},
{
  question: "What is the output of `printf(\"%d\", 10/3);`?",
  options: ["3.33", "3", "4", "Error"],
  answer: "3"
},
{
  question: "Which of the following is used to define a constant value in C?",
  options: ["#define", "const", "Both #define and const", "None of these"],
  answer: "Both #define and const"
},
{
  question: "What will the expression `4 | 2` return?",
  options: ["0", "2", "4", "6"],
  answer: "6"
},
{
  question: "What does the `return` statement do in a function?",
  options: ["Terminates the program", "Exits the loop", "Transfers control back to the caller", "None of these"],
  answer: "Transfers control back to the caller"
},
{
  question: "What is the purpose of the `fopen()` function?",
  options: ["To close a file", "To open a file", "To read from a file", "To write to a file"],
  answer: "To open a file"
},
{
  question: "Which data type is used to represent a Boolean value in standard C?",
  options: ["bool", "int", "_Bool", "boolean"],
  answer: "_Bool"
},
{
  question: "Which of these is the correct syntax to declare a pointer in C?",
  options: ["int ptr*", "int* ptr", "int ptr&", "int* ptr;"],
  answer: "int* ptr;"
},
{
  question: "What is the result of `5 && 0`?",
  options: ["1", "0", "5", "Error"],
  answer: "0"
},
{
  question: "What is the result of `5 & 3`?",
  options: ["1", "2", "3", "5"],
  answer: "1"
},
{
  question: "Which of the following cannot be a structure member in C?",
  options: ["Function", "Array", "Pointer", "Another structure"],
  answer: "Function"
},
{
  question: "How is memory freed that was allocated by `malloc()`?",
  options: ["delete", "free()", "clear()", "dealloc()"],
  answer: "free()"
},
{
  question: "What is the size of a pointer variable on a 64-bit system?",
  options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
  answer: "8 bytes"
},
{
  question: "Which of these functions is used to convert a string to an integer?",
  options: ["itoa()", "atoi()", "strcpy()", "strcat()"],
  answer: "atoi()"
},
{
  question: "Which operator is used to determine the size of a variable or type?",
  options: ["sizeof", "len", "size", "dimension"],
  answer: "sizeof"
},
{
  question: "What does the `||` operator do in C?",
  options: ["Logical AND", "Logical OR", "Bitwise AND", "Bitwise OR"],
  answer: "Logical OR"
},
{
  question: "What does `int (*ptr)[10];` declare?",
  options: ["A pointer to an array of 10 integers", "An array of pointers to 10 integers", "A 10-dimensional integer array", "None of these"],
  answer: "A pointer to an array of 10 integers"
},
{
  question: "Which function is used to generate a random number in C?",
  options: ["rand()", "random()", "get_rand()", "generate()"],
  answer: "rand()"
},
{
  question: "Which of these statements about recursion in C is true?",
  options: ["Recursion cannot be used in C", "Recursion requires at least two functions", "A recursive function calls itself", "Recursion is faster than loops"],
  answer: "A recursive function calls itself"
},
{
  question: "What will `char str[] = \"Hello\";` contain?",
  options: ["Only 'H', 'e', 'l', 'l', 'o'", "Only 'H', 'e', 'l', 'l', 'o', '\\0'", "Depends on the compiler", "Error"],
  answer: "Only 'H', 'e', 'l', 'l', 'o', '\\0'"
},
{
  question: "What does the `#include` directive do?",
  options: ["It includes files into the program", "It imports variables", "It compiles the program", "None of these"],
  answer: "It includes files into the program"
},
{
  question: "Which of the following is not a preprocessor directive?",
  options: ["#define", "#pragma", "#return", "#include"],
  answer: "#return"
},
{
  question: "What is the value of the expression `1 << 3`?",
  options: ["1", "3", "8", "12"],
  answer: "8"
},
{
  question: "What is the purpose of the `typedef` keyword?",
  options: ["To define macros", "To create type aliases", "To define constants", "To define new data types"],
  answer: "To create type aliases"
},
{
  question: "Which escape sequence represents a newline?",
  options: ["\\t", "\\r", "\\n", "\\v"],
  answer: "\\"
}



];

export default QuestionData;