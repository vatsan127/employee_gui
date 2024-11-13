function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/create">
          Employee DATA
        </a>

        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/create">
                Create
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="#">
                Get Employee Data
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
