import { createSlice } from "@reduxjs/toolkit";

const rank={
  0:"#6F66DC",
  1:"#EBC80F",
  2:"#1CC5B1",
}

const initialState={
  data:[],
  city:""
}
export const electionSlice=createSlice({
	name:"todo",
  initialState,
  reducers:{ 
    rateData(state,action){ 
      const filterData=[...action.payload].find((item)=>item["行政區別"]==="總計")
      const filterAreaData = action.payload.filter((item) => item["行政區別"] !== "總計");
      return {...state,rateData:filterData,areaData:filterAreaData}
    },
    candidateData(state,action){
      // console.log(action.payload)
      const filterData=[...action.payload].sort((a,b)=>{
        const percentageA = parseFloat(a["得票率"]);
        const percentageB = parseFloat(b["得票率"]);
        return percentageB - percentageA;
      }).map((candidate, index) => {
          return { ...candidate, rankColor:rank[index] };
        });
      return {...state,candidateData:filterData }
    },
    cityData(state,action){
      if(Array.isArray(action.payload)){
        const filterCityData=[...action.payload].map((item)=>item["行政區別"].trim())
        return {...state,cityData:filterCityData }
      }
    },
    saveCityName(state,action){
      return {...state,city:action.payload }
    }
  }
})



export const {rateData,candidateData,cityData,saveCityName} =electionSlice.actions;

export default electionSlice.reducer;