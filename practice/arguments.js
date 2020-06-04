function movie(title) {
	const typed = `movie is ${title}`
	return typed
}

function favorite(type, title) {
	const typed = type(title)
	const memory = `My favorite ${typed}`
	console.log(memory)
}


favorite(movie, 'gru')