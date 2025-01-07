import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
      <div className="w-full p-10 h-auto bg-black text-white">
        <h2 className="text-2xl font-bold mb-6">JOJI COMPANY</h2>
        <p className="text-lg text-muted-foreground text-gray-500">
            대표자: 조영진<br/>
            주소 : 경기도 안양시 시민대327번길 11-41306호<br/>
            contact mail : contact@jojicompany.com<br/>
            contact phone : 010-7510-7298
        </p><br/>
        <a href="#" className="text-lg text-muted-foreground text-gray-400">
            서비스 약관 
        </a><br/>
        <a href="#" className="text-lg text-muted-foreground text-gray-400">
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
  