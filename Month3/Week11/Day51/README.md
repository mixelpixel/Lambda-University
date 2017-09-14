# Lambda University - September 13, 2017: Day 051, Wednesday
## Coding Challenge #47
- "Is Twin Prime?" available in https://repl.it/student/submissions/1559885
***
# [1st Lecture](https://youtu.be/wNPKVuKBWxo) w/Tai Chulikavit: Review Code Challenge #47: isTwinPrime
- https://repl.it/student/assignments/395908/model_solution?fromSubmissionId=1559885

***
#### LUNCH
***
# [2nd Lecture](https://youtu.be/u2A_7eOs0nQ) w/Ben Nelson: LS-Mobile-II solution
- https://github.com/SunJieMing/Mobile-Server

***
# [3rd Lecture](NO_VIDEO_RECORDED) w/Tai Chulikavit: LS-Mobile-II review
- https://docs.google.com/document/d/1itmqvls2ksdJNl1RmyySBD41XQxF66W7ZsMz0Z2mAJs/edit?usp=sharing

***
# [4th Lecture](https://youtu.be/vIa66wXNVOc) w/Thomson Comer: DevOps & Deployment intro
### [@49](https://youtu.be/vIa66wXNVOc?t=49s) WHAT ARE DEVOPS & DEPLOYMENT?
- Deployment: taking your local code and making it available for others to use. E.g.
  1. Deploying to the web
  2. Firmware code for hardware
  3. internally deploying a toolset or library to your team
- Development Operations: goes to the internet and to your customer, DevOps is the part between you and the customer.
  1. Deploying websites in a professional environment on the web
  2. getting your code to server(s) and from server(s) (i.e. the delivery through the internet) to client
  3. INFRASTRUCTURE and how to use it effectively

### [6m40s](https://youtu.be/vIa66wXNVOc?t=6m40s) SIMPLE DEVOPS
[Simple Dev Ops CHART](https://www.lucidchart.com/documents/edit/006e89fb-e3fc-43a8-bc62-16e5dc8f7b82?shared=true&)
- Process: (each step involves MILLIONS of lines of code)
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
- usenet (thank you DARPA)
> "One of these was in someone's basement and it had a wire connected to it."

### [@21m30s](https://youtu.be/vIa66wXNVOc?t=21m30s) "Things are more complicated now"
- IP Addresses
- Router
- icann: int'l corp for assigned names and numbers
- Domain name purchasing (e.g. namecheap, godaddy)
- DNS
- whois guarding
- https the "s" is Security TLS transport Level Security, uses port 443 instead of 80.
- certificates
- digicert.com SSL & PKI (public/private key pair)
- self sign certificates
- https://ngrok.com/ <~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ THIS!!!!!!!!!!!

# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Tai Chulikavit: ngrok & DevOps & Deployment mini
# [6th Lecture](https://youtu.be/IPUZj48-dMg) w/Thomson Comer: DevOps & Deployment Q&A
- Pair Programming #19: https://github.com/LambdaSchool/DevOps-Deployment w/Tyge
- **continuuos integration** & **automatic deployment**
- continuuous integration pipeline
- google tools google cloud platform cloud-slack-bot
- Jenkins-Hudson
- https://en.wikipedia.org/wiki/Comparison_of_continuous_integration_software
- [Continous Integration CHART](https://www.lucidchart.com/invitations/accept/bcf25fe7-0ceb-4f5c-966b-97705455d0a3)

***
# fin
