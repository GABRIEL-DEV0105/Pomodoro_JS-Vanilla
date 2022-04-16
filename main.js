import './style.css'
import { statusColor } from './acctions'

function getSelector(seletor) {
  return document.querySelector(`[data-js="${seletor}"]`)
}

const btnStart = getSelector('start')
const btnPause = getSelector('pause')
const btnStop = getSelector('stop')
const sec = getSelector('seconds')
const min = getSelector('minutes')
const container = getSelector('container')
const RED = 'red'

let isStart = false;

const fnPause = () => {
  isStart = false;
};

const fnStop = () => {
  isStart = false;
  sec.textContent = '0' + 0;
  min.textContent = '0' + 0;
  statusColor(RED, container)
};

const fnStart = () => {
  let newValueMin = +min.textContent
  if (newValueMin === 25) fnStop()
  if (newValueMin === 0) {
    statusColor(RED, container)
    fnPause()
  }

  isStart = true;

  const timer = () => {

    setTimeout(() => {
      if (isStart) {
      const newValueSec = +sec.textContent + 1;
      sec.textContent = (newValueSec < 10) ? '0' + newValueSec : newValueSec

      if (newValueSec === 60) {
        newValueMin = +min.textContent + 1;

        if (newValueMin === 25) {
          statusColor('greaen', container)
          fnPause()
        }

        min.textContent = (newValueMin < 10) ? '0' + newValueMin : newValueMin
        sec.textContent = '0' +0;
      }
      if (isStart) {
        timer()
      }}

    }, 1);
  }
  timer();
};



btnStart.addEventListener('click', fnStart)
btnPause.addEventListener('click', fnPause)
btnStop.addEventListener('click', fnStop)
