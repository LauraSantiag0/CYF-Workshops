let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));

/*
// a) How many function calls are there in this file?

two

// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing

VIts is trying to replace the value of the variable secret with x in the confession string
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?

dois porque voce precisa dizer o que esta substituinso e o que vai substituir

// d) How any inputs do we pass to repeat when we call it?  How can you tell?

um porque voce so precisa dar o numero para repetir

// e) What kind of statement is on line 7?

it is reassinings the variable