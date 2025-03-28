import {Link} from 'react-router-dom';

export default function Navbar() {
  return <>
<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movie">Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tv">Tv</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="hot">CoffeeHot</Link>
        </li>

      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link text-white" to="login">Login</Link>
        </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="logout">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
  </>
}
