import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegMinusSquare } from "react-icons/fa";
import { FiMinusSquare } from 'react-icons/fi';

const CategoryPanel = (props) => {


    const [submenuIndex, setSubmenuIndex] = useState(null);

    const toggleDrawer = (newOpen) => () => {
      props.setIsOpenCatPanel(newOpen)
    };

    const openSubMenu=(index)=>{

      if(submenuIndex===index){
        setSubmenuIndex(null);
      }else{
        setSubmenuIndex(index);
      }
    };

    const DrawerList = (
        <Box sx={{ width: 300 }} className="categoryPanel" role="presentation">
          
          <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
            Shop By Categories 
            <IoClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/>
          </h3>
          
          <div className="scroll">
            <ul className='w-full'>
              <li className='list-none flex items-center relative flex-col'>
                <Link to={"/"} className='w-full' onClick={()=>openSubMenu(0)}>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                    <b>Cardio</b>
                  </Button>
                </Link>

                {
                  submenuIndex === 0 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'/>
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                )}
                

                {
                  submenuIndex === 0 && (

                  <ul className="submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Stair Master
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Treadmills
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Stationary Bikes
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Rowing Machine
                      </Link>
                    </li>
                  </ul>
                )}

              </li>

              <li className='list-none flex items-center relative flex-col'>
                <Link to={"/"} className='w-full' onClick={()=>openSubMenu(1)}>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                    <b>Strength</b>
                  </Button>
                </Link>

                {
                  submenuIndex === 1 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'/>
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                )}
                

                {
                  submenuIndex === 1 && (

                  <ul className="submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Kettlebells
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Dumbbells
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Weight Plates
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Power Racks
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Bench Press Station
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Squat Racks
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Cable Machine
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Smith Machine
                      </Link>
                    </li>
                  </ul>
                )}

              </li>

              <li className='list-none flex items-center relative flex-col'>
                <Link to={"/"} className='w-full' onClick={()=>openSubMenu(2)}>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                    <b>Functional</b>
                  </Button>
                </Link>

                {
                  submenuIndex === 2 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'/>
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                )}
                

                {
                  submenuIndex === 2 && (

                  <ul className="submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Resistance Bands
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Pull-up Bars
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Battle Ropes
                      </Link>
                    </li>
                  </ul>
                )}

              </li>

              <li className='list-none flex items-center relative flex-col'>
                <Link to={"/"} className='w-full' onClick={()=>openSubMenu(3)}>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                    <b>Leg</b>
                  </Button>
                </Link>

                {
                  submenuIndex === 3 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'/>
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                )}
                

                {
                  submenuIndex === 3 && (

                  <ul className="submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Hip Thrust Machine
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Abductor Machine
                      </Link>
                    </li>
                  </ul>
                )}

              </li>

              <li className='list-none flex items-center relative flex-col'>
                <Link to={"/"} className='w-full' onClick={()=>openSubMenu(4)}>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                    <b>Recovery</b>
                  </Button>
                </Link>

                {
                  submenuIndex === 4 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'/>
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                )}
                

                {
                  submenuIndex === 4 && (

                  <ul className="submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Foam Rollers
                      </Link>
                    </li>

                  </ul>
                )}

              </li>

              <li className='list-none flex items-center relative flex-col'>
                <Link to={"/"} className='w-full' onClick={()=>openSubMenu(5)}>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                    <b>Gym Accessories</b>
                  </Button>
                </Link>

                {
                  submenuIndex === 5 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'/>
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                )}
                

                {
                  submenuIndex === 5 && (

                  <ul className="submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Gym Flooring Mats
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to={"/"} className='link w-full !text-left !justify-start !px-3 transition text-[14px] font-[500]'>
                        Weight Lifting Belts and Gloves
                      </Link>
                    </li>

                  </ul>
                )}

              </li>
            </ul>
          </div>
          

        </Box>
      );

  return (
    <>
        <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </>
  )
}

export default CategoryPanel;