
# philosophy of computer science
  This lecture is just a review of some concepts which have helped me to advance in my endeavors with computer science by means of analysis. By "analysis" I just mean breaking things down into their constituent parts to see how they all fit together. So let's do that...

### Useful tools for analysis
  1. Backus-Naur form
    - A way of analyzing sentences or algorithms into a context-free grammar.
    - For example, a sentence like, "Patrick complains" can be broken down into "NOUN VERB"
      - Once we see the pattern of "NOUN VERB" we can replace the structure with other nouns and verbs
      - Just like a MadLib we could say:
        - "Bob jumps" or
        - for the De La Soul fans:
        - "Jennifer took my favorite penny"
    - Basically analyzing the Backus-Naur Form is like what we do in programming when we think of how an expression will get reduced to true or false, or, how a variable is used in a way that it gets evaluated into a value.
    - Mostly it's just a way of abstracting a sentence or an expression into the logical form, i.e.
      - the parts which can be built upon, or, reducing grammar from the actual arguments used into the types of parameters so that similar senteces or alogrithms may be constructed.
    - another example is how I will build upon a constrained use of the word "philosophy" to the translation from the ancient Greek such that any instance of "...philosophy..." can be replaced with an unambiguous term. In this manner, analyzing statements into Backus-Naur Form can help to avoid ambiguity.
  2. Truth Tables & logical form devoid of semantic context (i.e. just syntax)
    - operands (the terms of an expression) and operators, e.g. (p or q where p and q are the operands and "or" the operator).
    - It may be true or false the "Brad and Angelina are divorced" or "p".
    - It may be true or false that "the earth is ~93 million miles from the sun" or "q"
    - So how do we evaluate a sentence which uses more than one knowledge claim? e.g. (p and q) or (p or q)?
    - Q: how do we evaluate the results of all the possible combinations of whether p is true or false and whether q is true or false?
    - A: Truth tables are used to abstract the claims into symbols and examine all possible combinations in binary terms of true/false (or on/off if you prefer)
      1. and &&
        - (T & T) ==> T
        - (T & F) ==> F
        - (F & T) ==> F
        - (F & F) ==> F
      2. or (inclusive) ||
        - (T or T) ==> T
        - (T or F) ==> T
        - (F or T) ==> T
        - (F or F) ==> F
      3. or (exclusive)
        - (T xor T) ==> F
        - (T xor F) ==> T
        - (F xor T) ==> T
        - (F xor F) ==> F
      4. if p, then q (principle of explosion)
        - (if T, then T) ==> T
        - (if T, then F) ==> F
        - (if F, then T) ==> T <--- principle of explosion!!! From falsehood, anything follows - oh no!!!!!
        - (if F, then F) ==> T
    3. Logic can quickly get weird and very unintuitive, but an important notion is the idea of syntax devoid of semantics (of meaning). This is the means by which computers utilize the meaningless sequences of binary state changes to get things done. No muss and fuss with ambiguities, just either on or off, high voltage or low voltage, crushed beer can, uncrushed beer can; dead fish/live fish. No in between. In much the same way that the world is made up of mindless, meaningless wave-particles in fields of force, computation uses the flow of meaningless strings of binary, semantic-free states and the computer scientist and engineer implement this flow in such a way that it is useful.

### What is philsophy?
  - I am going to try and demonstrate how philosophy can be used to answer the questions
    1. How do I know something?
    2. How do I know that I know what I know?
  - For starters, some use the term "philosophy" to mean things like
    1. "how we'd like the world to be" or
    2. "a way of looking at things" and sometimes the term is used to just mean
    3. "...my opinion."
  - As such, the use of the term can be somewhat ambiguous.
  - To avoid logcial pitfalls when using ambiguous terms, I will be constraining my use of the term "philosophy" for the duration of this lecture the sense of the translation from the original ancient Greek:

### "love of wisdom"
#### in the sense of the tranlsation we can analyze the word philosophy:
  1. "philo-" loosely means what we use the term "love" for, but not "love" in the way we might mean romantic love;
  2. "philo-" is more akin to:
    -  Respect
    -  Reverence
    -  Virtue
  3. "-sophy" means _wisdom_
  4. ... in short philsophy translates to **the virtue of** or **respect for wisdom.**
  5. of NOTE: upon initial utterance of the term some 2500+ years ago - and as best we can tell from record - _philosophy_ was distinguished from _sophistry_. In the sense of the Greek translation, sophistry was professional wisdom, such as we might consider a lawyer, a consultant or a politician today. A sophist, then, someone skilled in the art of rhetoric whose knowledgeable counsel might otherwise be relative to the party paying for their knowledge. The philosopher, on the other hand, was then an amateur, and philosophy only concerned with the truth of knowledge claims, regardless of the market value of dispensing such knowledge claims.

