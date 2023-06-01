import Image from "next/image";
import Logo from "../../public/img/logo.png"
import {FaUserAlt} from "react-icons/fa";
import  {FaCog} from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex justify-between items-center px-12 py-4 border-b-2 border-gray-700">
        <Image src={Logo} />
        <div className="flex gap-3 text-3xl text-gray-400">
            <FaUserAlt/>
            <FaCog/>
        </div>
    </div>
  );
}
