# Lambda University - October 12, 2017: Day 72, Thursday
## Coding Challenge #61
- "Stack" available in https://repl.it/student/submissions/1789748
***
# [1st Lecture](VIDEO_RECORDED_NOT_POSTED) w/Sean Chen: Review Code Challenge #61: stack
- https://repl.it/student/assignments/470467/model_solution?fromSubmissionId=1789748

***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Sean Chen: LS-MLFQ Review
***
# [3rd Lecture](https://youtu.be/JCUNwhDEaXY) w/Thomson Comer: LS-Applied C Programming
## https://github.com/LambdaSchool/Applied-C-Programming
- More Fundamentals of C
  1. More details of the C Language
  2. Building and Contributing to large C projects
  3. Interprocess communication (inside of OS vs network related programming)
    - very hard to get right: MEGAgotchas e.g. synchronization, deadlock, shared resources

## Applied C Programming Repository Details
### [@8m51s](https://youtu.be/JCUNwhDEaXY?t=8m51s) -  - More details of the C Language
- `const` for values that cannot be changed
- reading from STDIN from a file or user input
- meta programming: using C preprocessor to generate code dynamically based on things outside program, e.g. headers, OS checks, special library flags
- declarations, definitions and initializations
- faulting
- file scope, static (hoisting), extern
- include, sourcing linraries and object files, files within dir, linked and built, linking, compilation arguments, compiler optimization, make and Cmake
- bit shifting >> <<
- binary operators &, |, ^, ~  ( & = and, | = or, ^ = Xor, ~ = not)
##### [@16m58s](https://youtu.be/JCUNwhDEaXY?t=16m58s) Play with bitshift and binary program using `make` command with Makefile
- function pointers (The "Gallagher" fruit detonation)

### [@18m53s](https://youtu.be/JCUNwhDEaXY?t=18m53s) - Building and Contributing to large C projects
- [ImageMagick](https://github.com/ImageMagick/ImageMagick) configured using `make`
- [curl](https://github.com/curl/curl) configured using `cmake`
- Dependecny and Package Management

### [@21m58s](https://youtu.be/JCUNwhDEaXY?t=21m58s) - Interprocess communication
- Pipes, Stream, Sockets, Signals, Shmem, and Synchronization
- `ipcs` show which OS level IPC resources are available
- one way pipes?
- the message queues are bi-directional pipes (FIFO's?)
- File locks
- Semaphores
- Sockets, UNIX domain socket

### [@36m](https://youtu.be/JCUNwhDEaXY?t=36m) - use the Makefile in the repository

***
#### LUNCH
***
# [Brown Bag](VIDEO_RECORDED_NOT_POSTED) w/Hans Petrich from Silent Break Security: Penetration Testing
- https://twitter.com/hanspetrich
- https://portswigger.net/burp/freedownload
- https://objective-see.com/products.html

***
# [4th Lecture](https://youtu.be/Pr0iZylrh38) w/Thomson Comer: LS - Applied C Programming
- extended types?
- `const` for immutability (immutability is the basis of Redux)
- meta-programming gives C flexibility
- preprocessor doesn't use periods `.` - instead, underscores `_`
- `gcc -E` applies preprocessing macros
- header files are for declaraion();
- library files are for definitions(){}
- initialization: declaration and definition all at once.
- http://www.cplusplus.com/articles/yAqpX9L8/
- `static`: inside a function gets hoisted
- `extern`: gets an external variable
### Assignment:
- refactor server.c to be a web server and handle a POST request... use a static variable or write to a file what was sent. ...put it in a database?
- POST request: `curl localhost:7080/info-d "my message"`
- server_summary.md
- header info is the stuff that comes after the GET
- `atoi` convert string to integer
-

# Lab / Q&A
***
# fin
