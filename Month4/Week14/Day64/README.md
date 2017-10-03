# Lambda University - October 02, 2017: Day 064, Monday
## Coding Challenge #54 - extended from Friday
- "Full Adder" available in https://repl.it/student/submissions/1721915
***
# [1st Lecture](https://youtu.be/9Rqk8aV8-SU) w/Tai Chulikavit: Review Code Challenge #54: fullAdder
- https://piazza.com/class/j63w1pdyopf7kj?cid=59

***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Thomson Comer: Computer Architecture Two Review
- https://docs.google.com/a/lambdaschool.com/document/d/1Lg6EpQUBaPzx_LunogI7XPiRMkfpctNoQP-1gks093E/edit?usp=sharing

***
# [3rd Lecture](https://youtu.be/4q3LlOZLjPo) w/Thomson Comer: Computer Architecture Two Solution
- peripherals

***
#### LUNCH
***
# [4th Lecture](https://youtu.be/RQ0cu_vbCPw) w/Thomson Comer: Operating Systems Intro
- https://github.com/LambdaSchool/Operating-Systems-One
- https://www.lucidchart.com/documents/edit/77a3b0fc-fc46-4c9f-9ce5-30c1b3597642?shared=true&
- process scheduler (time share)
- see: `top` & `ps` (process status)
  - e.g. `$ ps -A`
- BOOT, Power On Self Test (POST), Built In Operating System (BIOS), Master Boot Record(MBR), initial kernel process excutes
- Operating System Kernel > Kernel system process > Load programs for: Process Scheduling, Memory Management, File table, Drivers(I/O) > LOOP
- Kernel level system commands
- http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf

# [5th Lecture](https://youtu.be/upqmNSdpHi4) w/Thomson Comer: Operating Systems
- NIC: network interface card
- re: peripherals, Kernel talks to Drivers
- Memory Manager
- File Table Manager
- Process Scheduler
- System calls can only be made in C (or assembly)
- How to get answers for C when using it?
- vim hex mode: `:%!xxd` https://vi.stackexchange.com/a/2234
- `$ echo $?` will display the return value of the compiled C program file
- if C program returns other than 0, that's a msg that something went wrong.

```c
// every C program is an operating system process/executable

// argc is argument count
// char** is a pointer to a pointer

/*
 * Multi line comments
 */

// #includes allow us to combine different files into a single program
// #including can be pointed at a file you wrote, or it can be pointed
// at a file somebody else wrote. You have to know where the file is. And
// whether or not it is the one you need.

// examples of return values and strictly types function definitiona
int integerFunction (int input) {
  return 0;
}
float floatFunction (float input) {
  return 0.0;
}
// overloading functions?
float mixedFunction (int input) {
  return 0;
}
float mixedFunction (float input) {
  return 0.0;
}
float mixedFunction (char* input) {
  return 'a'; // <~~~ equals '97' on ASCII table
}

// structures in C - objects
// snake case
struct lat_lon {
  float lat;
  float lon;
};
// camel case
struct latLon {
  float lat;
  float lon;
};

#include <stdio.h>

int main (int argc, char** argv) {
  // char** means one of two things: someone is doing a complicated algorithm with this object

  // or it means it is a two dimensional array like this char[][]
  //
  // argv = [
  //  ['g','c','c'],
  //  ['c','f','i','l','e']
  //  ['H', 'i']
  // ]
  // in C a string is an array of characters
  // a string is in 'double quotes'
  // a character (char) is in 'single quotes'

  // return 0;
  // vs
  // return 100;
  // use console 4 echo $? to display return value

  // printf REQUIRES the standard Input Output (stdio.h) library
  printf("argc is: ");
  // what is argc???
  printf("%d\n", argc);
  printf("%f\n", argc); // <~~~ prints 0.0000 WHY?

  // dynamic
  for(int i = 0; i < argc; ++i) {
    printf("%s\n", argc[i]);
  }

  printf("%f\n", mixedFunction(0.0));
  // forced type conversion
  printf("%c\n", (int)mixedFunction(0.0));
}

lat_lon myLocation;
myLocation.lat = 22.5;
myLocation.lon = 21.3;
printf("%p\n", myLocation);
// & memory location
printf("%p\n", &myLocation);
```

# [6th Lecture](NO_VIDEO_RECORDED) w/Thomson Comer: Operating Systems Q&A
***
# fin
