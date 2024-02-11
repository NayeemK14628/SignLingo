import { Outlet, Link } from "react-router-dom";
import logo from '/SignLingo.png'
import './Layout.css'

const Layout = () => {
  return (
    <>
    <img src={logo} className="logo"></img>
      <nav>
      <div className="horizontalBar"></div>
      <div className = "buttonGrid">
            <Link to="/" className = "ABC1s"><button>Home</button></Link>
            <Link to="/FlashCards" className = "ABC1s"><button>Flash Cards</button></Link>
            <Link to="/quizzes" className = "ABC1s"><button>Quizzes</button></Link>
      </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;