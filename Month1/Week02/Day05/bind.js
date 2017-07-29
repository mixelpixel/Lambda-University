function speakBasic(name) {
  console.log('Hello, my name is: ' + name);
};

speakBasic('Ryan');


// *****************************************************************************

function speakThis() {
  let saying = this.saying; // <--- currently undefined
  console.log(saying);
};

const Yoda1 = {
  saying: 'Judge me by my size, do you?',
}

speakThis(Yoda1); // <--- Yoda has the speak property, but it isn't bound yet to function "undefined"

// *****************************************************************************

function speak() {
  let saying = this.saying; // <--- currently undefined
  console.log(saying);
};

const Yoda = {
  saying: 'Judge me by my size, do you?',
}

const bindToYoda = speak.bind(Yoda); // binding speak to Yoda object
bindToYoda();

const YoungAni = {
  saying: 'IIIIIIIIt\'s WOOOOOOOrking!!!!!!!!',
}

const bindToYoungAni = speak.bind(YoungAni);
bindToYoungAni();

speak(); // <-- now undefined
