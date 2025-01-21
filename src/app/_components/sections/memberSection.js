import { Card, CardContent } from "@/app/_components/ui/card"
import { MemberList } from "./memberList";

export function MemberSection() {
    return (
        <div className="w-full">
            <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고있어요</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10 items-center">
                {MemberList.map((MemberList) => (
                    <Card key={MemberList.id} className="w-[300px] h-[300px] text-center border-orange-300">
                        <CardContent className="font-bold p-10 text-base rounded-t-lg shadow-sm font-sans w-[300px] h-[230px]">{MemberList.content}</CardContent>
                        <CardContent className="font-extrabold p-5 text-sm rounded-b-lg shadow-md font-sans w-[300px] h-[70px]">{MemberList.member}</CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}