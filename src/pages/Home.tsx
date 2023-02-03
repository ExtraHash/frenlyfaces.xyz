import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import welcome from "../assets/welcome.png";
import altoButton from "../assets/alto.png";
import twitterButton from "../assets/twitter.png";

export function Home() {
    return (
        <div
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                zIndex: 999,
            }}
            className="flex flex-col items-centered"
        >
            <div>
                <img
                    style={{
                        width: "800px",
                        maxWidth: "80%",
                        zIndex: 1000,
                        margin: "auto",
                        marginTop: "12%",
                    }}
                    src={welcome}
                    alt="welcome to frenly faces"
                ></img>
            </div>
            <div className="">
                <div className="mt-20 mx-auto" style={{ zIndex: 1000 }}>
                    <a href="https://twitter.com/frenlyfaces" target="__blank">
                        <img
                            src={altoButton}
                            style={{
                                height: "auto",
                                maxHeight: "78px",
                                margin: "auto",
                            }}
                        />
                    </a>
                    <a href="https://twitter.com/frenlyfaces" target="__blank">
                        <img
                            src={twitterButton}
                            style={{
                                height: "auto",
                                maxHeight: "78px",
                                margin: "auto",
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
