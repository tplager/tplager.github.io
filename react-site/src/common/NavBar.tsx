import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { List } from "./List";

interface IProps {
    shouldHaveSocials?: boolean;
}

interface navItemProps {
    href: string;
    innerContent: JSX.Element;
}

export function NavBar(props: IProps) {
    const { shouldHaveSocials } = props;

    const navItemGenerator = (props: navItemProps) => {
        const { href, innerContent } = props;

        return (
            <a
                className="nav-link"
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {innerContent}
            </a>
        );
    };

    const data: navItemProps[] = [
        {
            href: "https://www.linkedin.com/in/trenton-plager-913358150/",
            innerContent: (
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
            ),
        },
        {
            href: "https://github.com/tplager",
            innerContent: (
                <FontAwesomeIcon icon={faSquareGithub} className="icon" />
            ),
        },
        {
            href: "PlagerResume.pdf",
            innerContent: <h3>Resume</h3>,
        },
    ];

    if (shouldHaveSocials) {
        const resume = data.pop();

        data.push({
            href: "https://www.facebook.com/tplager",
            innerContent: (
                <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
            ),
        });
        data.push({
            href: "https://twitter.com/ReadyPlagerOne",
            innerContent: (
                <FontAwesomeIcon icon={faSquareTwitter} className="icon" />
            ),
        });

        if (resume) data.push(resume);
    }

    return (
        <header
            id="header"
            className="container-fluid pb-4 pt-4"
            style={{ height: "auto" }}
        >
            <div className="w-100 mx-auto">
                <nav className="navbar navbar-expand navbar-dark bg-dark rounded my-auto">
                    <div className="collapse navbar-collapse">
                        <List
                            generator={navItemGenerator}
                            data={data}
                            className="nav-item col-sm"
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
}
