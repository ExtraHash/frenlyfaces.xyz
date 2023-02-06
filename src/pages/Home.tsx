import welcome from "../assets/welcome.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { FrenlyNFT } from "../types/FrenlyNFT";
import publicGood from "../assets/publicgood.mp3";

function randomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function NFTFrame(props: { nft: FrenlyNFT }) {
    return (
        <div className="bg-white rounded p-4">
            <p className="text-md mb-1 -mt-2">
                <strong>#{props.nft.edition}</strong>
            </p>
            <img
                className=""
                src={props.nft.image}
                alt={"frenly #" + props.nft.edition}
            />
            <div className="mt-4">
                {props.nft.attributes?.map((item) => {
                    return <div className="text-xs">{item.value}</div>;
                })}
            </div>
        </div>
    );
}

export function Home() {
    const [displayedFrenlys, setDisplayedFrenlys] = useState<FrenlyNFT[]>([]);

    useEffect(() => {
        const getFrenlys = async () => {
            let ids: number[] = [];
            for (let i = 0; i < 4; i++) {
                ids.push(randomIntFromInterval(1, 1000));
            }

            const frenlys: FrenlyNFT[] = [];
            const promises = [];
            const getFrenly = async (n: number) => {
                const res = await fetch(
                    `https://raw.githubusercontent.com/frenlyfaces/metadata/master/json/${n.toString()}`
                );
                if (res.status === 200) {
                    frenlys.push(await res.json());
                }
            };

            for (const id of ids) {
                promises.push(getFrenly(id));
            }

            await Promise.all(promises);

            setDisplayedFrenlys(frenlys);
        };
        getFrenlys();
    }, []);

    return (
        <>
            <div
                className="font-mono bg-slate-100"
                style={{ overflow: "scroll" }}
            >
                <Navbar RightElement={<ConnectButton showBalance={false} />} />
                <div className="mx-4">
                    <div className="mt-5 -ml-2 md:-mt-14">
                        <img
                            src={welcome}
                            width={400}
                            style={{
                                maxWidth: "80%",
                            }}
                            alt="welcome to frenly faces"
                        ></img>
                    </div>
                    <p className="mt-2">
                        Frenly Faces is a <strong>social experiment</strong> and
                        1000 piece <strong>hand drawn NFT collection</strong> on
                        Canto blockchain that Free minted on 02/01/2023. Frenly
                        Faces are here to make Friends and have some Fun on
                        chain. 👽
                    </p>

                    <ul className="mt-5">
                        <li>
                            <a
                                className="underline text-violet-700"
                                href="https://alto.build/collections/frenly-faces"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Marketplace (Alto)
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-violet-700"
                                href="https://twitter.com/frenlyfaces"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter @FrenlyFaces
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-violet-700"
                                href="https://alto.build/collections/frenly-faces"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Discord Chat (Holders Only)
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-violet-700"
                                href="https://github.com/frenlyfaces"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                className="underline text-violet-700"
                                href="https://evm.explorer.canto.io/address/0x020bbfC79C96c22A8677df740379ecCc0297E52C"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Contract
                            </a>
                        </li>
                    </ul>

                    <audio className="mt-5" controls src={publicGood}></audio>

                    <div
                        className={`mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4`}
                    >
                        {displayedFrenlys.map((item) => {
                            return <NFTFrame nft={item} key={item.dna} />;
                        })}
                    </div>
                    <p className="mt-5">
                        Through art, we are Seen. Through code, we can See.
                        Frenly Faces are <strong>CC0 licensed</strong>. Remix
                        and reuse as you please.
                    </p>

                    <p className="mt-5 mb-10 text-xs">with ❤️ from FF</p>
                </div>
            </div>
        </>
    );
}
