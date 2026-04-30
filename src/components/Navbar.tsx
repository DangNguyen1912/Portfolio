import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const routes = [
        ["/", "Home"],
        ["/projects", "Projects"],
        ["/about", "About"],
        ["/contacts", "Contacts"],
    ];

    const location = useLocation().pathname;

    return (
        <div className="fixed bottom-6 w-full flex justify-center items-end">
            <nav className="flex max-w-full gap-1 sm:gap-4">
                {routes.map((e) => {
                    var extraClass = "mt-2 hover:-translate-y-[2px] ";
                    if (location === e[0]) {
                        extraClass = "mb-2";
                    }
                    return (
                        <div
                            className={
                                "transition-all duration-300 border rounded-full px-2 " +
                                extraClass
                            }
                            key={routes.indexOf(e)}
                        >
                            <Link to={e[0]}>{e[1]}</Link>
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}

export default Navbar;
