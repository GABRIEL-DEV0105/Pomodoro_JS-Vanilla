// import './style.css'

//  export const statusColor = (color, el) => {
//   console.log(el)
//   color === 'green' ? el.style.backgroundColor =  'green' : ''
//   color === 'red' ? el.style.backgroundColor =  '#bf3b3b' : ''
// }
const obj = {
  red: "#bf3b3b",
  green: "green",
};

export const statusColor = (color, el) => {
  if (color in obj) {
  el.style.backgroundColor = obj[color]
  return
  }
  console.alert(`O valor ${color} n existe no obj`)
}

