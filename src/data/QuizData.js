const QuizData = {
  python: {
    easy: [
        {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".pt", ".pyt", ".python"],
      answer: ".py"
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "define", "def", "function"],
      answer: "def"
    },
    {
      question: "Which of the following is a Python data type?",
      options: ["integer", "decimal", "real", "character"],
      answer: "integer"
    },
    {
      question: "Which symbol is used to start a comment?",
      options: ["//", "#", "/*", "<!--"],
      answer: "#"
    },
    {
      question: "Python is ____ typed language.",
      options: ["Strongly", "Weakly", "Dynamically", "Statically"],
      answer: "Dynamically"
    },
    {
      question: "Which function is used to print output?",
      options: ["print()", "output()", "printf()", "display()"],
      answer: "print()"
    },
    {
      question: "Which operator is used for exponent?",
      options: ["^", "**", "exp()", "power()"],
      answer: "**"
    },
    {
      question: "Which keyword is used to create a class?",
      options: ["object", "class", "define", "struct"],
      answer: "class"
    },
    {
      question: "Which is used to take input from user?",
      options: ["get()", "scan()", "read()", "input()"],
      answer: "input()"
    },
    {
      question: "Python was created by?",
      options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Linus Torvalds"],
      answer: "Guido van Rossum"
    },
    {
      question: "Lists in Python are enclosed in?",
      options: ["{}", "[]", "()", "<>"],
      answer: "[]"
    },
    {
      question: "Tuples in Python are enclosed in?",
      options: ["()", "[]", "{}", "<>"],
      answer: "()"
    },
    {
      question: "Which function converts string to integer?",
      options: ["toInt()", "int()", "parseInt()", "convert()"],
      answer: "int()"
    },
    {
      question: "What is the output of: print(type(10))?",
      options: ["float", "string", "int", "double"],
      answer: "int"
    },
    {
      question: "Python supports which programming paradigm?",
      options: ["Object Oriented", "Procedural", "Functional", "All of these"],
      answer: "All of these"
    }
],
    medium: [
        {
      question: "What is the output of: print(3 * '7')?",
      options: ["777", "21", "Error", "7 * 3"],
      answer: "777"
    },
    {
      question: "Which collection does not allow duplicate values?",
      options: ["List", "Set", "Tuple", "Dictionary"],
      answer: "Set"
    },
    {
      question: "Dictionary stores data in:",
      options: ["Key-Value pairs", "Indexed positions", "Sorted order", "Sequential memory"],
      answer: "Key-Value pairs"
    },
    {
      question: "Which function returns the length of string?",
      options: ["len()", "size()", "length()", "count()"],
      answer: "len()"
    },
    {
      question: "Which is the correct Loop?",
      options: ["repeat i in range(5)", "loop(5)", "for i in range(5):", "iterate range(5)"],
      answer: "for i in range(5):"
    },
    {
      question: "Which statement handles exceptions?",
      options: ["exception", "try-except", "catch", "ignore"],
      answer: "try-except"
    },
    {
      question: "Which keyword creates inheritance?",
      options: ["inherits", "extends", "derives", "None (It uses class(ClassName))"],
      answer: "None (It uses class(ClassName))"
    },
    {
      question: "Which operator checks equality?",
      options: ["=", "==", "===", "equals()"],
      answer: "=="
    },
    {
      question: "Lambda functions are also called:",
      options: ["Anonymous functions", "Private functions", "Hidden functions", "Macro functions"],
      answer: "Anonymous functions"
    },
    {
      question: "What is the output of: len({'a':1,'b':2})?",
      options: ["1", "2", "Error", "None"],
      answer: "2"
    },
    {
      question: "Which module is used for regular expressions?",
      options: ["regex", "pyregex", "re", "match"],
      answer: "re"
    },
    {
      question: "Which function sorts a list?",
      options: ["order()", "sort()", "arrange()", "setOrder()"],
      answer: "sort()"
    },
    {
      question: "What is list slicing syntax?",
      options: ["list(slice)", "list[start:end]", "slice(list)", "cut(list)"],
      answer: "list[start:end]"
    },
    {
      question: "Which keyword is used to define inheritance?",
      options: ["parent", "super", "inherits", "class Child(Parent)"],
      answer: "class Child(Parent)"
    },
    {
      question: "Which keyword is used to define an interface like structure?",
      options: ["abstract", "protocol", "interface", "There are no interfaces in Python"],
      answer: "There are no interfaces in Python"
    }
],
    hard: [
        {
      question: "Which method is called when object is deleted?",
      options: ["__delete__", "__del__", "__destroy__", "__remove__"],
      answer: "__del__"
    },
    {
      question: "Which library is used for numerical computation?",
      options: ["math", "numpy", "numbers", "calc"],
      answer: "numpy"
    },
    {
      question: "Which of these supports generators?",
      options: ["yield", "return", "break", "exit"],
      answer: "yield"
    },
    {
      question: "Which method copies list but not nested objects?",
      options: ["deepcopy()", "clone()", "copy()", "shallowcopy()"],
      answer: "copy()"
    },
    {
      question: "Which concept avoids memory leak in recursion?",
      options: ["Tail recursion", "Memoization", "Stack skipping", "Heap override"],
      answer: "Tail recursion"
    }
]
  },

  java: {
    easy: [
        {
      question: "Java was developed by?",
      options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
      answer: "James Gosling"
    },
    {
      question: "Java is ____ language.",
      options: ["Compiled", "Interpreted", "Both", "None"],
      answer: "Both"
    },
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["define", "class", "struct", "object"],
      answer: "class"
    },
    {
      question: "Every Java program must have ____ method.",
      options: ["start()", "run()", "main()", "execute()"],
      answer: "main()"
    },
    {
      question: "Which operator is used for comparison?",
      options: ["=", "==", ":=", "equals"],
      answer: "=="
    },
    {
      question: "Arrays in Java are:",
      options: ["Objects", "Methods", "Keywords", "Variables"],
      answer: "Objects"
    },
    {
      question: "Java source file extension is?",
      options: [".jav", ".j", ".java", ".class"],
      answer: ".java"
    },
    {
      question: "Which company maintains Java now?",
      options: ["Google", "IBM", "Oracle", "Microsoft"],
      answer: "Oracle"
    },
    {
      question: "Which collection allows duplicates?",
      options: ["Set", "HashSet", "List", "TreeSet"],
      answer: "List"
    },
    {
      question: "Which is used to read input?",
      options: ["Scanner", "Reader", "Input()", "Console.read"],
      answer: "Scanner"
    },
    {
      question: "Which keyword is used to create object?",
      options: ["class", "construct", "new", "make"],
      answer: "new"
    },
    {
      question: "Which is not a primitive datatype?",
      options: ["int", "float", "String", "char"],
      answer: "String"
    },
    {
      question: "OOP means?",
      options: ["Object Oriented Programming", "Online Open Program", "Open Object Process", "None"],
      answer: "Object Oriented Programming"
    },
    {
      question: "Java code runs on?",
      options: ["OS directly", "JVM", "CPU hardware", "Browser only"],
      answer: "JVM"
    },
    {
      question: "Which loop runs definite number of times?",
      options: ["for", "while", "do-while", "foreach"],
      answer: "for"
    }
],
    medium: [
        {
      question: "Which method is used to compare strings?",
      options: ["==", "compare()", "equals()", "match()"],
      answer: "equals()"
    },
    {
      question: "Which class is parent of all classes?",
      options: ["Parent", "Base", "Object", "Main"],
      answer: "Object"
    },
    {
      question: "Which concept hides internal details?",
      options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
      answer: "Encapsulation"
    },
    {
      question: "Which keyword is used for inheritance?",
      options: ["extends", "inherits", "override", "base"],
      answer: "extends"
    },
    {
      question: "Method overloading is based on?",
      options: ["Method Name Only", "Return Type Only", "Method Signature", "Class Name"],
      answer: "Method Signature"
    },
    {
      question: "Which access modifier allows access anywhere?",
      options: ["private", "protected", "default", "public"],
      answer: "public"
    },
    {
      question: "Abstract classes can have?",
      options: ["Only abstract methods", "Only concrete methods", "Both", "No methods"],
      answer: "Both"
    },
    {
      question: "Which keyword is used to call parent class?",
      options: ["upper", "parent", "super", "this"],
      answer: "super"
    },
    {
      question: "What is JVM short for?",
      options: ["Java Virtual Machine", "Java Variable Memory", "Joint Virtual Mapper", "Java Value Manager"],
      answer: "Java Virtual Machine"
    },
    {
      question: "Which loop executes at least once?",
      options: ["for", "while", "do-while", "foreach"],
      answer: "do-while"
    },
    {
      question: "Which memory stores objects?",
      options: ["Stack", "Heap", "CPU Register", "ROM"],
      answer: "Heap"
    },
    {
      question: "Which is interface in Java?",
      options: ["Set", "List", "Map", "All above"],
      answer: "All above"
    },
    {
      question: "Which class handles exceptions?",
      options: ["Exception", "Throwable", "Error", "ErrorHandler"],
      answer: "Throwable"
    },
    {
      question: "Which package contains fundamental classes?",
      options: ["java.core", "java.main", "java.lang", "java.util"],
      answer: "java.lang"
    },
    {
      question: "Runtime Polymorphism is achieved using?",
      options: ["Constructor", "Method Overloading", "Method Overriding", "Variables"],
      answer: "Method Overriding"
    }
],
    hard: [
        {
      question: "Which keyword prevents inheritance?",
      options: ["static", "const", "final", "private"],
      answer: "final"
    },
    {
      question: "Which garbage collection algorithm is used by default in Java?",
      options: ["Mark and Sweep", "Generational GC", "Incremental", "Copy GC"],
      answer: "Generational GC"
    },
    {
      question: "Which design pattern ensures only one instance exists?",
      options: ["Factory", "Builder", "Singleton", "Prototype"],
      answer: "Singleton"
    },
    {
      question: "Which thread state means waiting for another thread?",
      options: ["RUNNING", "WAITING", "BLOCKED", "NEW"],
      answer: "WAITING"
    },
    {
      question: "Which keyword is used for synchronization?",
      options: ["sync", "synchronized", "lock", "mutex"],
      answer: "synchronized"
    }
]
  },

  html: {
    easy: [
        {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Marking Language",
        "Hyperlink Text Making Language",
        "Home Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<head>", "<heading>"],
      answer: "<h1>"
    },
    {
      question: "Which tag is used to insert a line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      answer: "<br>"
    },
    {
      question: "HTML is a ____ language.",
      options: ["Programming", "Markup", "Styling", "Scripting"],
      answer: "Markup"
    },
    {
      question: "Which tag inserts an image?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      answer: "<img>"
    },
    {
      question: "Which attribute gives alternate text for images?",
      options: ["alt", "text", "title", "name"],
      answer: "alt"
    },
    {
      question: "Which tag is used to create a numbered list?",
      options: ["<ul>", "<ol>", "<list>", "<nl>"],
      answer: "<ol>"
    },
    {
      question: "Which tag creates a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "HTML document structure begins with?",
      options: ["<start>", "<begin>", "<html>", "<open>"],
      answer: "<html>"
    },
    {
      question: "Which tag is used for table rows?",
      options: ["<tr>", "<td>", "<th>", "<row>"],
      answer: "<tr>"
    },
    {
      question: "Which tag is used for table data?",
      options: ["<td>", "<tr>", "<th>", "<data>"],
      answer: "<td>"
    },
    {
      question: "Which tag displays bold text?",
      options: ["<strong>", "<bold>", "<b>", "<em>"],
      answer: "<b>"
    },
    {
      question: "Which tag displays italic text?",
      options: ["<em>", "<i>", "<italic>", "<it>"],
      answer: "<i>"
    },
    {
      question: "What tag defines paragraph?",
      options: ["<p>", "<para>", "<text>", "<pg>"],
      answer: "<p>"
    },
    {
      question: "HTML comments are written as?",
      options: ["// comment", "<!-- comment -->", "# comment", "** comment"],
      answer: "<!-- comment -->"
    }
],
    medium: [
        {
      question: "Which tag is used to define metadata?",
      options: ["<meta>", "<data>", "<header>", "<info>"],
      answer: "<meta>"
    },
    {
      question: "Which attribute opens link in new tab?",
      options: ["new", "target='_blank'", "tab", "open"],
      answer: "target='_blank'"
    },
    {
      question: "Which element groups multiple inline elements?",
      options: ["<span>", "<div>", "<group>", "<section>"],
      answer: "<span>"
    },
    {
      question: "Which element groups multiple block elements?",
      options: ["<div>", "<span>", "<section>", "<main>"],
      answer: "<div>"
    },
    {
      question: "Which tag defines a dropdown list?",
      options: ["<dropdown>", "<select>", "<option>", "<list>"],
      answer: "<select>"
    },
    {
      question: "Which tag defines input field?",
      options: ["<enter>", "<textbox>", "<input>", "<form>"],
      answer: "<input>"
    },
    {
      question: "Which attribute is used to define form submit address?",
      options: ["send", "to", "action", "href"],
      answer: "action"
    },
    {
      question: "Which attribute is used for form method?",
      options: ["way", "method", "process", "send"],
      answer: "method"
    },
    {
      question: "Which tag defines a section of navigation links?",
      options: ["<nav>", "<links>", "<navigate>", "<menu>"],
      answer: "<nav>"
    },
    {
      question: "Which tag is used to embed a video?",
      options: ["<video>", "<movie>", "<media>", "<vid>"],
      answer: "<video>"
    },
    {
      question: "Which attribute autoplays video?",
      options: ["auto", "autoplay", "play", "start"],
      answer: "autoplay"
    },
    {
      question: "Which element represents document main content?",
      options: ["<body>", "<main>", "<content>", "<center>"],
      answer: "<main>"
    },
    {
      question: "Which tag defines footer?",
      options: ["<end>", "<footer>", "<bottom>", "<foot>"],
      answer: "<footer>"
    },
    {
      question: "Which element is semantic?",
      options: ["<div>", "<span>", "<section>", "<b>"],
      answer: "<section>"
    },
    {
      question: "What is DOCTYPE used for?",
      options: ["Define document language", "Define version of HTML", "Import library", "Run code"],
      answer: "Define version of HTML"
    }
],
    hard: [
        {
      question: "Which attribute is used for custom data?",
      options: ["data-*", "custom", "meta-*", "attr"],
      answer: "data-*"
    },
    {
      question: "ARIA stands for?",
      options: [
        "Accessible Rich Internet Applications",
        "Advanced Responsive Internet Application",
        "Audio Rich Interface Access",
        "Application Rich Internet Access"
      ],
      answer: "Accessible Rich Internet Applications"
    },
    {
      question: "Which tag defines document structure outline?",
      options: ["<article>", "<section>", "<header>", "<main>"],
      answer: "<section>"
    },
    {
      question: "Which attribute improves website SEO?",
      options: ["alt", "class", "id", "href"],
      answer: "alt"
    },
    {
      question: "What is Web Accessibility focus?",
      options: ["Design", "Color", "People with disabilities", "Performance"],
      answer: "People with disabilities"
    }
]
  }
};

export default quizData;
