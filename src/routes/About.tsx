import { useScrollNavigation } from "../hooks/useScrollNavigation";

function About() {
    useScrollNavigation({
        nextRoute: "/contacts",
        prevRoute: "/projects",
    });

    return (
        <div className="h-svh pt-16 px-4 sm:px-16 lg:px-64">
            <p className="text-7xl mb-4 fade-in">
                <strong>Dang Nguyen</strong>
            </p>
            <p className="text-xl underline mb-2">
                Full-Stack Software Engineer | React
            </p>
            <p className="text-xl">Location:</p>
            <p className="ml-4">Halifax, Nova Scotia</p>
            <p className="text-xl">Skills:</p>
            <p className="ml-4">
                &gt; Proficient: JavaScript, React, Flutter/Dart
            </p>
            <p className="ml-4">
                &gt; Familiar: .NET, Python, Java, C, C++, C#
            </p>
            <p className="ml-4">
                &gt; Tools and Technology: GitHub, Docker, Azure
            </p>
            <br />
            <p className="text-xl">Education:</p>
            <p className="ml-4">
                &gt; <strong>Nova Scotia Community College</strong>, Halifax,
                Nova Scotia
            </p>
            <p className="ml-12">
                IT Programming Diploma | Expected in December 2026
            </p>
            <p className="ml-12">
                Coursework: Web Programing, React, SQL Database, Object-Oriented
                Programing, Software Development Methods
            </p>
            <p className="ml-12">
                Eligible for co-op work term (returning to studies in Fall 2026)
            </p>
        </div>
    );
}

export default About;
