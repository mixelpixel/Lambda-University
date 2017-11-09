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


***
# [4th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Aaron Gallant: Security and Cryptography Mini
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
# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Aaron Gallant: Security and Cryptography Mini Solution
***
# fin
