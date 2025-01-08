import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { COMPANY_INFO } from "./company";

export default function Footer() {
    return (
      <div className="w-full p-10 h-auto bg-black text-white">
        <h2 className="text-2xl font-bold mb-6">{COMPANY_INFO.Name}</h2>
        <p className="text-lg text-muted-foreground text-gray-150">
            대표자: {COMPANY_INFO.Representative}<br/>
            주소 :  {COMPANY_INFO.Address}<br/>
            contact mail : {COMPANY_INFO.Email}<br/>
            contact tel : {COMPANY_INFO.Tel}
        </p><br/>
        <a href={COMPANY_INFO.Service} className="text-lg text-muted-foreground text-gray-100">
            서비스약관
        </a><br/>
        <a href={COMPANY_INFO.Userule} className="text-lg text-muted-foreground text-gray-100">
            개인정보이용약관
        </a><br/>
        <div className="flex space-x-2 mt-5">
            <a href={COMPANY_INFO.Youtube} className="text-lg text-muted-foreground" >
                <Youtube size={25}/>  
            </a>
            <a href={COMPANY_INFO.Instagram} className="text-lg text-muted-foreground">
                <Instagram size={25}/>
            </a>
        </div>
      </div>
    );
  }
  