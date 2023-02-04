import { useState } from "react";

export function Navbar(props: { LeftElement: JSX.Element }) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div>
            <nav className="bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex" />
                        <div className="flex space-x-4">
                            <div className="mt-5 mb-5">{props.LeftElement}</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
