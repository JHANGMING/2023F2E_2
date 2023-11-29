
import { ElectionData } from "./ElectionData"
import { ElectionResult } from "./ElectionResult"
import { ElectionSelect } from "./ElectionSelect"

export const Election=()=>{
  
  return(
    <div className="flex flex-col">
      <ElectionSelect />
      <ElectionResult />
      <ElectionData />
    </div>
  )
}