import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import Link from "./Link";
const Navigation = () => {
  return (
    <nav className=" shadow-sm flex justify-center h-12 w-full items-center p-2">
      <ul className=" flex justify-around items-center w-full p-2">
        <Link path="/" icon={<AiFillHome />} />

        <Link path="/projects" icon={<MdWork />} />

        <Link path="/skills" icon={<GiSkills />} />

        <Link path="/contact" icon={<IoIosMail />} />
      </ul>
    </nav>
  );
};

export default Navigation;
