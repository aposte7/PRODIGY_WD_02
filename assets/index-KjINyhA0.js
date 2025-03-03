(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=l(s);fetch(s.href,e)}})();function S(r){let t={time:{hours:0,minutes:0,seconds:0,ms:0,elapsed:0},status:"not-started",laps:[]};r.innerHTML=`
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
  `;let l=0,n;const s=()=>{const a=t.time.elapsed,c=Math.floor(a/36e5),d=Math.floor(a%36e5/6e4),i=Math.floor(a%6e4/1e3),k=Math.floor(a%1e3/10);t.time.hours=c,t.time.minutes=d,t.time.seconds=i,t.time.ms=k},e=()=>{t={time:{hours:0,minutes:0,seconds:0,ms:0,elapsed:0},status:"not-started",laps:[]},r.querySelector(".clock_counter").innerHTML=`
			<div class="clock_wrapper">00<span class="separator">:</span></div>
			<div class="clock_wrapper">00<span class="separator">:</span></div>
			<div class="clock_wrapper">00<span class="separator">:</span></div>
			<div class="clock_wrapper">000</div>
		`,r.querySelector(".clock_lap").innerHTML=""},o=()=>{const a=Date.now();t.time.elapsed=a-l,s(),r.querySelector(".clock_counter").innerHTML=`
			<div class="clock_wrapper">${String(t.time.hours).padStart(2,"0")}<span class="separator">:</span></div>
			<div class="clock_wrapper">${String(t.time.minutes).padStart(2,"0")}<span class="separator">:</span></div>
			<div class="clock_wrapper">${String(t.time.seconds).padStart(2,"0")}<span class="separator">:</span></div>
			<div class="clock_wrapper">${String(t.time.ms).padStart(3,"0")}</div>
		`},u=()=>{t.status!=="running"&&(t.status="running",l=Date.now()-t.time.elapsed,n=setInterval(o,10))},p=()=>{t.status==="running"&&(t.status="stopped",clearInterval(n))},v=()=>{p(),e(),t.status="not-started"},m=()=>{t.status!=="not-started"&&(t.laps.unshift({...t.time}),f())},f=()=>{const a=r.querySelector(".clock_lap");a.innerHTML="",t.laps.forEach((c,d)=>{const i=document.createElement("div");i.className="clock_header clock_header-lap",i.innerHTML=`
				<div class="clock_counter">
					<div class="clock_wrapper">${String(c.hours).padStart(2,"0")}<span class="separator">:</span></div>
					<div class="clock_wrapper">${String(c.minutes).padStart(2,"0")}<span class="separator">:</span></div>
					<div class="clock_wrapper">${String(c.seconds).padStart(2,"0")}<span class="separator">:</span></div>
					<div class="clock_wrapper">${String(c.ms).padStart(3,"0")}</div>
				</div>
			`,a.appendChild(i)})};r.querySelector(".btn-start").addEventListener("click",u),r.querySelector(".btn-stop").addEventListener("click",p),r.querySelector(".btn-reset").addEventListener("click",v),r.querySelector(".btn-lap").addEventListener("click",m)}document.querySelector("#app").innerHTML=`
  <div class="main_body">
      <h1>Clock</h1>
      <div id="clock">
      </div>
  </div>
`;S(document.querySelector("#clock"));
