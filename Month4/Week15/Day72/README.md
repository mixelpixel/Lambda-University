# Lambda University - October 12, 2017: Day 72, Thursday
## Coding Challenge #61
- "Stack" available in https://repl.it/student/submissions/1789748
***
Ben Nelson
Thomson Comer
Ryan Hamblin
Ivan Mora
Sean Chen
Tai Chulikavit
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
***
# [1st Lecture](VIDEO_RECORDED_NOT_POSTED) w/Sean Chen: Review Code Challenge #61: stack
- https://repl.it/student/assignments/470467/model_solution?fromSubmissionId=1789748

***
# [2nd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Sean Chen: LS-MLFQ Review
***
# [3rd Lecture](https://youtu.be/JCUNwhDEaXY) w/Thomson Comer: LS-Applied C Programming
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
- bit shifting >> << NOTE: (??? left increments, right decrements? Big Endian?)
- binary operators &, |, ~ NOTE:  ( & = and, | = or, ~ = not???)
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


***
#### LUNCH
***
# [Brown Bag](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic

***
# [4th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
# Lab / Q&A
***
# fin
