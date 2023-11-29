import { GiHamburgerMenu } from "react-icons/gi";
export const Nav=()=>{
  
  return (
    <nav className="flex justify-between pt-3.75 px-3.75 pb-3">
      <h1>
        <img src="./src/assets/Logo.png" alt="nav" className="w-[181px] h-[46px] cursor-pointer"/>
      </h1>
      <GiHamburgerMenu size={35}/>
    </nav>
  )
}