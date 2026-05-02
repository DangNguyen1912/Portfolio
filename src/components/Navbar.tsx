import Tippy from "@tippyjs/react";
import { Link, useLocation } from "react-router-dom";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

function Navbar() {
    const routes = [
        ["/", "Home"],
        ["/projects", "Projects"],
        ["/about", "About"],
        ["/contacts", "Contacts"],
    ];

    const location = useLocation().pathname;

    return (
        <div className="fixed bottom-6 w-screen flex justify-center items-end">
            <Tippy
                content="hint: arrow keys or scroll wheel to navigate"
                touch={false}
                trigger="mouseenter"
                delay={0}
                theme="material"
                animation="scale-subtle"
            >
                <nav className="flex max-w-full gap-1 sm:gap-4">
                    {routes.map((e) => {
                        var extraClass = "mt-2 hover:-translate-y-[2px] ";
                        const index = routes.indexOf(e);
                        if (location === e[0]) {
                            extraClass = "mb-2";
                        }
                        return (
                            <>
                                {index !== 0 ? "|" : ""}
                                <div
                                    className={
                                        "transition-all duration-300 underline " +
                                        extraClass
                                    }
                                    key={index}
                                >
                                    <Link to={e[0]}>{e[1]}</Link>
                                </div>
                            </>
                        );
                    })}
                </nav>
            </Tippy>
        </div>
    );
}

export default Navbar;
