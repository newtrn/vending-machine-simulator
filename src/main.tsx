import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/routes/router'
import { Provider } from 'react-redux'
import store from './store'

import '@/assets/styles/global.css'
import '@/assets/styles/normalize.css'
import '@/assets/font/iconfont/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
