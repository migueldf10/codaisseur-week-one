const continents = {
	china: 'Asia',
	japan: 'Asia',
	italy: 'Europe'
}

const entries = Object.entries(continents)

const messages = entries.map(entry => {
	const [country, continent] = entry

	return `${country} is in ${continent}`
})


const sameMessage = Object.keys(continents).map((key) =>
	(`${key} is in ${continents[key]}`)
)

// console.log(messages)
console.log(sameMessage)


