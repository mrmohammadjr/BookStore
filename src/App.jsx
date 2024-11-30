import {Header,HeaderRes} from "./components/Header"
import Footer from "./components/Footer"
import Router from "./Router"
function App() {
  return (
    <div className="eleDir lalehF lg:bg-green-500 sm:bg-white">
      <Header />
      <HeaderRes />
      <Router />
      <Footer />
    </div>
  );
}
export default App;