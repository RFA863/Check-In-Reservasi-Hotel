import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { ImLocation } from "react-icons/im";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between gap-10 bg-[#e6e2e2] px-12 py-4 bottom-0">
      <div className="flex-1">
        <Image src={Logo} className="h-8 w-auto" />
        <p className="text-justify">
          We strive to provide convenience in preparing your vacation, and we
          also aim to provide accommodation recommendations for you so that you
          can experience a holiday that you will never forget.
        </p>
      </div>

      <div className="flex-1">
        <p>Contact</p>
        <div className="flex gap-3">
          <ImLocation /> <p> Bandung </p>
        </div>
        <div className="flex gap-3">
          <FaPhone />
          <p>0811223344567</p>
        </div>
        <div className="flex gap-3">
          <HiMail />
          <p>check.in@gmail.com</p>
        </div>
      </div>

      <div className="flex-1">
        <p>Follow Us</p>
        <div className="flex gap-5">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram/>
        </div>
      </div>
    </div>
  );
}
