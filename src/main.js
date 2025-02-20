import { Clock } from './Clock'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="main_body">
      <h1>Clock</h1>
      <div id="clock">
      </div>
  </div>
`

Clock(document.querySelector('#clock'))
