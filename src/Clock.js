export function Clock(element) {
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
              00
            </div>
          </div>
          
          <div class="clock_button">
            <button class="btn">Start</button>
            <button class="btn">Stop</button>
            <button class="btn">reset</button>
            <button class="btn">lap</button>
          </div>

      </div>
      
      <div class="clock_lap">
          <div class="clock_header clock_header-lap">
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
                  00
                </div>
            </div>
          </div>
          <div class="clock_header clock_header-lap">
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
                  00
                </div>
            </div>
          </div>
      </div>

    </div>
  `
}
