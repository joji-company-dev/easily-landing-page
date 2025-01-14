import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/_components/ui/accordion"
import { FAQList } from "./faqList";

export default function FAQSection() {
    return(
        <div className="w-full">
            <h1 className="font-bold text-center text-3xl m-5">자주 묻는 질문</h1>
            <Accordion type="single" className="item-center m-6 flex flex-col gap-4" collapsible>
            {FAQList.map((FAQList) => (
                <AccordionItem key={FAQList.id} value={FAQList.id} >
                    <AccordionTrigger className="bg-white font-bold p-3 text-base rounded-t-lg shadow-sm">{FAQList.title}</AccordionTrigger>
                    <AccordionContent className="bg-white/40 font-bold p-3 text-sm rounded-b-lg shadow-md">{FAQList.content}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
    )
}