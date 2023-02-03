import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import welcome from "../assets/eye.png";
import altoButton from "../assets/alto.png";
import twitterButton from "../assets/twitter.png";

export function Verify() {
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
                        width: "400px",
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
                <div
                    className="mt-20 mx-auto text-center"
                    style={{ zIndex: 1000 }}
                >
                    <p
                        className="text-center mx-auto"
                        style={{
                            textAlign: "center",
                            fontSize: 24,
                            fontFamily: "monospace",
                            marginBottom: "2rem",
                        }}
                    >
                        Please verify your identity to be Seen.
                    </p>
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
