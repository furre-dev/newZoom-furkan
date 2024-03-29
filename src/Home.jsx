import { useEffect } from "react";
import { useState } from "react"
import Card from "./Card";

import { SlGraduation, SlWallet, SlArrowRight } from "react-icons/sl"
import { CiBank } from "react-icons/ci"
import { MdOutlineLocalHospital } from "react-icons/md"
import { BsBoxSeam } from "react-icons/bs"
import { IoPricetagsOutline } from "react-icons/io5"



export default function Home() {

    const wordArr = ["create", "innovate", "connect"]
    const [isOpace, setOpace] = useState(false);

    const [text, setText] = useState(wordArr[0]);
    const arrLength = wordArr.length;

    let i = 0;

    useEffect(() => {
        const interval = setInterval(() => {
        if(i === arrLength - 1){
            i = 0
        }else{
            i = i + 1;
        }
        setOpace(true)
        setTimeout(() => {
            setOpace(false)
            setText(wordArr[i])
        }, 280);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
      



    const cards = [{ title: "Education", icon: <SlGraduation />, key: 1 },
    { title: "Financial Services", icon: <SlWallet />, key: 2 },
    { title: "Government", icon: <CiBank />, key: 3 },
    { title: "Healthcare", icon: <MdOutlineLocalHospital />, key: 4 },
    { title: "Manufacturing", icon: <BsBoxSeam />, key: 5 },
    { title: "Retail", icon: <IoPricetagsOutline />, key: 6 }
    ]


    const arrow = ">";

    return (
        <div>
            <div className="my-10 w-[90%] mx-auto md:flex md:justify-center md:items-center">
                <div className="space-y-8 md:max-w-[50%]">
                    <h1 className=" text-4xl md:text-7xl font-lato font-bold max-w-[16rem] md:max-w-[30rem]">One platform to <span className={`${isOpace?"opacity-0":"opacity-100"} text-blue-700 transition-opacity duration-[280ms] `}>
                        {text}
                    </span></h1>
                    <p className="text-[#00031f] text-lg md:max-w-[30rem]">
                        Bring teams together, reimagine workspaces, engage new audiences, and delight your customers — all on the Zoom platform you know and love.
                    </p>
                    <div className="flex space-x-10">
                        <button className="text-lg text-white py-1 px-4 rounded-full bg-[#0C5CFF] hover:bg-[#0c10ff]" >Plans & Pricing</button>
                        <button className="text-lg text-[#0C5CFF] flex items-center">Sign Up, It's Free {arrow}</button>
                    </div>
                </div>
                <div className="md:max-w-[50%] flex justify-center items-center">
                    <img alt="Office illustration" src="./office.jpeg" className=" mt-12 md:mt-auto rounded-2xl md:rounded-1xl max-w-[90%]
                    md:max-w-none md:w-full mx-0   h-[20rem] md:h-full object-contain" />
                </div>
            </div>

            <div className="bg-[#00053D] w-full text-white py-5 md:px-36 pb-12 md:flex md:justify-center md:items-center md:h-96 md:mt-20">
                <img alt="Wheel with features for Zoom application" src="https://st2.zoom.us/static/6.3.10815/image/home2/zm-product-wheel.png" className="md:w-[35rem] drop-shadow-" />
                <div className="space-y-5 flex flex-col max-w-[90%] mx-auto">
                    <h2 className="text-4xl md:text-5xl font-lato">Make work less work</h2>
                    <p className="font-lato text-blue-300 max-w-[50rem] text-lg">
                        Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.</p>
                    <p className="font-sans text-lg cursor-pointer text-gray-300 underline hover:text-blue-300">Discover the Possibilities</p>
                </div>
            </div>
            <div className="py-24 max-w-[90%] mx-auto space-y-6 md:flex justify-center items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-lato md:max-w-4xl ">Powering organizations across industries and geographies</h2>
                    <p className="font-lato text-lg text-gray-600 md:max-w-3xl">Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.</p>
                    <button className="text-lg bg-[#00E0DB] py-1 px-5 rounded-full font-lato font-normal">Explore Industry Solutions</button>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center md:max-w-[30rem]">
                    {cards.map((card) => {
                        return (
                            <Card key={card.key} title={card.title} icon={card.icon} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}