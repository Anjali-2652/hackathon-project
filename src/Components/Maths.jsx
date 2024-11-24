const QuestionData = [
    {
      question: "What is the value of 2³?",
      options: ["6", "8", "9", "12"],
      answer: "8"
    },
    {
      question: "If x + 5 = 10, what is the value of x?",
      options: ["3", "5", "10", "15"],
      answer: "5"
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "Solve for x: 3x = 15.",
      options: ["3", "5", "10", "15"],
      answer: "5"
    },
    {
      question: "What is the formula for the area of a circle?",
      options: ["2πr", "πr²", "πd", "r²"],
      answer: "πr²"
    },
    {
      question: "What is 15% of 200?",
      options: ["15", "20", "30", "40"],
      answer: "30"
    },
    {
      question: "Which number is a prime number?",
      options: ["4", "6", "9", "13"],
      answer: "13"
    },
    {
      question: "What is the value of sin(90°)?",
      options: ["0", "1", "-1", "Undefined"],
      answer: "1"
    },
    {
      question: "What is the slope of a line passing through points (1, 2) and (3, 6)?",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
    {
      question: "What is the value of 7! (7 factorial)?",
      options: ["5040", "720", "120", "240"],
      answer: "5040"
    },
    // {
    //   question: "What is the value of log₁₀(1000)?",
    //   options: ["1", "2", "3", "4"],
    //   answer: "3"
    // },
    // {
    //   question: "What is the equation of a line with slope 2 and y-intercept 3?",
    //   options: ["y = 2x + 3", "y = 3x + 2", "y = 2x - 3", "y = 3x - 2"],
    //   answer: "y = 2x + 3"
    // },
    // {
    //   question: "What is the perimeter of a square with side length 5?",
    //   options: ["10", "20", "25", "30"],
    //   answer: "20"
    // },
    // {
    //   question: "What is the solution of 2x - 4 = 0?",
    //   options: ["2", "-2", "4", "-4"],
    //   answer: "2"
    // },
    // {
    //   question: "What is the derivative of x² with respect to x?",
    //   options: ["1", "2x", "x", "x²"],
    //   answer: "2x"
    // },
    // {
    //   question: "What is the sum of the first 10 positive integers?",
    //   options: ["45", "50", "55", "60"],
    //   answer: "55"
    // },
    // {
    //   question: "If the radius of a cylinder is 3 and its height is 5, what is its volume?",
    //   options: ["15π", "30π", "45π", "90π"],
    //   answer: "45π"
    // },
    // {
    //   question: "What is the formula for the distance between two points (x₁, y₁) and (x₂, y₂)?",
    //   options: [
    //     "√((x₁ + x₂)² + (y₁ + y₂)²)",
    //     "√((x₂ - x₁)² + (y₂ - y₁)²)",
    //     "(x₂ - x₁) + (y₂ - y₁)",
    //     "(x₁x₂) + (y₁y₂)"
    //   ],
    //   answer: "√((x₂ - x₁)² + (y₂ - y₁)²)"
    // },
    // {
    //   question: "What is the value of cos(0°)?",
    //   options: ["0", "1", "-1", "Undefined"],
    //   answer: "1"
    // },
    // {
    //   question: "What is the least common multiple (LCM) of 4 and 6?",
    //   options: ["12", "18", "24", "36"],
    //   answer: "12"
    // },
    // {
    //   question: "What is the quadratic formula used to solve ax² + bx + c = 0?",
    //   options: [
    //     "x = (-b ± √(b² - 4ac)) / 2a",
    //     "x = (b ± √(b² - 4ac)) / 2a",
    //     "x = (-b + √(4ac - b²)) / 2a",
    //     "x = (b + √(4ac - b²)) / 2a"
    //   ],
    //   answer: "x = (-b ± √(b² - 4ac)) / 2a"
    // },
    // {
    //   question: "If a triangle has sides 3, 4, and 5, what kind of triangle is it?",
    //   options: ["Equilateral", "Isosceles", "Scalene", "Right"],
    //   answer: "Right"
    // },
    // {
    //   question: "What is the value of π approximately?",
    //   options: ["3.12", "3.14", "3.16", "3.18"],
    //   answer: "3.14"
    // },
    // {
    //   question: "What is the probability of rolling a 3 on a fair six-sided die?",
    //   options: ["1/6", "1/3", "1/2", "2/3"],
    //   answer: "1/6"
    // },
    // {
    //   question: "What is the area of a triangle with base 10 and height 5?",
    //   options: ["25", "50", "75", "100"],
    //   answer: "25"
    // },
    // {
    //   question: "If f(x) = 3x + 2, what is f(2)?",
    //   options: ["5", "6", "8", "12"],
    //   answer: "8"
    // },
    // {
    //   question: "What is the mode of the numbers 2, 4, 4, 5, 6?",
    //   options: ["2", "4", "5", "6"],
    //   answer: "4"
    // },
    // {
    //   question: "What is the sum of the angles in a triangle?",
    //   options: ["90°", "180°", "360°", "540°"],
    //   answer: "180°"
    // },
    // {
    //   question: "What is the value of 0⁰?",
    //   options: ["Undefined", "0", "1", "Infinity"],
    //   answer: "1"
    // },
    // {
    //   question: "Which is the largest prime number less than 10?",
    //   options: ["2", "3", "5", "7"],
    //   answer: "7"
    // },
    // {
    //   question: "What is the formula for the circumference of a circle?",
    //   options: ["πr²", "2πr", "πd", "r²"],
    //   answer: "2πr"
    // },
    // {
    //   question: "Solve for x: 5x - 3 = 12.",
    //   options: ["2", "3", "4", "5"],
    //   answer: "3"
    // },
    // {
    //   question: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?",
    //   options: ["ad + bc", "ad - bc", "ab - cd", "ab + cd"],
    //   answer: "ad - bc"
    // },
    // {
    //   question: "What is the average of 10, 20, and 30?",
    //   options: ["10", "20", "30", "40"],
    //   answer: "20"
    // },
    // {
    //   question: "If y = mx + c, what is the value of m?",
    //   options: ["Slope", "Intercept", "Constant", "Variable"],
    //   answer: "Slope"
    // }




];
  
export default QuestionData;