import { useEffect } from "react";
import { ElectionCandidate } from "./ElectionCandidate"
import { useDispatch, useSelector } from "react-redux";
import { useGetCandidateJsonQuery } from "../slice/apiSlice";
import { candidateData } from "../slice/ElectionSlice";

export const ElectionResult=()=>{
  const { data} = useGetCandidateJsonQuery()
  const dispatch=useDispatch()
  const candidate=useSelector((state)=>state.election.candidateData)
  useEffect(() => {
    if(data){
      dispatch(candidateData(data))
    }
    
  }, [data]); 

  return(
    <section className="">
      <h2 className="mb-5">投票結果</h2>
      <ul className="ml-4 mb-7 w-[564px]">
        { candidate?.map((candidate, index) => (
            <ElectionCandidate
              key={index}
              area={candidate["推薦政黨"]}
              name={candidate["姓名"]}
              img={`./src/assets/candidateNum${index + 1}.png`}
              progessStyle={{ width: `${candidate["得票率"]}`, backgroundColor: `${candidate.rankColor}` }}
              imgStyle={{borderColor:`${candidate.rankColor}`}}
              rate={candidate["得票率"]}
            />
          ))}
      </ul>
    </section>
  )
}