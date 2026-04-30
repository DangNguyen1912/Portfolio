import { Link } from "react-router-dom";

function Navbar() {
    const routes = [
        ["/", "Home"],
        ["/test", "Test"],
        ["/projects", "Projects"],
        ["/about", "About"],
        ["/contacts", "Contacts"],
    ];

    return (
        <div className="">
            <nav className="">
                {routes.map((e) => (
                    <Link to={e[0]}>{e[1]}</Link>
                ))}
            </nav>
        </div>
    );
}

export default Navbar;
