[![es](https://img.shields.io/badge/lang-es-red.svg)](README.es.md)

# 📝 Python Basic Exams Collection

![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python&logoColor=white)
![Type](https://img.shields.io/badge/Type-Educational-8B008B?style=for-the-badge)
![Exams](https://img.shields.io/badge/Exams-4-orange?style=for-the-badge)
![Topics](https://img.shields.io/badge/Topics-Loops_·_Functions_·_Validation-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0-gold?style=for-the-badge)

A collection of **4 fundamental Python programming exams** that demonstrate basic programming concepts including loops, functions, input validation, and data processing.

---

## 👨‍🎓 Developer Info

- **Author:** Carlos Gabriel Magallanes López
- **Email:** cgmagallanes23@gmail.com
- **Development Date:** October 22–27, 2025

---

## 📋 Project Contents

This repository contains 4 Python exams with progressive difficulty covering the essential fundamentals of programming:

---

### 📌 Exam 1: School Charity Raffle
**Date:** October 22, 2025

A raffle program that selects a winner among 5 participants based on their academic performance and a random number match.

**Features:**
- Student eligibility verification (minimum average of 9.0)
- Random number generation and comparison
- Grade validation (range 1–10)
- Lucky number validation (range 1–10)
- Winner announcement with string concatenation

**Concepts Covered:**
- `while` loops with `break` statements
- Random number generation
- Conditional logic
- Input validation
- String formatting with `%` operator

---

### 📌 Exam 2: Store Inventory Management
**Date:** October 23, 2025

An inventory system that records 10 products and calculates the average supplier cost per product.

**Features:**
- Product registration (name, public price, supplier cost, quantity)
- Total acquisition cost calculation
- Average cost per product computation
- Input validation for prices and quantities
- Function with return value

**Concepts Covered:**
- `for` loops
- Functions with return values
- Accumulator variables
- Input validation
- f-string formatting
- Decimal rounding

---

### 📌 Exam 3: Cafeteria Weekly Sales Control
**Date:** October 27, 2025

A sales tracking system for a cafeteria that records daily sales over 7 days and calculates the average daily income.

**Features:**
- Daily sales recording (coffee and desserts)
- Quantity and price tracking
- Total weekly income calculation
- Average daily income computation
- Quantity and minimum price validation

**Concepts Covered:**
- `for` loops
- Functions with return values
- Multiple data tracking
- Input validation with specific price ranges
- String formatting with `.format()`
- Mathematical calculations

---

### 📌 Exam 4: Weekly Exercise Tracker
**Date:** October 27, 2025

A physical tracking program that records 3 exercise sessions and displays a complete summary.

**Features:**
- Exercise session registration (type, duration, calories)
- Exercise type validation (Cardio/Strength/Endurance)
- Total minutes and calories tracking
- Average calories per session calculation
- Formatted summary display

**Concepts Covered:**
- `while` loops with counters
- Void functions (no return)
- Multiple conditional validations
- String validation
- f-string formatting
- Statistical calculations

---

## 🎯 Learning Objectives

These exams comprehensively cover the fundamental concepts of Python programming:

- ✅ **Loop Control:** `while` and `for` loops with correct iteration
- ✅ **Conditional Logic:** `if-elif-else` statements and nested conditions
- ✅ **Input Validation:** Data verification with error handling
- ✅ **Functions:** Functions with return values and void functions
- ✅ **Random Numbers:** Using the `random` module for number generation
- ✅ **String Formatting:** `%`, `.format()` and f-strings
- ✅ **Math Operations:** Averages, totals, and rounding
- ✅ **Accumulator Pattern:** Tracking sums and counts
- ✅ **Type Conversion:** `int()`, `float()`, `str()`
- ✅ **Control Flow:** `break` statements and loop counters

---

## 📊 Exam Comparison Table

| Exam | Loop Type | Function Type | Validations | Output Format | Difficulty |
|------|-----------|---------------|-------------|---------------|------------|
| 1 - Raffle | `while` + `break` | None | 4 validations | `%` operator | ⭐⭐ |
| 2 - Inventory | `for` | With return | 3 validations | f-string | ⭐⭐⭐ |
| 3 - Cafeteria | `for` | With return | 4 validations | `.format()` | ⭐⭐⭐ |
| 4 - Exercise | `while` | Void | 3 validations | f-string | ⭐⭐⭐⭐ |

---

## 🔍 Validation Rules

### Exam 1 Validations:
- ✅ Grades: Range 1–10
- ✅ Lucky number: Range 1–10
- ✅ Required average: ≥ 9.0

### Exam 2 Validations:
- ✅ Public price: ≥ $0.50
- ✅ Supplier cost: ≥ $0.50
- ✅ Product quantity: ≥ 1

### Exam 3 Validations:
- ✅ Coffee quantity: ≥ 0
- ✅ Coffee price: ≥ $15.00
- ✅ Dessert quantity: ≥ 0
- ✅ Dessert price: ≥ $25.00

### Exam 4 Validations:
- ✅ Exercise duration: > 0 minutes
- ✅ Calories burned: > 0
- ✅ Exercise type: Must be "Cardio", "Strength", or "Endurance"

---

## 📦 Requirements

```bash
Python 3.11
random module (included in the standard library)
```

---

## ▶️ How to Run

1. **Clone this repository:**
```bash
git clone https://github.com/TheNarratorVIMMXX/PythonBasicExams.git
cd PythonBasicExams/src
```

2. **Run any exam:**
```bash
python exam_1.py  # School Charity Raffle
python exam_2.py  # Store Inventory Management
python exam_3.py  # Cafeteria Sales Control
python exam_4.py  # Weekly Exercise Tracker
```

---

## 📚 Learning Outcomes

This collection serves as an educational resource for understanding Python programming fundamentals:

### 🎓 What You'll Learn

1. **Loop Mastery**
   - `while` loops with conditions
   - `for` loops with `range()`
   - Counters and control variables
   - Loop exit with `break`
   - Nested loop structures

2. **Input Validation Techniques**
   - Range checking (numeric values)
   - String validation (specific options)
   - Repeated prompting on invalid input
   - Error message display
   - Safe type conversion

3. **Function Design**
   - Functions with return values
   - Void functions (procedures)
   - Parameter passing
   - Function documentation
   - Type annotation usage

4. **Mathematical Operations**
   - Sum accumulation
   - Average calculation
   - Decimal rounding
   - Multiplication and division
   - Percentage calculations

5. **String Formatting**
   - `%` formatting (legacy style)
   - `.format()` method
   - F-strings (formatted string literals)
   - Concatenation techniques
   - Output formatting

6. **Control Flow Patterns**
   - Conditional execution
   - Multiple conditions (`and`, `or`)
   - Nested conditionals
   - Loop exit strategies
   - Program state management

7. **Random Number Generation**
   - Using `random.randint()`
   - Range specification
   - Random selection logic
   - Probability concepts

8. **Data Accumulation**
   - Running totals
   - Counter variables
   - Aggregation patterns
   - Statistical calculations

9. **Program Organization**
   - Clear documentation
   - Logical flow structure
   - Variable naming conventions
   - Code readability
   - Commenting best practices

10. **Error Handling**
    - Input validation loops
    - User feedback messages
    - Graceful error recovery
    - Edge case handling

### 🎯 Skills Developed

By studying and practicing with these exams, you'll gain hands-on experience with:

✅ **Iterative programming** with loops and counters  
✅ **Data validation** and input sanitization  
✅ **Function decomposition** for code reuse  
✅ **Mathematical problem solving** in programming  
✅ **String manipulation and formatting**  
✅ **Algorithmic thinking** for business logic  

This repository is ideal for students learning Python fundamentals, preparing for programming exams, or anyone looking to understand essential programming patterns through practical exercises.

---

## 🔮 Practice Suggestions

### For Beginners:
1. Start with Exam 1 to understand basic loops and conditionals
2. Move to Exam 2 to learn functions with return values
3. Practice Exam 3 to master multiple data tracking
4. Challenge yourself with Exam 4 for advanced validations

### For Intermediate Students:
1. Modify the programs to add new functionality
2. Combine concepts from multiple exams
3. Add error handling with `try-except`
4. Create GUI versions using Tkinter

### Improvement Ideas:
- [ ] Add data persistence (save to file)
- [ ] Create classes for better organization
- [ ] Implement unit tests
- [ ] Add command-line arguments
- [ ] Create database integration
- [ ] Build graphical interfaces
- [ ] Add data export (CSV, JSON)

---

## 🤝 Contributions

Students and teachers are welcome to:
- Report issues or bugs
- Suggest improvements
- Share alternative solutions
- Create additional practice problems
- Translate to other languages

---

## 📄 License

This project is educational in nature and available for free use for learning purposes.

---

## 📧 Contact

**Carlos Gabriel Magallanes López**  
Email: cgmagallanes23@gmail.com

---

⭐ **If these exams helped you learn Python fundamentals, give this repository a star!**

**📖 Happy learning and best of luck in your studies!**
