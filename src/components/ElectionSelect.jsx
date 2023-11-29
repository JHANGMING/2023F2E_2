import {  useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import {  saveCityName } from "../slice/ElectionSlice";

export const ElectionSelect=()=>{
  const areaData=useSelector((state)=>state.election.areaData)
  const dispatch=useDispatch()
  const cityName=useSelector((state)=>state.election)
  const [isCityHovered, setIsCityHovered] = useState(false);

  const handleCityClick=(city)=>{
    setIsCityHovered(false)
    dispatch(saveCityName(city))
  }

  return(
    <div className="flex gap-3 h-[55px] items-center mb-[54px]" >
      <div className="w-10 h-[55px] bg-white border-b-[3px] border-black flex justify-center items-center cursor-pointer" onClick={()=>{dispatch(saveCityName(""))}}>全國</div>
      <FaAngleRight size={24}/>
      <div className=" relative">
        {cityName.city ?(
          <div className="w-10 h-[55px] bg-white border-b-[3px] border-black flex justify-center items-center cursor-pointer" onClick={()=>setIsCityHovered(true)}>{cityName.city}</div>
        ):(<IoMdAddCircleOutline size={24} 
        onMouseEnter={() => setIsCityHovered(true)}
        />)}
        {isCityHovered &&(
          <ul className=" absolute top-8 w-[388px] flex flex-wrap bg-election-seventh text-white z-10">
          {areaData?.map((item,i)=>{
            const id=(new Date().getTime())+i
            return(
              <li key={id} className="w-[97px] h-[55] py-2 px-3 cursor-pointer" onClick={() => handleCityClick(item["行政區別"])}>{item["行政區別"]}</li>
            )
          })}
          </ul>
        )}
      </div>
    </div>
  )
}