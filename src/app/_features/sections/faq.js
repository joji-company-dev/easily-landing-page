import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/app/_components/ui/accordion";
import { FAQList } from "./FAQList";

export default function FAQ() {
    return (
        <div>
            <h1>자주 묻는 질문</h1>
            <Accordion type="multiple">
                {Object.keys(FAQList).map(key => (
                <AccordionItem key={FAQList[key].key} value={FAQList[key].Number}>
                    <AccordionTrigger>{FAQList[key].Title}</AccordionTrigger>
                    <AccordionContent>{FAQList[key].Content}</AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};