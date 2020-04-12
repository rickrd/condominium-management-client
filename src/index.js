import React from 'react'
import ReactDOM from 'react-dom'
import { config } from 'dotenv'

import App from './App'
import './index.css'

config({ path: '../.env' })

ReactDOM.render(<App />, document.getElementById('root'))

