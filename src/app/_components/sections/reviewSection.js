//import { Card, CardContent } from "@/app/_components/ui/card";
//import { Separator } from "@/app/_components/ui/separator";
//import { Skeleton } from "../ui/skeleton";
//import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { REVIEW_LIST } from "./review_List";

export function ReviewSection() {
    return (
        /* card */
        // <div className="w-full">
        //     <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고 있어요</h1>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10 items-center">
        //         {MemberList.map((MemberList) => (
        //             <Card key={MemberList.id} className="w-[18rem] h-[18rem] text-center border-orange-300">
        //                 <CardContent className="font-bold p-10 text-base rounded-t-lg shadow-sm font-sans w-[300px] h-[230px]">{MemberList.content}</CardContent>
        //                 <CardContent className="font-extrabold p-5 text-sm rounded-b-lg shadow-md font-sans w-[300px] h-[70px]">{MemberList.member}</CardContent>
        //             </Card>
        //         ))}
        //     </div>
        // </div>

        /* separator */
        // <div className="w-full">
        //     <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고 있어요</h1>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10 items-center">
        //         {MemberList.map((MemberList) => (
        //             <div key={MemberList.id} className="w-[18rem] h-[18rem] text-center border-orange-300">
        //                 <div className="space-y-1">
        //                     <div className="font-bold p-10 text-base rounded-t-lg shadow-sm font-sans w-[18rem] h-[230px]">{MemberList.content}</div>
        //                 </div>
        //                 <Separator className="my-4" />
        //                 <div className="flex h-5 items-center space-x-4 text-sm">
        //                     <div className="font-extrabold p-5 text-sm rounded-b-lg shadow-md font-sans w-[18rem] h-[70px]">{MemberList.member}</div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        /* skeleton */
        // <div className="w-full">
        //     <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고 있어요</h1>
        //     <div className="gap-4 m-10 items-center">
        //         {MemberList.map((MemberList) => (
        //             <div key={MemberList.id} className="w-[18rem] h-[18rem] text-center border-orange-300">
        //                 <Skeleton className="h-4 w-[250px]">{MemberList.content}</Skeleton>
        //                 <Skeleton className="h-4 w-[200px]">{MemberList.member}</Skeleton>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        /* Resizable */
        // <div>
        //     <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고 있어요</h1>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10 items-center">
        //         {MemberList.map((MemberList) => (
        //             <ResizablePanelGroup
        //             direction="vertical"
        //             className="min-h-[350px] max-w-md rounded-lg border md:min-w-[300px] border-orange-400 text-center"
        //             key={MemberList.id}
        //             >
        //             <ResizablePanel defaultSize={100}>
        //                 <div className="flex h-full items-center justify-center p-6">
        //                 <span className="font-semibold">{MemberList.content}</span>
        //                 </div>
        //             </ResizablePanel>
        //             <ResizableHandle />
        //             <ResizablePanel defaultSize={50}>
        //                 <div className="flex h-full items-center justify-center p-6">
        //                 <span className="font-semibold">{MemberList.member}</span>
        //                 </div>
        //             </ResizablePanel>
        //             </ResizablePanelGroup>
        //         ))}
        //     </div>
        // </div>
        
        /* alert */
        <div>
            <h1 className="font-black text-center text-3xl m-5 font-sans">많은 고객에게 사랑받고 있어요</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10 items-center">
                {REVIEW_LIST.map((REVIEW_LIST) => (
                    <Alert key={REVIEW_LIST.id} className="w-[18rem] h-[18rem] text-center border-orange-300">
                        <AlertTitle className="font-bold p-10 text-base rounded-t-lg shadow-sm font-sans w-[18rem] h-[230px]">{REVIEW_LIST.content}</AlertTitle>
                        <AlertDescription class>{REVIEW_LIST.member}</AlertDescription>
                    </Alert>
                ))}
            </div>
        </div>
    )
};
