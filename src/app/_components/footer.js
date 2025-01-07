import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { COMPANY_INFO } from "./company";

export default function Footer() {
    return (
      <div className="w-full p-10 h-auto bg-black text-white">
        <h2 className="text-2xl font-bold mb-6">{COMPANY_INFO.name}</h2>
        <p className="text-lg text-muted-foreground text-gray-300">
            대표자: {COMPANY_INFO.representative}<br/>
            주소 :  {COMPANY_INFO.address}<br/>
            contact mail : {COMPANY_INFO.email}<br/>
            contact phone : {COMPANY_INFO.phone}
        </p><br/>
        <a href="#" className="text-lg text-muted-foreground text-gray-200">
            서비스 약관 
        </a><br/>
        <a href="#" className="text-lg text-muted-foreground text-gray-200">
            개인정보 이용약관
        </a><br/>
        <div className="flex space-x-2 mt-5">
            <a href="https://www.youtube.com" className="text-lg text-muted-foreground" >
                <Youtube size={25}/>  
            </a>
            <a href="https://www.instagram.com" className="text-lg text-muted-foreground">
                <Instagram size={25}/>
            </a>
        </div>
      </div>
    );
  }
  