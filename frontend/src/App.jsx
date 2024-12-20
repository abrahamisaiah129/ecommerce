// all imported dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// design library
import '../ui/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import '../ui/fontawesome-free-6.6.0-web/css/all.css';
// statics
import Footer from './components/footer';
import Navbar from './components/navbar';
import Loader from './components/loader';
// pages
import Homepage from './pages/shop/homepage';
import Cart from './pages/cart/cart';
import AuthComponent from './pages/authentication/auth-component';
import UserProfileForm from './pages/user/profile';
import OrderTracking from './pages/cart/ordertracking';
import ViewProduct from './pages/product/viewproduct';
// providers
import { ShopContextProvider } from './pages/context/shop-context';
import { ThemeProvider } from './pages/context/theme-context';
import Settings from './pages/settings/setting';
import { useEffect,useState } from 'react';
// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import Wishlist from './pages/cart/wishlist';
  


function App() {

      const [loading, setLoading] = useState(true);
useEffect(() => {
        // Simulate a data fetch
        const fetchData = async () => {
            // Fetch data here
            setLoading(false); // Set loading to false after fetching
        };

        fetchData();
}, []);
  
  
  return (
    <div className='App'>
      <ShopContextProvider>
      <ThemeProvider>
        <Router>
<Navbar/>

        {/* our navbar here */}
  {loading ? <Loader /> : (
                <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<AuthComponent />} />
              <Route path='/settings' element={<Settings/>} />
                <Route path='/profile' element={<UserProfileForm />} />
                <Route path="/track-orders" element={<OrderTracking />} />
                <Route path="/wishlist" element={<Wishlist />} />
            
        <Route path="/product/:productId" element={<ViewProduct />} />
        {/* <Route path="/product" element={<Product  />} /> */}
          
      
            </Routes>  )}
             <ToastContainer />
<Footer/>          
      </Router>
      </ThemeProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
