# Lambda University - September 13, 2017: Day 051, Wednesday
## Coding Challenge #47
- "Is Twin Prime?" available in https://repl.it/student/submissions/1559885
***
# [1st Lecture](VIDEO_RECORDED_NOT_POSTED) w/Tai Chulikavit: Review Code Challenge #47: isTwinPrime
- https://repl.it/student/assignments/395908/model_solution?fromSubmissionId=1559885

***
#### LUNCH
***
# [2nd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: LS-Mobile-II solution
- https://github.com/SunJieMing/Mobile-Server

***
# [3rd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Tai Chulikavit: LS-Mobile-II review
- https://docs.google.com/document/d/1itmqvls2ksdJNl1RmyySBD41XQxF66W7ZsMz0Z2mAJs/edit?usp=sharing

***
# [4th Lecture](https://youtu.be/vIa66wXNVOc) w/Thomson Comer: DevOps & Deployment intro
- deployment: taking your code and making it available for others to use.
- DevOps: goes to the internet and to your customer, DevOps is the part between you and the customer.
  - getting your code to server(s) and from server(s) to client

### []()
- SIMPLE DEVOPS Process: (each step involves MILLIONS of lines of code)
1. Configuring a computer (OS, hardware)
2. Connect a computer to the internet (or any network)
3. Configure software to open a socket, listens for and respond to connections (now Your code can run on this machine). Apache/old, now "nginx"
  - nginx does LOAD BALANCING and AUTOMATIC CACHE WEB SERVING
  - accepts multiple connections (usually port 80). nginx handles port80 traffic
  - caching - keeps a list of all files read and a copy of files
  - nginx connects to the internet
4. Your code involves customization, satisfies a specific task, business, hobby, etc.
5. make software "FAILURE TOLERANT" e.g. automatic restarting (don't want to crash and _stay_ crashed)
6. Make software DATA CONSISTENT(e.g. how to deal with simultaneous data submissions)

### [@18m30s](https://youtu.be/vIa66wXNVOc?=18m30s) "That's 'Simple' DevOps"

### [@21m30s](https://youtu.be/vIa66wXNVOc?t=21m30s) "Things are more complicated now"
- IP Addresses
- Router
- icann: int'l corp for assigned names and numbers
- Domain name purchasing (e.g. namecheap, godaddy)
- DNS
- whois guarding
- https the "s" is Security TLS transport Level Security, uses port 443 instead of 80.
- digicert.com SSL & PKI (public/private key pair)
- self sign certificates
- https://ngrok.com/

# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Tai Chulikavit: ngrok & DevOps & Deployment mini
# [6th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Thomson Comer: DevOps & Deployment Q&A
- Pair Programming #19: https://github.com/LambdaSchool/DevOps-Deployment w/Tyge
- continuuos integration & automatic deployment
- continuuous integration pipeline
- google tools

***
# fin
