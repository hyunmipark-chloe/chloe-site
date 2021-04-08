function navToggle(toggleClass) {
	let toggle = document.querySelector(toggleClass)
	toggle.addEventListener('click', () => {
		document.body.classList.toggle('nav-open')
	})
}

navToggle('.toggle')




// Work filtering

function workFilter() {
	if (document.querySelector('.work-filters') && document.querySelector('.work-grid')) {
		let filters = document.querySelectorAll('.work-filters > div')
		let body= document.querySelector('body')
		for (let i = 0; i < filters.length; i++) {
			let filter = filters[i]
			filter.addEventListener('click', () => {
				let x = filter.className
				if (body.id === x) {
					body.id = ''
				} else {
					body.id = x
				}
			})
		}
	}
}
workFilter()







// Home page SVG stuff



// Call the draw function to set it up
// Pass in a selector to trigger it, and a duration in milliseconds
draw('.start', 10000)



// Draw function
function draw(selector, durationMS) {
	if (document.querySelector(selector)) {
		document.querySelector(selector).addEventListener('click', () => {
			drawSVGPaths(durationMS)
		})
	}
}

// Draw paths to correct length over time delay
function drawSVGPaths(time) {
	let paths = $('#paths')
	$.each(paths, function(i) {
		let totalLength = this.getTotalLength()
		$(this).css({
			'stroke-dashoffset': totalLength,
			'stroke-dasharray': totalLength + ' ' + totalLength
		})
		$(this).animate({
			'stroke-dashoffset': 0
		}, {
			duration: Math.floor(Math.random() * time) + time,
		})
	})
}

// Function to hide the SVG paths again
function hideSVGPaths() {
	let paths = $('#paths')
	$.each( paths, function() {
		let totalLength = this.getTotalLength()
		$(this).css({
			'stroke-dashoffset': totalLength,
			'stroke-dasharray': totalLength + ' ' + totalLength
		})
	})
}




// Landing screen

function landing() {
	if (document.querySelector('.landing')) {
		let landing = document.querySelector('.landing') 
		if (window.localStorage.getItem('visited') === 'true') {
			landing.classList.add('visited')
		} else {
			window.localStorage.setItem('visited', 'true')
		}
	}
}

landing()










console.log('Good morning')


let play = document.querySelector('.play')
let vid = document.querySelector('.vid')
let body = document.body
let planets = document.querySelector('.planets')
let jupiter = document.querySelector('.jupiter')

console.log(play)
console.log(vid)


/* EVENTS */

play.addEventListener('click', playPause)

jupiter.addEventListener('mouseenter', jupiterA)

jupiter.addEventListener('mouseleave', jupiterB)


/* FUNCTION */

function playPause() {

	if (body.id == 'playing') {
		vid.pause()
		planets.pause()
		body.id = ''
	}

	else {
		vid.play()
		planets.play()
		body.id = 'playing'
	}

}

function jupiterA() { 
	body.style.backgroundColor = '#000000'
	planets.play()

}


function jupiterB() { 
	body.style.backgroundColor = '#f8250'
	planets.pause()
}



