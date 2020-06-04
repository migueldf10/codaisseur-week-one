// import express
const express = require('express')
// create server
const app = express()
const patients = require("./patients");


// handler function
function onRequest(request, response) {
	{ // handler callback
		// send data to client
		response.send(`
		<html>
			<head>
				<title>This is the ${request.path} page</title>
			</head>
		
			<body>
				<h1>This is the ${request.path} page</h1>
				<p>Here is the default response</p>
			</body>
		</html>`)
	}
}


function patientsView(request, response) {
	// handler callback
	// send data to client
	const displayKeys = Object.keys(patients[0]).map((key) => '<th>' + key + '</th>').join('')
	response.send(`
<html>
	<head>
		<title>This is the ${request.path} page</title>
	</head>

	<body>
		<h1>This is the ${request.path} page</h1>
		<p>Here are all the patients</p>
		<table>
		<tr>
		<th>Number</th>
		${displayKeys}
		
		</tr>
		
		${patients.map((patient, index) => {
		return (
			`<tr>
				<td>` + index + '</td>'
			+ Object.values(patient).map((value) => {
				return ('<td>' + value + '</td>')
			}).join('')
			+ '</tr>'
		)
	}).join('')}
		</table >
	</body >
</html > `)
}


function patientView(req, res) {

}


// register GET /hello endpoint
app.get(
	'/', // route to listen on
	onRequest // callback runs when the route is requested
)


// register GET endpoints
app.get(
	'/patients', // route
	patientsView

)

// register GET /hello endpoint
app.get(
	'/patients/:id', // declares a parameter named title
	(request, response) => { // handler callback
		response.send(request.params.id)
	}
)

// 3000 is common
const port = 3000

// confirmation function
function onListen(robotName) {
	console.log(`Hola Miguel, you can call me ${robotName}.Listening on port: ${port}`)
}

// start listening
app.listen(
	port, // TCP port where the server listens
	onListen('HAL 9000') // callback runs when server starts
)
