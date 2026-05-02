import { useScrollNavigation } from "../hooks/useScrollNavigation";

function Projects() {
    interface Project {
        title: string;
        pageLink: string;
        gitLink: string;
        description: string;
    }
    [];

    const projectList: Project[] = [
        {
            title: "Halifax Bus Map",
            pageLink: "https://dangnguyen1912.github.io/JS-Halifax-Bus-Map/",
            gitLink: "https://github.com/DangNguyen1912/JS-Halifax-Bus-Map",
            description:
                "A website map for looking up bus routes in Halifax, Nova Scotia using JavaScript",
        },
        {
            title: "Flutter Calculator",
            pageLink:
                "https://dangnguyen1912.github.io/Flutter-Calculator-App/",
            gitLink: "https://github.com/DangNguyen1912/Flutter-Calculator-App",
            description: "A simple working calculator using flutter/Dart",
        },
    ];

    useScrollNavigation({
        nextRoute: "/about",
        prevRoute: "/",
    });

    const getImageUrl = (name: string) => {
        // This creates a valid URL that Vite will resolve during build
        return new URL(`../assets/${name}.png`, import.meta.url).href;
    };

    return (
        <div className="min-h-svh flex justify-center items-center px-4 sm:px-16 lg:px-64 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectList.map((e) => {
                    return (
                        <div
                            className="border rounded-3xl p-2 m-2 flex justify-center mb-auto"
                            key={projectList.indexOf(e)}
                        >
                            <a
                                href={e.pageLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={getImageUrl(e.title.replace(/ /g, ""))}
                                    alt={e.title}
                                    className="aspect-9/10 object-cover rounded-2xl mb-2"
                                />
                                <hr className="mx-4" />
                                <p className="text-xl mx-2">{e.title}</p>

                                <p className="mx-2 leading-none text-gray-400">
                                    {e.description ?? e.description}
                                </p>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
