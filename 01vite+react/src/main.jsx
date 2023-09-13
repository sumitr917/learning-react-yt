import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'> Google </a>
)
const anotherUser = 'me'
const reactElement = React.createElement(
  'p',
  {href:'https://google.com', target:'_blank'},
  'click to visit google!',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  //anotherElement
  reactElement
)
