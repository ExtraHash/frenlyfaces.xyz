import { useState } from "react";

export function Navbar(props: { RightElement: JSX.Element }) {
    return (
        <div>
            <nav className="">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex" />
                        <div className="flex space-x-6">
                            <div className="mt-4">{props.RightElement}</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
