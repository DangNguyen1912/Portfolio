function Projects() {
    const projectList = [
        [
            "Halifax Bus Map",
            "https://dangnguyen1912.github.io/JS-Halifax-Bus-Map/",
        ],
        [
            "Flutter Calculator",
            "https://dangnguyen1912.github.io/Flutter-Calculator-App/",
        ],
    ];
    return (
        <div className="min-h-svh flex justify-center items-center px-4 sm:px-16 lg:px-64">
            {projectList.map((e) => {
                return (
                    <div className="border rounded-full px-2 m-2 flex justify-center">
                        <a
                            href={e[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {e[0]}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;
