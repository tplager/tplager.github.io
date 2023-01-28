import React from "react";

interface IProps {
    generator: (...args: any[]) => JSX.Element;
    data: any[];
    className?: string;
}
export function List(props: IProps) {
    const { data, generator, className } = props;

    const listItems = data.map((val) => {
        return generator(val);
    });

    return (
        <ul className="nav navbar-nav container-fluid row text-center">
            {listItems.map((link) => (
                <li className={className}>{link}</li>
            ))}
        </ul>
    );
}
