import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import welcome from "../assets/welcome.png";
import altoButton from "../assets/alto.png";
import twitterButton from "../assets/twitter.png";
import contractButton from "../assets/contract.png";
import discordButton from "../assets/discord.png";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Home() {
    return (
        <div>
            <div
                style={{
                    zIndex: 1005,
                    position: "absolute",
                    right: "1rem",
                    top: "1rem",
                }}
            >
                <ConnectButton />
            </div>
            <div>
                <img
                    style={{
                        width: "500px",
                        maxWidth: "80%",
                        zIndex: 1000,
                        margin: "auto",
                        marginTop: "2rem",
                    }}
                    src={welcome}
                    alt="welcome to frenly faces"
                ></img>
            </div>
            <div className="m-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
                <a
                    href="https://alto.build/collections/frenly-faces"
                    target="__blank"
                >
                    <img
                        src={altoButton}
                        style={{
                            height: "auto",
                            maxHeight: "78px",
                            margin: "auto",
                        }}
                        alt="alto"
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
                        alt="twitter"
                    />
                </a>
                <a href="https://discord.gg/VKPer5MNsX" target="__blank">
                    <img
                        src={discordButton}
                        style={{
                            height: "auto",
                            maxHeight: "78px",
                            margin: "auto",
                        }}
                        alt="discord"
                    />
                </a>
                <a
                    href="https://evm.explorer.canto.io/address/0x020bbfC79C96c22A8677df740379ecCc0297E52C"
                    target="__blank"
                >
                    <img
                        src={contractButton}
                        style={{
                            height: "auto",
                            maxHeight: "78px",
                            margin: "auto",
                        }}
                        alt="contract"
                    />
                </a>
            </div>
        </div>
    );
}
