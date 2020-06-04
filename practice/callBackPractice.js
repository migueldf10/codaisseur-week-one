function sayHelloRepeatedly(message, repeatedTimes) {
	// Receives a message and a number of times
	// returns the message repeated many times

	let response = []
	for (i = 0; i < repeatedTimes; i++) {
		response.push(message)
	}
	return response
}

function myCallback(myFunction, booleanVar) {
	// Composes and returns an object

	const timesRepeated = 8
	const response = {
		message: myFunction('Welcome, it\'s Miguel', timesRepeated),
		meta: `The message has been repeated ${timesRepeated} times`,
		doYouUnderstandThis: `And I ${booleanVar ? 'understand' : 'don\'t understand'} it`
	}
	return response
}

// Call the callback function, will return a populated object takes the action and a boolean.

// This is done by express and we can't see it
const myFakeExpressGetFunction = myCallback(sayHelloRepeatedly, true)

//See the shape of the object. Would be the params we access to build a response
console.log(myFakeExpressGetFunction)
