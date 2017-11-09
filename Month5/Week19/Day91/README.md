# Lambda University - November 08, 2017: Day 091, Wednesday
## Coding Challenge #80
- "Go Intro III: Functions and Pointers" available in https://repl.it/student/submissions/1943334
***
# [1st Lecture](https://youtu.be/mIhpRnLLhG0) w/Sean Chen: Review Code Challenge #80 goIntroIII
- https://repl.it/student/assignments/535531/model_solution?fromSubmissionId=1943334
- https://thenewstack.io/understanding-golang-type-system/

***
#### LUNCH
***
# [2nd Lecture](https://youtu.be/A7s_-yJ5lUA) w/Beej: Conway solution
- https://en.wikipedia.org/wiki/Bresenham's_line_algorithm

***
# [3rd Lecture](https://youtu.be/9rH571vvgnE) w/Aaron Gallant: Intro to Security and Cryptography
- Threat model: who are your adversaries? Who do you trust/not trust?
- Attack surface (what is vulnerable to attack?)
- Attack vector (how can these surfaces be attacked? Data i/o, user interface...)
- User Risk:
  1. Confidentiality (privacy)
  2. Integrity
  3. Availablity
- Nonce!
- https://en.wikipedia.org/wiki/RANDU
- https://www.theregister.co.uk/2014/03/16/ios_7_has_weak_random_number_generator/
- https://simple.wikipedia.org/wiki/RSA_(algorithm)
- http://pajhome.org.uk/crypt/rsa/implementation.html
- NIST: https://www.keylength.com/en/4/
- https://letsencrypt.org/
- https://help.github.com/articles/connecting-to-github-with-ssh/
- https://youtu.be/YEBfamv-_do


***
# [4th Lecture](https://youtu.be/JYU-3HmXHsg) w/Aaron Gallant: Security and Cryptography Mini
```
$ python
>>> from basic_rsa import *
>>> RsaAnswer
```

```py
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pickle  # Potentially useful for converting things to/from strings
from fractions import gcd
from random import SystemRandom, randint

# Math utility methods
def is_probably_prime(n, tests=5):
    """
    Determine if a given number is likely to be prime.
    Based on: https://rosettacode.org/wiki/Miller–Rabin_primality_test#Python
    """
    if n < 2: return False
    for p in [2,3,5,7,11,13,17,19,23,29]:
        if n % p == 0: return n == p
    s, d = 0, n - 1
    while d % 2 == 0:
        s, d = s + 1, d // 2
    for i in range(tests):
        x = pow(randint(2, n - 1), d, n)
        if x == 1 or x == n-1: continue
        for r in range(1, s):
            x = (x * x) % n
            if x == 1: return False
            if x == n-1: break
        else: return False
    return True

def modpow(x, n, m):
    if n == 0:
        return 1
    elif n == 1:
        return x
    elif n % 2 == 0:
        return modpow(x * (x % m), n // 2, m) % m
    elif n % 2 == 1:
        return (x *  modpow(x * (x % m), (n - 1) // 2, m) % m) % m

def egcd(a, b):
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = egcd(b % a, a)
        return (g, x - (b // a) * y, y)

def modinv(a, m):
    g, x, y = egcd(a, m)
    if g != 1:
        raise Exception('modular inverse does not exist')
    else:
        return x % m


class Rsa:
    """
    Simple implementation of RSA.
    Based on: http://pajhome.org.uk/crypt/rsa/implementation.html
    """
    def __init__(self, bitlen):
        self.rand = SystemRandom()  # This uses system randomness suitable for crypto
        self.bitlen = bitlen
        # TODO - implement RSA

    def _generate_large_random_prime(self):
        """Generate a large hopefully-prime number from 0 to 2^bitlen - 1"""
        # TODO implement, using is_probably_prime utility method
        pass

    def encrypt_int(self, num):
        pass

    def decrypt_int(self, num):
        pass

    def encrypt_string(self, plaintext):
        pass

    def decrypt_string(self, ciphertext):
        pass

    def encrypt_for_other(self, plaintext, other_e, other_n):
        pass
```

***
# [5th Lecture](https://youtu.be/U14cPfdwuXw) w/Aaron Gallant: Security and Cryptography Mini Solution
```
Some of the links I mentioned in the intro lecture (and other resources):
http://www.cnn.com/2016/10/28/politics/phishing-email-hack-john-podesta-hillary-clinton-wikileaks/index.html
Wikipedia is pretty good for most of these topics, e.g. https://en.wikipedia.org/wiki/Exclusive_or
Video on the role and history of certificate authorities: https://www.coursera.org/learn/internet-history/lecture/L7HzI/security-integrity-and-certificate-authorities
https://www.schneier.com - Bruce Schneier’s blog (respected security figure)
https://security.stackexchange.com to get a taste of current affairs (it’s often pretty advanced questions though)
Heartbleed (impact of modern security failures): https://xkcd.com/1353/
Security (picking your threat model): https://xkcd.com/538/
SQL injection: https://www.xkcd.com/327/
Password Strength (Horse Battery Correct Staple): https://www.xkcd.com/936/
https://www.ece.cmu.edu/~ganger/712.fall02/papers/p761-thompson.pdf - “Trusting Trust”, historic paper showing how hard security problems are
http://www.openwall.com/john/ - more “industry-grade” password cracker
https://cryptopals.com - Crypto challenges, if you want to practice/learn about in more detail
https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/august/javascript-cryptography-considered-harmful/ - Famous if controversial/dated, worth acknowledging and being aware of
http://www.moserware.com/2009/09/stick-figure-guide-to-advanced.html - fairly approachable guide to AES, the most widely used symmetric crypto algo (natively supported in Intel chipsets and elsewhere)
Also: https://keybase.io http://www.daemonology.net/blog/2009-06-11-cryptographic-right-answers.html https://twofactorauth.org/ https://tweetnacl.js.org/ and I think that's most of it
```
***
# fin
