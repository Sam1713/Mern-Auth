import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="bg-slate-200  shadow-xl">
        <div className="max-w-6xl mx-auto p-3 flex justify-between items-center">
            <h1>Mern-App</h1>
            <ul className="flex justify-between gap-4">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/signin'><li>SignIn</li></Link>
            </ul>
        </div>

    </div>
  )
}

export default Header
