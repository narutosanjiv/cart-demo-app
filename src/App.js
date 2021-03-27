import './App.css';
import ProductList from './Components/Products/ProductList';
import CartList from './Components/Carts/CartList';

import { CartProvider } from './Components/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="ShoppingApp">
        <div className="section_products">
            <ProductList />
        </div>
        <div className="section_carts">
            <CartList />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
