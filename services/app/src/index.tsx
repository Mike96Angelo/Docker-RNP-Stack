import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        // tslint:disable-next-line: no-console
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        // tslint:disable-next-line: no-console
        console.log('SW registration failed: ', registrationError)
      })
  })
}

class App extends React.Component {
  render() {
    return <div className="app">Hello, World</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