#### So philosophy is reverence for wisdom... but just what the heck _is_ "wisdom" then??
  1. At it's core wisdom requires _knowledge_.
  2. Wisdom, in fact, _obtains_ knowledge.
  3. It is worth pointing out that philosophy is not just reverence for knowledge, but reverence for _obtaining_ knowledge, or, respect for _gaining_ knowledge.
  4. With this in mind, maybe you can get a sense of how philosophy is not a particular thing you do or just an abstract concept removed from reality, nor is philosophy any particular area of study. Philosophy is something which is _actionable_... you can do something with it, in particular: you can gain knowledge.

#### So if philosophy is love of wisdom and wisdom obtains knowledge, then what is "knowledge"?
  1. In the past 2500+ years, many have tried to construe and pin down knowledge as something to do with "beliefs which are both justified and true". This is basically a muddle of hogwash and an open door to all sorts of nonsense.
  2. Put plainly, knowledge is quite mundane, imperfect and limited: knowledge simply is _empirical verification of what is_
    - "Empirical verification" is just a way of saying: confirmation by observation; through the senses: sight, sound, touch, taste and for better or worse, smell.
    - "what is" is just a way of saying "the world" "the case" "states of affairs" or "that which is in front of me" and so on.
    - For example, right now you are observing me and can verify the statement that "Patrick is speaking to the Lambda University class" so, you _know_ this to be true.

#### In short: philosophy is _respect for obtaining observational verification of the world_
  1. When I speak of verifying "what is" or "confirming statements about the world", I mean "the world" in the sense of _all that which is observationally verifiable_, e.g. **the whole world** is from the boundary of subatomic decoherence to astronomical event horizons: in short, everything, right now. But, more mundanely, what anyone is capable of knowing is just that which is in their immediate field of vision or hearing, et cetera
  2. In this sense:
    - philosophy is not a matter of agreement nor interpretation.
    - philsophy is not an -ology, an area of study
    - philosophy is not to be confused with the history of philosophy or the history of philosophers.
    - respect for obtaining knowledge is heuristic. This is just a way of saying that philosophy simply _enables_ learning.
    - To enable learning, respect for wisdom contends not with opinion or sentiment, or a metaphor, or a way of construing the case, a view, or in the German, a _weltanschauung_, but philosophy contends with what is the case and what can be said of the case and it does so in terms of that which is exclusively either true or false with no middle ground.
  3. the **purview** of philsophy is: *logic, reason and rhetoric*
    - _Rhetoric_ is just a fancy way of saying, "how you use your words."
    - _Reason_ is basically just the art of using logic to deduce, to induce and to abduce (and abduce is just a fancy way of saying, "guessing").
    - _Logic_ is just the artifice, or, set of tools, which we use to reason.
  4. Given this purview, the **domains** of philosophy are:
    - Epistemology, or the study of knowledge and statements of knowledge, and
    - Ontology, the study of reality, or what exists - and I'll put it out there that what exists is the (at most one) world which we live in. An example of something which doesn't exist is ideas or abstractions. Like a Euclidian circle (all points upon a two dimensional plane which are equidistant from a point), abstract ideas are only to be found in language - they do not exist.

#### So what is the philosophy of computer science?
  1. In short: respect for obtaining knowledge with and of computer science.
  2. And what is computer science?
  3. Well, _science_ is, in no particular order:
     - observation
     - hypothesis, and
     - peer review
  4. A computer is just something which _computes_ (see _Turing Completeness_) or something which is limited to making syntactical manipulations, without any seamntics.
  5. SO, if you have repsect for obtaining knowledge with computational observation, hypothesis and peer review, then you are doing computer science and may even be meaningfully referred to as _a computer scientist_ (degrees and PhD's regardless!)

### For an elementary example
  1. given what I already understand about the console, if I type a command, it is my hypothesis that entering that command will return a result.
    - if you want, you can all fire up node in your console and test the hypothesis that `true && true` will return `true`...)
  2. ...and yes, this is really basic stuff √
  3. Say I can make a knowledge claim, e.g. "when I enter this command, such and such results will follow."
  4. That statement is either true or false. The truth condition is satisfied if node returns `true` and the statement is true, and if it fails, then the truth condition is unsatisfied, frustrated... _grumpy_ (!) and the statement is false.
  5. Anyone else can then peer review this hypotheis and test procedure and themselves _know_ if that statement corresponds to the case, i.e. is true, by simply verifying the hypothesis, i.e. by entering the command and seeing if the predicted results occur.
  6. hypothesis, peer review, observation.
  7. ta-da!

