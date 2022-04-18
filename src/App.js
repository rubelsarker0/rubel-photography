import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/checkout" element={<Checkout />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
