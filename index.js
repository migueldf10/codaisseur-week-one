// import express
const express = require('express')

// create server
const app = express()


// handler function
function onRequest() {
	console.log('after request')
}


// register GET /hello endpoint
app.get(
	'/', // route to listen on
	onRequest // callback runs when the route is requested
)
app.get(
	'/test', // route to listen on
	(request) => { // handler callback
		console.log('...testing')

		console.log(request.path)
	}
)

// register GET /hello endpoint
app.get(
	'/hello', // route
	(request, response) => { // handler callback
		// send data to client
		response.send(`<html>
			<head>
				<title>Test page</title>
			</head>
		
			<body>
				<h1>Testing 123</h1>
			</body>
		</html>`)
	}
)

// register GET /hello endpoint
app.get(
	'/movie/:title', // declares a parameter named title
	(request, response) => { // handler callback
		response.send(request.params.title)
	}
)

// 3000 is common
const port = 3000


// confirmation function
function onListen() {
	console.log(`Listening on :${port}`)
}

// start listening
app.listen(
	port, // TCP port where the server listens
	onListen // callback runs when server starts
)




console.log("testeaaando")