### NOTE
  - like I limited the use of philosophy, I am also using a limited sense of the word "true" to just mean that what I say matches, fits or "corresponds to" the case, i.e. what is said is matches what is, i.e. "P" is true iff P is the case.
  - I'm not trying to construct some grandiose or profound notion of capital T truth or capital P philosophy.
  - I just find that it is useful to explicitly articulate these really basic, fundamental things because, unlike a simple console command, computer science and the rest of the world gets very complicated, ambiguous and confusing really quickly.
  - When I am lost or overwhelmed, I can use these analytial tools to find solid ground from which to reorient or build upon.

## So, in summation, the respect for obtaining knowledge can be applied to computaional observation, hypothesis and peer review. With that in mind my fellow computer scientists, remember to be nice to your pair partner and the person you make a Pull Request to because they will be observing your hypotheses and hopefully advancing your knowledge claims :D


### I will leave you with the three kinds of knowledge and the three answers to every question, "why?"
### Three kinds of empirical verification:
  1. Axiomatic, or, self evident knowledge
    - e.g. "dividends require financing" or "2 + 2 = 4"
    - things which are true by definition
    - also, tautologies, basically things which are saying the same thing backwards and forwards, e.g. many things may add up to four, but the statement "4 = 2 + 2" is the same statement as "2 + 2 = 4"
  2. Empirical Knowledge
    - you can backus-naur this into _empirically verifible empirical verification_ if you really want to
    - e.g. "brute" facts, such as "the earth is ~93 million miles from the sun" or "the bell of Big Ben weighs 13,760 kilograms."
    - e.g. "institutional" facts such as "Brad and Angelina are divorced" or "Bernie Sanders a Senator from Vermont"
  3. Self-knowledge
    - e.g. "I feel glad", "that tickles" or "I'm thirsty"
    - self knowledge is essentially knowledge of the self _by_ the self.
    - I don't mean some deep, introspective intuition, I just mean the things a self can verify about their own self.
    - This one particular kind of knowledge, for better or worse, is **only** verifiable by the self and no others. Someone else can agree with me when I say, "I feel glad" and they may observe my demeanor and behaviour and presume as much, but this is categorically distinct from anyone else empirically verifying my self-knowledge.
    - This aspect of what is sometimes called the irreducible first-person ontology of consciousness presents and epistemic limitation. But I digress.
### Three answers to every question, "why?"
  1. Why not?
  2. Because...
   - Often when "why?" is aksed in place of "how?" there actually is a cause which can be cited, but "because" can be ambiguous. For example:
   - Q: "Because I am cold" answers two different questions very differently
     1. A: "Why are you shivering?"
     2. A: "Why are you putting on your sweater?"
     - In the former case, _cause_ is cited, in the second case, _reason_.
  3. You have to figure that out for yourself, silly!

## Things to review - SKIP???????????
  1. Truth - a condition of propositions; the correspondence of what is said is the case and what actually is the case. If a statement matches or fits or _corresponds to_ the case, then that statement is true.
  2. It is worth noting that truth is just an abstract idea. Like all abstract ideas, truth is an epistemic notion - it does not exist in the sense that you and I or Mount Kilamanjaro do. Abstract ideas are only to be found in language - much like an Euclidian circle or something "perfect", these abstract ideas do not exist. How we use this "correspondence" condition for determining the truth value of a statement is not some profound, deepity or capital T truth for all time and all places, just the here and now.
  3. Hypothesis: a guess can be an hypothesis, but hypotheses which are both verifiable and falsifiable are generally more apt to advance a knowledge claim
  4. It is worth distinguishing statements of what is true from what is "true to you" (or true to me, or true to them or true to us). Statements of what is true are verifiable and falsifiable, for example, the statement "it is raining" could be true or false depending on the climate conditions of the person making the claim. Statements of what is "true to..." [you; me; us, or them] are basically statements of opinion, belief, sentiment, or an expression from a way of interpreting things... a way of looking at thing. These are all well and good, but categorically distinct from statments which are exclusively either true or false. It may be true to you that Bill Clinton was a better President than Ronald Reagan, and it may be true to someone else that Reagan was a better President. Whatever the opinion, however, the statement that "Ronald Reagan is the President of these united States" was true in the 1980s, but if the statement were made today, it would be false.
  5. To illustrate: if "a way of looking at the world" were adequate to determine the case, then an oasis and a mirage would have both epistemic and ontological equivalence. They do not.
  6. Logical fallacies: fallacy of ambiguity; the unilluminating appeal to skepticism; hmm....
