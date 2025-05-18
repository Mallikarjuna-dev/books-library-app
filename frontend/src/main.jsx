import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { checkCurrentUser } from './redux/actions/authActions.js'
import { fetchBooks } from './redux/actions/bookActions.js'

store.dispatch(checkCurrentUser());
store.dispatch(fetchBooks());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
