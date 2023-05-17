import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Userfront from "@userfront/react";

Userfront.init("6bg4v9jn");

const SignupForm = Userfront.build({
  toolId: "nkaabon"
});
const LoginForm = Userfront.build({
  toolId: "kdllonb",
});
const PasswordResetForm = Userfront.build({
  toolId: "dkrrmdn",
});
function Bra() {

  return (
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/reset">Reset</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>
          <Routes>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/reset" element={<PasswordReset/>}>
            </Route>
            <Route path="/dashboard" element={<Dashboard/>}>
            </Route>
            <Route path="/" element={<Start/>}>
            </Route>
          </Routes>

      </BrowserRouter>
  );
}

function Start() {

  return(
      <div>
    <h2>Home</h2>
    <SignupForm />
  </div>);

}

function Login() {
  return (
      <div>
        <h2>Login</h2>
        <LoginForm />
      </div>
  );
}

function PasswordReset() {
  return (
      <div>
        <h2>Password Reset</h2>
        <PasswordResetForm />
      </div>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}


export default function App() {
  return (
      <BrowserRouter>
        <header>
          <h1>Flohnline-Markt von Mateja und Rafael</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/warenkorb">Warenkorb</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/shop"  element={<Shop/>}>
          </Route>
          <Route path="/warenkorb"  element={<Warenkorb/>}>
          </Route>
          <Route path="/kontakt"  element={<Kontakt/>}>
          </Route>
          <Route path="/"  element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


function Shop() {
  return <h2>Shop</h2>;
}

function Warenkorb() {
  return <h2>Warenkorb</h2>;
}

function Kontakt() {
  return <h2>Kontakt</h2>;
}
function Home() {
  return (
    <div className="App">
      <main>
        <section className="banner">
          <h2>Wilkommen zu unserem Online-Shop</h2>
          <p>Sehen sie sich unsere Produkte an</p>
          <a href="#" className="btn">Jetzt shoppen!</a>
        </section>
        <h2>Featured Products</h2>

        <section className="products">
          <div className="product">
            <img src="Bilder/NintendoSwitch.jpg" alt="Product 1"/>
              <h3>Nintendo Switch</h3>
              <p>CHF 250.00</p>
              <a href="#" className="btn">In Warenkorb</a>
          </div>
          <div className="product">
            <img src="Bilder/PsP.png" alt="Product 2"/>
              <h3>Playstation Portable</h3>
              <p>CHF 50.00</p>
              <a href="#" className="btn">In Warenkorb</a>
          </div>
          <div className="product">
            <img src="Bilder/HotWheels_Auto.jpg" alt="Product 3"/>
              <h3>Autospielzeug</h3>
              <p>CHF 5.00</p>
              <a href="#" className="btn">In Warenkorb</a>
          </div>
        </section>
      </main>
    </div>
  );
}
