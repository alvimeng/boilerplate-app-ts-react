import App from './App'
import * as ReactDOM from 'react-dom/client'
import * as React from 'react'


const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
