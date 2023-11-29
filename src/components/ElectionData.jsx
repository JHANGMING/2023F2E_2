import { useEffect } from "react";
import { DonutData } from "./DonutData"
import { useGetRateJsonQuery } from "../slice/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { rateData } from "../slice/ElectionSlice";



export const ElectionData=()=>{
  const {data}=useGetRateJsonQuery()
  const dispatch=useDispatch()
  const rateAllData=useSelector((state)=>state.election.rateData)
  useEffect(()=>{
    if(data){
      dispatch(rateData(data))
    }
  },[data])

  return(
    <section className="">
      <h2 className="mb-5">投票概況</h2>
      <div className="flex w-[490px] justify-between">
        <div className=" relative">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">投票率</p>
          <DonutData/>
        </div>
        <div className="flex w-[274px] justify-between">
          <ul >
            <li className="mb-2">
              <p>投票率</p>
              <h4>{rateAllData &&(Number(rateAllData["投票率"])).toFixed(1)}%</h4>
            </li>
            <li>
              <p>投票數</p>
              <h4>{rateAllData && rateAllData["投票數"]}</h4>
              
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <p>有效票數</p>
              <h4>{rateAllData && rateAllData["有效票數"]}</h4>
            </li>
            <li>
              <p>無效票數</p>
              <h4>{rateAllData && rateAllData["無效票數"]}</h4>
            </li>
          </ul>
          
        </div>
      </div>
    </section>
  )
}