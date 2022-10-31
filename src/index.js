import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//domain dev-6x1vjgpryfcbbxgx.us.auth0.com
//client id 8pIIJvfwsVysXe68WBI51X4YubshHiCI
// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain='dev-6x1vjgpryfcbbxgx.us.auth0.com'
    clientId='8pIIJvfwsVysXe68WBI51X4YubshHiCI'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
  // </React.StrictMode>
)
