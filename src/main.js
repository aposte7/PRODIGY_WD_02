import { Clock } from './Clock'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
      <div id="clock"></div>
  </div>
`

Clock(document.querySelector('#clock'))
