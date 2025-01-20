import { Card, CardContent, CardFooter } from "../ui/card";
import { MemberList } from "./memberList";

export function MemberSection() {
    return (
        <div className="w-full">
            <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고있어요</h1>
            {MemberList.map((MemberList) => (
                <Card key={MemberList.id} className="item-center m-6 flex flex-col gap-4">
                    <CardContent className="font-bold p-3 text-base rounded-t-lg shadow-sm font-sans">{MemberList.content}</CardContent>
                    <CardFooter className="font-extrabold p-3 text-sm rounded-b-lg shadow-md font-sans">{MemberList.member}</CardFooter>
                </Card>
            ))}
        </div>
    )
}