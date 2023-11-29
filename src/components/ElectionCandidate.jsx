

export const ElectionCandidate=({area,name,img,progessStyle,imgStyle,rate})=>{

  return(
    <>
     <li className="flex items-center justify-between mb-5">
      <div className="">
        <p>{area}</p>
        <h3>{name}</h3>
      </div>
      <div className="flex items-center relative">
        <img src={img} alt={name} className="rounded-full border-[10px] -mr-0.5 bg-white w-11 h-11" style={imgStyle}/>
        <div className="relative w-[350px] h-[24px] -z-10" >
          <div className="absolute w-full h-full bg-black/[.25] rounded-r-xl z-0"></div>
          <div className="absolute top-0 left-0 h-full  rounded-r-xl z-10" style={progessStyle}></div>
        </div>
        <p className=" absolute right-0 bottom-0 text-m font-bold">{rate}</p>
      </div>
    </li>
    </>
  )
}