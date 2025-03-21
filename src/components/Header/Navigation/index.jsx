import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { RiMenu3Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';

import "../Navigation/style.css"


const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel=()=>{
        setIsOpenCatPanel(true);
    };

  return (
    <>
    <nav className='py-2'>
        <div className="container flex items-center justify-end gap-8">
            <div className="col_1 w-[20%]">
                <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                    <RiMenu3Line className='text-[18px]'/>
                    <b>Shop By Categories</b>
                    <FaAngleDown className='text-[13px] ml-auto font-bold'/>
                </Button>
            </div>

            <div className="col_2 w-[60%]">
                <ul className="flex items-center gap-8 nav">
                    <li className="list-none">
                        <Link to={"/"} className='link transition text-[14px] font-[500]'>
                            <Button className='link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Home</Button>
                        </Link>
                    </li>
                    <li className="list-none relative group">
                        <Link to={"/"} className='link transition text-[14px] font-[500]'>
                            <Button className='link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Cardio</Button>
                        </Link>

                        <div className="submenu absolute top-full left-0 min-w-[600px] bg-white shadow-md rounded-[8px] p-4 grid grid-cols-4 gap-4 opacity-0 pointer-events-none transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Stair Master</h3>
                                <ul>
                                    {["StairMaster 7000 PT", "StairMaster SM5", "StairMaster HIITMill X"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Treadmills</h3>
                                <ul>
                                    {["Sole F85", "ProForm Pro 2000"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Stationary Bikes</h3>
                                <ul>
                                    {["Peloton Bike+", "AssaultBike Classic", "Echelon EX-5S", "Schwinn IC4"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Rowing Machine</h3>
                                <ul>
                                    {["NordicTrack RW900"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-4 mt-4 flex justify-center">
                                <img src="/path-to-your-image.png" alt="Cardio Equipments" className="w-[100px] h-auto object-contain"/>
                            </div>
                        </div>

                    </li>
                    <li className="list-none relative group">
                        <Link to={"/"} className='link transition text-[14px] font-[500]'>
                            <Button className='link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Strength</Button>
                        </Link>

                        <div className="submenu absolute top-full left-0 min-w-[700px] bg-white shadow-md rounded-[8px] p-4 grid grid-cols-4 gap-4 opacity-0 pointer-events-none transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Kettlebells</h3>
                                <ul>
                                    {["Rogue Kettlebell", "ONNIT Kettlebells"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Dumbbells</h3>
                                <ul>
                                    {["Rogue Dumbbells", "PowerBlock Elite Series", "CAP Barbell Hex"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Weight Plates</h3>
                                <ul>
                                    {["Rogue Olympic Plates"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Power Racks</h3>
                                <ul>
                                    {["Rogue RML-490C", "Titan T-3 Series", "Fitness Reality 810XLT"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Bench Press Station</h3>
                                <ul>
                                    {["Bowflex 5.1S", "Titan Fitness Flat Bench", "Ironmaster Super Bench", "Rep AB-5000 Zero Gap"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Squat Racks</h3>
                                <ul>
                                    {["Titan X-3 Power Rack", "Rogue Monster Lite Series"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Cable Machine</h3>
                                <ul>
                                    {["Inspire Fitness FT2", "REP FT-5000"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Smith Machine</h3>
                                <ul>
                                    {["Marcy SM-4033", "Force USA G3", "Body-Solid GS348Q"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-4 mt-4 flex justify-center">
                                <img src="/path-to-your-image.png" alt="Cardio Equipments" className="w-[100px] h-auto object-contain"/>
                            </div>
                        </div>
                    </li>
                    <li className="list-none relative group">
                        <Link to={"/"} className='link transition text-[14px] font-[500]'>
                            <Button className='link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Functional</Button>
                        </Link>

                        <div className="submenu absolute top-full left-0 min-w-[550px] bg-white shadow-md rounded-[8px] p-4 grid grid-cols-3 gap-4 opacity-0 pointer-events-none transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Resistance Bands</h3>
                                <ul>
                                    {["Rogue Monster Bands", "Fit Simplify Resistance Loop", "Letsfit Resistance Bands"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Pull-up Bars</h3>
                                <ul>
                                    {["Rogue P-4 Pull-up System", "Ultimate Body Press XL"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Battle Ropes</h3>
                                <ul>
                                    {["Rogue Battle Rope", "Rep V2 Battle Rope", "Amazon Basics Battle Rope", "Onnit Battle Rope"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-3 mt-4 flex justify-center">
                                <img src="/path-to-your-image.png" alt="Cardio Equipments" className="w-[100px] h-auto object-contain"/>
                            </div>
                        </div>
                    </li>
                    <li className="list-none relative group">
                        <Link to={"/"} className='link transition text-[14px] font-[500]'>
                            <Button className='link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Leg</Button>
                        </Link>

                        <div className="submenu absolute top-full left-0 min-w-[400px] bg-white shadow-md rounded-[8px] p-4 grid grid-cols-2 gap-4 opacity-0 pointer-events-none transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Hip Thrust Machine</h3>
                                <ul>
                                    {["Booty Builder Platinum", "Nautilus Glute Drive", "Force USA Glute Ham Raise", "Rogue Hip Thruster Bench"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Abductor Machine</h3>
                                <ul>
                                    {["Cybex Prestige Abductor", "Matrix Fitness Versa", "Technogym Selection Pro", "Life Fitness Signature Series"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-2 mt-4 flex justify-center">
                                <img src="/path-to-your-image.png" alt="Cardio Equipments" className="w-[100px] h-auto object-contain"/>
                            </div>
                        </div>
                    </li>
                    <li className="list-none relative group">
                        <Link to={"/"} className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                                Recovery
                            </Button>
                        </Link>

                        <div className="submenu absolute top-full left-0 min-w-[240px] bg-white shadow-md rounded-[8px] p-4 grid grid-cols-1 gap-4 opacity-0 pointer-events-none transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                            <div>
                                <h3 className="text-[14px] font-[600] text-black mb-2">Foam Rollers</h3>
                                <ul>
                                    {["OPTP Pro-Roller", "Hyperice Vyper 2.0", "LuxFit High-Density Roller", "RumbleRoller Deep-Tissue", "TriggerPoint GRID Foam Roller"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[12px] font-[500] text-[rgba(0,0,0,0.8)] hover:text-[#ff5252]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-1 mt-4 flex justify-center">
                                <img src="/path-to-your-image.png" alt="Cardio Equipments" className="w-[100px] h-auto object-contain"/>
                            </div>
                        </div>
                    </li>

                    <li className="list-none relative group">
                        <Link to={"/"} className='link transition text-[14px] font-[500]'>
                            <Button className='link transition !font-[600] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Gym Accessories</Button>
                        </Link>

                        <div className="submenu absolute top-full left-0 min-w-[500px] bg-white shadow-md rounded-[8px] p-4 grid grid-cols-2 gap-4 opacity-0 pointer-events-none transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Gym Flooring Mats</h3>
                                <ul>
                                    {["AmazonBasics High-Density Mat", "ProsourceFit Extra Thick", "Retrospec Solana"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-[600] text-black mb-2">Weight Lifting Belts and Gloves</h3>
                                <ul>
                                    {["Rogue Ohio Lifting Belt", "Dark Iron Fitness Belt", "Trideer Weight Lifting Gloves", "Nordic Lifting Gloves"].map((item) => (
                                        <li key={item} className="list-none">
                                            <Link to={"/"} className="link transition text-[11px] font-[500] text-[rgba(0,0,0,0.8)]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-2 mt-4 flex justify-center">
                                <img src="/path-to-your-image.png" alt="Cardio Equipments" className="w-[100px] h-auto object-contain"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="col_3 w-[20%] gap-3">
                <p className='text-[14px] font-[600] flex items-center gap-3 mb-0 mt-0'>
                    <GoRocket className='text-[18px] ml-auto font-bold'/>
                    Free Nationwide Delivery
                </p>
            </div>
        </div>
    </nav>

    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>
  )
}

export default Navigation;