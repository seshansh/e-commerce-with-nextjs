import { BsBellFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const navbar = ({ setSearch }: { setSearch: any }) => {
  return (
    <div className="flex  bg-white drop-shadow-lg w-screen h-16 items-center justify-center gap-52">
      <div className="flex justify-center gap-20 items-center">
        <div className="relative flex">
          <p className="text-5xl font-black" style={{ color: "#fb745a" }}>WN</p>
          <span className="absolute text-5xl font-bold flex justify-center w-full pl-4 text-white">2</span>
        </div>
        <input spellCheck="false" placeholder="Search Name" className="rounded-3xl h-8 pl-2 border-solid border-2 border-black-500 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-5">
        <p className="flex items-center gap-2"><GiHamburgerMenu size={25} /> Categories</p>
        <BsBellFill size={20} />
        <CgProfile size={30} />
      </div>
    </div>
  )
}

export default navbar