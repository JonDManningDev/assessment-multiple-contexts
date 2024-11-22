import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-light m-0">Sales Dashboard</h1>
          </div>
          <div className="col d-flex align-items-end justify-content-end">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link link-light">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link link-light link-opacity-50 disabled">
                  Profile
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link link-light link-opacity-50 disabled">
                  Upcoming Tasks
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
