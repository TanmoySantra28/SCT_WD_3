const questions = [
  {
    category: "JavaScript",
    questions: [
    {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ['object', 'null', 'undefined', 'boolean'],
        correctAnswer: 0,
    },
    {
        question: "Which company developed JavaScript?",
        options: ['Mozilla', 'Netscape', 'Microsoft', 'Oracle'],
        correctAnswer: 1,
    },
    {
        question: "What is the use of `isNaN()` function?",
        options: ['Checks if a value is null', 'Checks if a value is a number', 'Checks if a value is NaN', 'Checks if a value is undefined'],
        correctAnswer: 2,
    },
    {
        question: "What symbol is used for single-line comments in JavaScript?",
        options: ['//', '/*', '<!--', '#'],
        correctAnswer: 0,
    },
    {
        question: "Which method converts JSON to a JavaScript object?",
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.convert()'],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ['const', 'let', 'var', 'constant'],
        correctAnswer: 0,
    },
    {
        question: "Which method is used to add elements to the end of an array?",
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
    },
    {
        question: "What is the result of `'5' + 3` in JavaScript?",
        options: ['8', `'53'`, `'8'`, `NaN`],
        correctAnswer: 1,
    },
    {
        question: "Which operator is used to compare both value and type?",
        options: ['==', '===', '=', '!='],
        correctAnswer: 1,
    },
    {
        question: "What is the output of `Boolean('false')`?",
        options: ['true', 'false', 'undefined', 'null'],
        correctAnswer: 0,
    },
    {
        question: "Which function is used to delay execution in JavaScript?",
        options: ['setInterval()', 'setTimeout()', 'delay()', 'wait()'],
        correctAnswer: 1,
    },
    {
        question: "How do you write a function in JavaScript?",
        options: ['function:myFunc()', 'function myFunc()', 'function = myFunc()', 'def myFunc()'],
        correctAnswer: 1,
    },
    {
        question: "What will `typeof NaN` return?",
        options: ['number', 'NaN', 'undefined', 'object'],
        correctAnswer: 0,
    },
    {
        question: "What is the scope of a variable declared with `var` inside a function?",
        options: ['Global', 'Block', 'Function', 'Module'],
        correctAnswer: 2,
    },
    {
        question: "Which method removes the last item from an array?",
        options: ['shift()', 'pop()', 'unshift()', 'splice()'],
        correctAnswer: 1,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ['if i == 5 then', 'if (i == 5)', 'if i = 5', 'if i == 5 then {}'],
        correctAnswer: 1,
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ['onmouseover', 'onchange', 'onclick', 'onmouseclick'],
        correctAnswer: 2,
    },
    {
        question: "What does the `this` keyword refer to in JavaScript (in a method)?",
        options: ['The current function', 'The global object', 'The parent object', 'The object it belongs to'],
        correctAnswer: 3,
    },
    {
        question: "What is the purpose of `use strict`?",
        options: ['Enables modern features', 'Disables errors', 'Prevents undeclared variables', 'Slows down the code'],
        correctAnswer: 2,
    },
    {
        question: "What will `Array.isArray([])` return?",
        options: ['true', 'false', 'undefined', 'object'],
        correctAnswer: 0,
    },
    {
        question: "What is the output of `'2' * '3'`?",
        options: ['6', `'6'`, `'23'`, `NaN`],
        correctAnswer: 0,
    },
    {
        question: "What is the default value of an uninitialized variable?",
        options: ['null', 'undefined', '0', 'false'],
        correctAnswer: 1,
    },
    {
        question: "Which object represents the browser window in JavaScript?",
        options: ['screen', 'document', 'window', 'navigator'],
        correctAnswer: 2,
    },
    {
        question: "Which method converts a number to a string?",
        options: ['toString()', 'String()', 'convert()', 'Both 1 and 2'],
        correctAnswer: 3,
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ['<!-- comment -->', '/* comment */', '// comment', 'All of the above'],
        correctAnswer: 3,
    },
    {
        question: "Which built-in method returns the length of a string?",
        options: ['length()', 'getLength()', 'len', 'length'],
        correctAnswer: 3,
    },
    {
        question: "What does `document.getElementById()` do?",
        options: ['Gets an element by class', 'Gets an element by tag', 'Gets an element by id', 'Creates a new element'],
        correctAnswer: 2,
    },
    {
        question: "Which of these is not a JavaScript data type?",
        options: ['Number', 'String', 'Float', 'Boolean'],
        correctAnswer: 2,
    },
    {
        question: "What does `===` compare?",
        options: ['Value only', 'Type only', 'Value and Type', 'Reference only'],
        correctAnswer: 2,
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ['*', '=', '==', '!='],
        correctAnswer: 1,
    }
    ],
  },
  {
    category: "Java",
    questions: [
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ['extends', 'implements', 'inherits', 'super'],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is not a Java feature?",
      options: ['Object-oriented', 'Use of pointers', 'Portable', 'Dynamic'],
      correctAnswer: 1,
    },
    {
      question: "Which method must be defined in a Java application?",
      options: ['start()', 'main()', 'run()', 'init()'],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to prevent inheritance?",
      options: ['static', 'final', 'private', 'protected'],
      correctAnswer: 1,
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ['true', 'false', '0', 'null'],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to implement an interface in Java?",
      options: ['extends', 'inherits', 'implements', 'interface'],
      correctAnswer: 2,
    },
    {
      question: "Which of these is a valid Java identifier?",
      options: ['2variable', 'var$', 'class', 'import'],
      correctAnswer: 1,
    },
    {
      question: "Which package contains the Scanner class in Java?",
      options: ['java.util', 'java.io', 'java.lang', 'java.awt'],
      correctAnswer: 0,
    },
    {
      question: "Which exception is thrown when dividing by zero in Java?",
      options: ['NullPointerException', 'ArithmeticException', 'IOException', 'IndexOutOfBoundsException'],
      correctAnswer: 1,
    },
    {
      question: "What is the size of an int variable in Java?",
      options: ['4 bytes', '2 bytes', '8 bytes', '1 byte'],
      correctAnswer: 0,
    },
    {
      question: "What does JVM stand for?",
      options: ['Java Variable Method', 'Java Virtual Machine', 'Joint Virtual Memory', 'Java Verified Mode'],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is not a Java access modifier?",
      options: ['public', 'private', 'protected', 'package'],
      correctAnswer: 3,
    },
    {
      question: "Which operator is used for comparison in Java?",
      options: ['=', '==', '===', '!='],
      correctAnswer: 1,
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ['for', 'while', 'do-while', 'foreach'],
      correctAnswer: 2,
    },
    {
      question: "Which data type is used to create a variable that should store text?",
      options: ['String', 'int', 'char', 'boolean'],
      correctAnswer: 0,
    },
    {
      question: "Which class is the superclass of all classes in Java?",
      options: ['Object', 'Class', 'Main', 'Super'],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a wrapper class in Java?",
      options: ['Integer', 'Int', 'Float', 'float'],
      correctAnswer: 0,
    },
    {
      question: "Which keyword is used to define a constant in Java?",
      options: ['final', 'static', 'const', 'constant'],
      correctAnswer: 0,
    },
    {
      question: "Which exception is thrown when accessing an array index out of bounds?",
      options: ['NullPointerException', 'ArithmeticException', 'ArrayIndexOutOfBoundsException', 'IOException'],
      correctAnswer: 2,
    },
    {
      question: "What is the entry point of a Java application?",
      options: ['start()', 'main()', 'init()', 'run()'],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to create a new object?",
      options: ['this', 'new', 'create', 'object'],
      correctAnswer: 1,
    },
    {
      question: "What is the return type of a constructor?",
      options: ['void', 'int', 'None', 'No return type'],
      correctAnswer: 3,
    },
    {
      question: "Which interface provides capability to store objects as key-value pairs?",
      options: ['Set', 'List', 'Map', 'Collection'],
      correctAnswer: 2,
    },
    {
      question: "Which method is used to start a thread execution?",
      options: ['run()', 'start()', 'execute()', 'init()'],
      correctAnswer: 1,
    },
    {
      question: "Which exception is checked at compile time?",
      options: ['ArrayIndexOutOfBoundsException', 'IOException', 'ArithmeticException', 'NullPointerException'],
      correctAnswer: 1,
    },
    {
      question: "What does the 'super' keyword refer to?",
      options: ['Current class', 'Parent class', 'Child class', 'Global class'],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to inherit an abstract class?",
      options: ['implement', 'inherits', 'extends', 'abstract'],
      correctAnswer: 2,
    },
    {
      question: "Which operator is used to concatenate strings?",
      options: ['&', '+', '++', '*'],
      correctAnswer: 1,
    },
    {
      question: "What is used to handle exceptions in Java?",
      options: ['try-catch', 'if-else', 'switch-case', 'for-loop'],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is not a primitive data type in Java?",
      options: ['int', 'boolean', 'String', 'char'],
      correctAnswer: 2,
    }
    ],
  },
  {
    category: "C",
    questions: [
       {
        question: "Which keyword is used to define a constant in C?",
        options: ['const', 'constant', '#define', 'static'],
        correctAnswer: 0,
    },
    {
        question: "Which function is used to get input from the user?",
        options: ['scanf()', 'input()', 'gets()', 'cin'],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is a valid variable name in C?",
        options: ['1var', '_value', 'int', 'float-value'],
        correctAnswer: 1,
    },
    {
        question: "Which loop checks the condition after executing the loop body?",
        options: ['while', 'do-while', 'for', 'foreach'],
        correctAnswer: 1,
    },
    {
        question: "Which of the following is used to comment a single line in C?",
        options: ['//', '/* */', '#', '<!-- -->'],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is not a data type in C?",
        options: ['float', 'real', 'char', 'int'],
        correctAnswer: 1,
    },
    {
        question: "Which format specifier is used for float values in printf()?",
        options: ['%f', '%d', '%c', '%s'],
        correctAnswer: 0,
    },
    {
        question: "Which operator is used for logical AND in C?",
        options: ['&&', '&', 'and', '|'],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to create a structure in C?",
        options: ['struct', 'structure', 'class', 'record'],
        correctAnswer: 0,
    },
    {
        question: "What is the correct syntax to allocate memory dynamically?",
        options: ['malloc(size);', 'alloc(size);', 'memory(size);', 'new(size);'],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is used to deallocate memory in C?",
        options: ['free()', 'delete()', 'remove()', 'dispose()'],
        correctAnswer: 0,
    },
    {
        question: "What is the output of: printf(\"%d\", 10 > 5);",
        options: ['true', '1', '0', '10 > 5'],
        correctAnswer: 1,
    },
    {
        question: "Which keyword is used to exit from a loop?",
        options: ['exit', 'stop', 'break', 'return'],
        correctAnswer: 2,
    },
    {
        question: "What is the index of the first element in a C array?",
        options: ['1', '0', '-1', 'Depends on the compiler'],
        correctAnswer: 1,
    },
    {
        question: "Which function is used to copy strings in C?",
        options: ['strcpy()', 'copy()', 'strcat()', 'strlen()'],
        correctAnswer: 0,
    },
    {
        question: "Which header file includes string functions?",
        options: ['string.h', 'strings.h', 'stdlib.h', 'stdio.h'],
        correctAnswer: 0,
    },
    {
        question: "What does the sizeof operator return?",
        options: ['Length of string', 'Size of variable in bits', 'Size of variable in bytes', 'Size of file'],
        correctAnswer: 2,
    },
    {
        question: "Which symbol is used to denote preprocessor directives?",
        options: ['#', '@', '&', '$'],
        correctAnswer: 0,
    },
    {
        question: "What is a correct syntax to define a function in C?",
        options: ['void func() {}', 'function func() {}', 'func void() {}', 'define func() {}'],
        correctAnswer: 0,
    },
    {
        question: "What is the value of an uninitialized static variable in C?",
        options: ['Garbage value', '0', '1', 'NULL'],
        correctAnswer: 1,
    },
    {
        question: "Which operator is used to access members of a structure using a pointer?",
        options: ['->', '.', '&', '*'],
        correctAnswer: 0,
    },
    {
        question: "Which function is used to find the length of a string?",
        options: ['strlen()', 'strlength()', 'length()', 'strsize()'],
        correctAnswer: 0,
    },
    {
        question: "Which function converts a string to an integer in C?",
        options: ['atoi()', 'strint()', 'toint()', 'int()'],
        correctAnswer: 0,
    },
    {
        question: "What is the default return type of a function in C if not specified?",
        options: ['int', 'void', 'float', 'char'],
        correctAnswer: 0,
    },
    {
        question: "What is the maximum length of an identifier in C?",
        options: ['31 characters', '63 characters', '255 characters', 'No limit'],
        correctAnswer: 0, // Technically implementation-defined, but 31 is standard for older C
    },
    {
        question: "Which keyword is used to prevent a variable from being modified?",
        options: ['const', 'static', 'volatile', 'immutable'],
        correctAnswer: 0,
    },
    {
        question: "Which operator is used for modulus in C?",
        options: ['%', 'mod', '//', '^'],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used for including header files?",
        options: ['#include', 'import', 'require', 'attach'],
        correctAnswer: 0,
    },
    {
        question: "Which function is used to terminate a program immediately?",
        options: ['exit()', 'break()', 'terminate()', 'end()'],
        correctAnswer: 0,
    },
    {
        question: "Which format specifier is used to print a character?",
        options: ['%c', '%s', '%d', '%f'],
        correctAnswer: 0,
    },
    ],
  },
  {
    category: "DBMS",
    questions: [
    {
        question: "Which key uniquely identifies a record?",
        options: ['Primary key', 'Foreign key', 'Candidate key', 'Super key'],
        correctAnswer: 0,
    },
    {
        question: "What does SQL stand for?",
        options: ['Structured Query Language', 'Simple Query Language', 'System Query Language', 'Standard Question Language'],
        correctAnswer: 0,
    },
    {
        question: "Which command is used to remove a table?",
        options: ['DELETE', 'DROP', 'REMOVE', 'CLEAR'],
        correctAnswer: 1,
    },
    {
        question: "Which normal form removes transitive dependency?",
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correctAnswer: 2,
    },
    {
        question: "Which SQL statement is used to update data?",
        options: ['MODIFY', 'CHANGE', 'UPDATE', 'SET'],
        correctAnswer: 2,
    },
    {
        question: "Which clause is used to filter records in SQL?",
        options: ['WHERE', 'ORDER BY', 'GROUP BY', 'HAVING'],
        correctAnswer: 0,
    },
    {
        question: "Which constraint ensures no duplicate values in a column?",
        options: ['NOT NULL', 'UNIQUE', 'CHECK', 'DEFAULT'],
        correctAnswer: 1,
    },
    {
        question: "What is the default sorting order of ORDER BY clause?",
        options: ['Descending', 'Random', 'Ascending', 'None'],
        correctAnswer: 2,
    },
    {
        question: "Which language is used to define database schema?",
        options: ['DML', 'DCL', 'DDL', 'TCL'],
        correctAnswer: 2,
    },
    {
        question: "Which command is used to add new data into a table?",
        options: ['INSERT', 'ADD', 'APPEND', 'SAVE'],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is not a type of join?",
        options: ['INNER JOIN', 'OUTER JOIN', 'LEFT JOIN', 'CROSS JOIN'],
        correctAnswer: 1,
    },
    {
        question: "Which SQL function returns the number of rows?",
        options: ['COUNT()', 'SUM()', 'AVG()', 'TOTAL()'],
        correctAnswer: 0,
    },
    {
        question: "Which normal form ensures no partial dependency?",
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correctAnswer: 1,
    },
    {
        question: "Which key is used to link two tables?",
        options: ['Primary Key', 'Foreign Key', 'Super Key', 'Alternate Key'],
        correctAnswer: 1,
    },
    {
        question: "What is the full form of DBMS?",
        options: ['Database Management System', 'Data Base Managed Software', 'Database Measuring System', 'Data Business Management System'],
        correctAnswer: 0,
    },
    {
        question: "Which command is used to delete all rows but keep the table?",
        options: ['DELETE', 'DROP', 'REMOVE', 'TRUNCATE'],
        correctAnswer: 3,
    },
    {
        question: "Which one is a DML command?",
        options: ['CREATE', 'DELETE', 'GRANT', 'REVOKE'],
        correctAnswer: 1,
    },
    {
        question: "Which of the following is not a valid SQL data type?",
        options: ['INTEGER', 'VARCHAR', 'BOOLEAN', 'TEXTUAL'],
        correctAnswer: 3,
    },
    {
        question: "What is the result of a Cartesian product?",
        options: ['Intersection of rows', 'Union of rows', 'All possible combinations', 'None of these'],
        correctAnswer: 2,
    },
    {
        question: "Which operator is used with WHERE to search for a pattern?",
        options: ['IN', 'LIKE', 'BETWEEN', 'IS'],
        correctAnswer: 1,
    },
    {
        question: "Which statement is used to create a new table?",
        options: ['INSERT TABLE', 'MAKE TABLE', 'CREATE TABLE', 'NEW TABLE'],
        correctAnswer: 2,
    },
    {
        question: "Which of the following represents a relationship in ER model?",
        options: ['Rectangle', 'Ellipse', 'Diamond', 'Line'],
        correctAnswer: 2,
    },
    {
        question: "Which level of data abstraction describes how data is stored?",
        options: ['Physical', 'Logical', 'View', 'Schema'],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is an example of a TCL command?",
        options: ['COMMIT', 'ROLLBACK', 'SAVEPOINT', 'All of these'],
        correctAnswer: 3,
    },
    {
        question: "Which symbol is used to represent many in ER diagram?",
        options: ['1', '∞', 'N', '*'],
        correctAnswer: 3,
    },
    {
        question: "Which keyword is used to eliminate duplicate rows in SQL?",
        options: ['DISTINCT', 'UNIQUE', 'REMOVE', 'DELETE DUPLICATES'],
        correctAnswer: 0,
    },
    {
        question: "Which of these is not a DBMS?",
        options: ['MySQL', 'MongoDB', 'Oracle', 'Windows'],
        correctAnswer: 3,
    },
    {
        question: "Which one of these is a NoSQL database?",
        options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
        correctAnswer: 2,
    },
    {
        question: "Which SQL keyword is used to sort result-set?",
        options: ['SORT BY', 'ORDER BY', 'GROUP BY', 'ARRANGE BY'],
        correctAnswer: 1,
    },
    {
        question: "Which one is a database object?",
        options: ['Table', 'View', 'Index', 'All of these'],
        correctAnswer: 3,
    },
    ],
  },
];
