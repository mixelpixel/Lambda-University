// Example from lecture

const pizza = {
	toppings: ['pepperoni', 'bell pepper', 'onion', 'chese'],
	sauce: 'tomato',
	isReady: false,
	table: 4,
	bake() { // ES6 shorthand for declaring method on object
		console.log('the pizza is baking');
    // pizza.isReady = true; // directly referencing object
    this.isReady = true; // <------- REFERENCING THE OBJECT
    console.log(pizza);
	}
};

// pizza.bake(); // ---> the pizza is baking

function foo() {
  console.log(this);
}

// foo(); // <---- PRINTS GLOBAL OBJECT

foo.call(pizza); // <--- explicitly sets the context of `this`
