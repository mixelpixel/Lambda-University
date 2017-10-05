# Lambda University - October 04, 2017: Day 066, Wednesday
***
# [1st Lecture](VIDEO_RECORDED_NOT_POSTED) w/Tai: Code Challenge Review
***
#### LUNCH
***
# [2nd Lecture](https://youtu.be/TIS_03jK4P4) w/Thomson Comer: LS Operating Systems One solution
What the Operating System does:
1. Managing memory & memory virtualization
2. Process management and process scheduling
- create and destroy processes
- execute a process
- keep the process memory safe
3. File manager - the File Table
4. Loading and executing drivers

These all run in Kernel Mode
- vs User Mode which needs to ask permission

- Using `make` & Makefile with C to build gcc commands
```c
#include <stdio.h>
// #include "mystdio.h"
#include <stdlib.h>

// Makefile
// make

int main (int argc, char** argv) {
  // a gets the value 5
  // there is a memory address which holds the value 5
  // int a = 5 has an "implied" malloc - gets memory when compiled
  int a = 5;
  // ampersand converts integer into the reference
  printf("Process memory address of a: %p\n", &a);
  int* ap = &a;
  printf("Process memory address of ap: %p\n", ap);
  // pointer to b, pointer lives in heap
  // the variable is just a memory address
  int* b;
  printf("Process memory address of b: %p\n", b);

  // samesies
  puts("b has not been allocated yet");
  printf("%s", "b has not been allocated yet")
  b = malloc(sizeof(int));
  puts("b has been allocated");
  printf("Process memory address of b: %p\n", b);
  *b = 6;
  printf("Value of b: %d\n", *b);
  // free the memory
  free(b);

  // int* c = a;
  // printf("what is the binary value of a: %p", (void*)a);
  // pointer to a pointer
  // int** c;
  // cp->cp->c):
  // **c = 7;
  // printf("C; %d", **c);


  // malloc(thing);
  // // do some thing
  // free(thing);

  // no malloc
  int array[50];
  int i;
  for (i = 0; i < 50; ++i) {
    array[i] = i*i;
  }
  int ii;
  for (ii = 0; ii < 50; ++ii) {
    printf("%d", array[ii]);
  }

  // TODO how to convert an integer value into a binary output / memory address
}


```


***
# [3rd Lecture](NO_VIDEO_RECORDED) w/Thomson Comer: LS Operating Systems One review
- https://docs.google.com/document/d/1PP9qbD0ZzhPHtc6Dft9BVy714UdqH3szitxyPsSR7jQ/edit?usp=sharing

***
# [4th Lecture](https://youtu.be/tadDAQpjAE4) w/Thomson Comer: The C Programming Language Intro
- https://github.com/LambdaSchool/The-C-Programming-Language
- C is useful for programming:
1. Operating Systems
2. Systems with small amounts of resources
3. Systems which have to run as fast as possible

- Nothing you write on a computer does not become C or get executed by C

- The build process
- [@15m30s](https://youtu.be/tadDAQpjAE4?t=15m30s) does gcc produce machine specific binary or just machine executable binaries?

# [5th Lecture](https://youtu.be/IbcUJJhsz5c) w/Thomson Comer: The C Programming Language
[@1h30m29s](https://youtu.be/IbcUJJhsz5c?t=1h3m29s) - Assignment description
***
# fin
