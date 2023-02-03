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
                        Please{" "}
                        <button
                            onClick={() => {
                                window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1071113835659923466&redirect_uri=${encodeURIComponent(
                                    process.env.REACT_APP_DISCORD_REDIRECT_URI!
                                )}&response_type=token&scope=identify`;
                            }}
                            style={{
                                textDecoration: "underline",
                                color: "#3e35f9",
                            }}
                        >
                            verify your Discord
                        </button>{" "}
                        to be Seen.
                    </p>
                </div>
            </div>
        </div>
    );
}
