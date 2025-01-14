import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/app/_components/ui/accordion";
import { FAQList } from "./fapList";

export default function FAQ() {
    return (
        <div>
            <h1 className="font-bold text-center text-3xl m-5">자주 묻는 질문</h1>
            <Accordion type="single" className="items-center m-6">
                {Object.keys(FAQList).map(key => (
                <AccordionItem key={FAQList[key].key} value={FAQList[key].Number}>
                    <AccordionTrigger className="bg-orange-500 text-white font-bold p-3 text-base">{FAQList[key].Title}</AccordionTrigger>
                    <AccordionContent className="p-3 font-medium text-sm">{FAQList[key].Content}</AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};