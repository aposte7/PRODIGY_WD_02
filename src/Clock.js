export function Clock(element) {
	let State = {
		time: {
			hours: 0,
			minutes: 0,
			seconds: 0,
			ms: 0,
			elapsed: 0,
		},
		status: 'not-started',

		laps: [],
	}

	element.innerHTML = `
    <div class="clock_container">
      <div class="clock_header">
          <div class="clock_counter">
            <div class="clock_wrapper">
               00
              <span class="separator">:</span>
            </div>
            <div class="clock_wrapper">
              00
              <span class="separator">:</span>
            </div>
            <div class="clock_wrapper">
              00
              <span class="separator">:</span>
            </div>
            <div class="clock_wrapper">
              000
            </div>
          </div>
          
          <div class="clock_button">
            <button class="btn btn-start">Start</button>
            <button class="btn btn-stop">Stop</button>
            <button class="btn btn-reset">reset</button>
            <button class="btn btn-lap">lap</button>
          </div>

      </div>
      
      <div class="clock_lap">
       
      </div>

    </div>
  `

	let startTime = 0
	let timeUpdateInterval

	const formatTime = () => {
		const milliseconds = State.time.elapsed
		const hours = Math.floor(milliseconds / 3600000)
		const minutes = Math.floor((milliseconds % 3600000) / 60000)
		const seconds = Math.floor((milliseconds % 60000) / 1000)
		const ms = Math.floor((milliseconds % 1000) / 10)

		State.time.hours = hours
		State.time.minutes = minutes
		State.time.seconds = seconds
		State.time.ms = ms
	}

	const clearCounter = () => {
		State = {
			time: {
				hours: 0,
				minutes: 0,
				seconds: 0,
				ms: 0,
				elapsed: 0,
			},
			status: 'not-started',

			laps: [],
		}
		element.querySelector('.clock_counter').innerHTML = `
			<div class="clock_wrapper">00<span class="separator">:</span></div>
			<div class="clock_wrapper">00<span class="separator">:</span></div>
			<div class="clock_wrapper">00<span class="separator">:</span></div>
			<div class="clock_wrapper">000</div>
		`
		element.querySelector('.clock_lap').innerHTML = ''
	}

	const updateCounter = () => {
		const currentTime = Date.now()
		State.time.elapsed = currentTime - startTime
		formatTime()
		element.querySelector('.clock_counter').innerHTML = `
			<div class="clock_wrapper">${String(State.time.hours).padStart(
				2,
				'0'
			)}<span class="separator">:</span></div>
			<div class="clock_wrapper">${String(State.time.minutes).padStart(
				2,
				'0'
			)}<span class="separator">:</span></div>
			<div class="clock_wrapper">${String(State.time.seconds).padStart(
				2,
				'0'
			)}<span class="separator">:</span></div>
			<div class="clock_wrapper">${String(State.time.ms).padStart(3, '0')}</div>
		`
	}

	const startCounter = () => {
		if (State.status === 'running') return
		State.status = 'running'
		startTime = Date.now() - State.time.elapsed
		timeUpdateInterval = setInterval(updateCounter, 10)
	}

	const stopCounter = () => {
		if (State.status !== 'running') return
		State.status = 'stopped'
		clearInterval(timeUpdateInterval)
	}

	const resetCounter = () => {
		stopCounter()
		clearCounter()
		State.status = 'not-started'
	}

	const recordLap = () => {
		if (State.status === 'not-started') return
		State.laps.unshift({ ...State.time })
		updateLaps()
	}

	const updateLaps = () => {
		const lapsContainer = element.querySelector('.clock_lap')
		lapsContainer.innerHTML = ''
		State.laps.forEach((lap, index) => {
			const lapElement = document.createElement('div')
			lapElement.className = 'clock_header clock_header-lap'
			lapElement.innerHTML = `
				<div class="clock_counter">
					<div class="clock_wrapper">${String(lap.hours).padStart(
						2,
						'0'
					)}<span class="separator">:</span></div>
					<div class="clock_wrapper">${String(lap.minutes).padStart(
						2,
						'0'
					)}<span class="separator">:</span></div>
					<div class="clock_wrapper">${String(lap.seconds).padStart(
						2,
						'0'
					)}<span class="separator">:</span></div>
					<div class="clock_wrapper">${String(lap.ms).padStart(3, '0')}</div>
				</div>
			`
			lapsContainer.appendChild(lapElement)
		})
	}

	element.querySelector('.btn-start').addEventListener('click', startCounter)
	element.querySelector('.btn-stop').addEventListener('click', stopCounter)
	element.querySelector('.btn-reset').addEventListener('click', resetCounter)
	element.querySelector('.btn-lap').addEventListener('click', recordLap)
}
