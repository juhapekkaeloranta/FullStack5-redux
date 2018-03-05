import React from 'react'
import ReactDOM from 'react-dom'
import Store from './counterReducer'

const Statistiikka = ({ votes, resetHandler }) => {

  if (votes.good === 0 && votes.ok === 0 && votes.bad === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{votes.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{votes.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{votes.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{((votes.good - votes.bad) / (votes.good + votes.ok + votes.bad)).toFixed(2)}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{(votes.good / (votes.good + votes.ok + votes.bad)).toFixed(2) * 100}%</td>
          </tr>
        </tbody>
      </table>

      <button onClick={resetHandler}>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  clickHandler = (palaute) => () => {
    //console.log('klikattu', nappi)
    Store.dispatch({ type: palaute })
    //console.log(store.getState())
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.clickHandler('GOOD')}>hyvä</button>
        <button onClick={this.clickHandler('OK')}>neutraali</button>
        <button onClick={this.clickHandler('BAD')}>huono</button>
        <Statistiikka votes={Store.getState()} resetHandler={this.clickHandler('RESET')}/>
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
Store.subscribe(renderApp)