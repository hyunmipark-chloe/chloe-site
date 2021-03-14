function navToggle(toggleClass) {
	let toggle = document.querySelector(toggleClass)
	toggle.addEventListener('click', () => {
		document.body.classList.toggle('nav-open')
	})
}

navToggle('.toggle')