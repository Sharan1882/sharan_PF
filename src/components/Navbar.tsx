import { useState } from "react"

const Navbar = () => {
  const [isActive, setActive] = useState("Home");

  const handleClick = (params: string) => {
    setActive(params)
  }

  return (
    <div className="hidden px-2.5 min-h-21.5 bg-[#171717] rounded-[50px] md:flex flex-row items-center justify-between w-[90%]">
      <li className="flex flex-row items-center justify-center w-full py-4">
        <ul className="flex flex-row justify-between w-full">
          <a
            onClick={() => handleClick("Home")}
            className={`flex flex-row items-center justify-center w-full text-white text-[20px] font-light ${isActive === "Home" ? "bg-[#FD853A] py-5 px-10 rounded-[60px]" : ""}`}
          >
            Home
          </a>
          <a
            onClick={() => handleClick("My Services")}
            className={`flex flex-row items-center justify-center w-full text-white text-[20px] font-light ${isActive === "My Services" ? "bg-[#FD853A] py-5 px-10 rounded-[60px]" : ""}`}
          >
            My Services
          </a>
          <a
            onClick={() => handleClick("Experience")}
            className={`flex flex-row items-center justify-center w-full text-white text-[20px] font-light ${isActive === "Experience" ? "bg-[#FD853A] py-5 px-10 rounded-[60px]" : ""}`}
          >
            Experience
          </a>
          <p className="font-bold text-2xl text-white flex flex-row items-center justify-center w-full">SHARAN</p>
          <a
            onClick={() => handleClick("Why Me?")}
            className={`flex flex-row items-center justify-center w-full text-white text-[20px] font-light ${isActive === "Why Me?" ? "bg-[#FD853A] py-5 px-10 rounded-[60px]" : ""}`}
          >
            Why Me?
          </a>
          <a
            onClick={() => handleClick("Projects")}
            className={`flex flex-row items-center justify-center w-full text-white text-[20px] font-light ${isActive === "Projects" ? "bg-[#FD853A] py-5 px-10 rounded-[60px]" : ""}`}
          >
            Projects
          </a>
          <a
            onClick={() => handleClick("Education")}
            className={`flex flex-row items-center justify-center w-full text-white text-[20px] font-light ${isActive === "Education" ? "bg-[#FD853A] py-5 px-10 rounded-[60px]" : ""}`}
          >
            Education
          </a>
        </ul>
      </li>
    </div>
  )
}

export default Navbar