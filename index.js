// import express
const express = require('express')
// create server
const app = express()
const patients = require("./patientsData");




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
			
				<td><a href="/patients/${patient.id}">` + index + '</a></td>'
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


function patientView(request, response) { // handler callback
	const patient = patients.find(patient => patient.id == request.params.id)
	console.log(patients)

	if (patient) {
		response.send(`
			<html>
			<head>
			<title>This is the PATIENT page</title>
			</head>
			
			<body>
			<h1>This is the Patient page of the individual with ID ${patient.id} and name ${patient.firstName}</h1>
			<table>
			<tr>
				<th>
					Name
				</th>
			</tr>
			<tr>
				<td>
					${patient.firstName}
				</td>
			</tr>
			</table>

			<a href="/">Back to patients</a>
			
			</body >
			</html > `)
	} else {
		response.send(`<html>
			<head>
			<title>This is the PATIENT page</title>
			</head>
			
			<body>
				<h1>NOTHING WAS FOUND</h1>
				<a href="/">Back to patients</a>
		
			
			</body >
			</html > `)
	}
}





// register GET endpoints
app.get(
	'/', // route
	patientsView

)

// register GET /hello endpoint
app.get(
	'/patients/:id', // declares a parameter named title
	patientView
)

// 3000 is common
const port = process.env.PORT || 3000

// confirmation function
function onListen(robotName) {
	console.log(`Hola Miguel, you can call me ${robotName} now Listening on port: ${port}`)
}

// start listening
app.listen(
	port, // TCP port where the server listens
	onListen('HAL 9k') // callback runs when server starts
)
