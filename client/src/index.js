import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import loadable from '@loadable/component'
import { Grommet } from 'grommet'
import LogRocket from 'logrocket'

import store from 'store'
import { theme } from 'theme'

import reportWebVitals from './reportWebVitals'

const App = loadable(/* istanbul ignore next */ () => import('views/App'))

LogRocket.init('endpoint/epcvip-test')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grommet theme={theme} full>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Grommet>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// eslint-disable-next-line no-console
reportWebVitals()
