import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'

class App extends React.Component {
  render() {
    return <div className="app">Hello, World</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
