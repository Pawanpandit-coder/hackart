import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuth(false);
      return;
    }

    const decoded = JSON.parse(atob(token.split(".")[1]));
    if (decoded.exp * 1000 > Date.now()) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-19">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="logo">
          <span className="text-4xl font-semibold">Hackart</span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-4">
          <Link to="/hacknest">HackNest</Link>
          <Link to="/packetrift">PacketRift</Link>
          <Link to="/gadgets">Gadgets</Link>
          <Link to="/cryptovault">CryptoVault</Link>
          <Link to="/coudspine">CloudSpine</Link>
          <input
            type="search"
            placeholder="eg. modem"
            className="outline-none border rounded-full py-1 px-3"
          />
          {isAuth ? (
            <span
              className="text-3xl outline-2 rounded-4xl h-10"
              onClick={() => navigate("/account/logins")}
            >
              👤
            </span>
          ) : (
            <button
              className="outline-1 bg-black text-white rounded-4xl px-3 py-2"
              onClick={() => navigate("/account/login")}
            >
              Log in
            </button>
          )}
        </nav>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-3xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md px-4 pb-4 flex flex-col gap-4">
          <Link to="/hacknest" onClick={() => setIsOpen(false)}>
            HackNest
          </Link>
          <Link to="/packetrift" onClick={() => setIsOpen(false)}>
            PacketRift
          </Link>
          <Link to="/gadgets" onClick={() => setIsOpen(false)}>
            Gadgets
          </Link>
          <Link to="/cryptovault" onClick={() => setIsOpen(false)}>
            CryptoVault
          </Link>
          <Link to="/coudspine" onClick={() => setIsOpen(false)}>
            CloudSpine
          </Link>
          <input
            type="search"
            placeholder="eg. modem"
            className="outline-none border rounded-full py-1 px-3"
          />
          {isAuth ? (
            <span
              className="text-3xl outline-2 rounded-4xl h-10"
              onClick={() => navigate("/account/logins")}
            >
              👤
            </span>
          ) : (
            <button
              className="outline-1 bg-black text-white rounded-4xl px-3 py-2"
              onClick={() => navigate("/account/login")}
            >
              Log in
            </button>
          )}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
