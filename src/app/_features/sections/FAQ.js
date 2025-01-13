import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/component/ui/Accordion";
import { FAQList } from "./FAQList";

export default function FAQ() {
    return (
        <div>
            <h1>자주 묻는 질문</h1>
            <Accordion type="single">
                <AccordionItem value={FAQList.Number}>
                    <AccordionTrigger>{FAQList.Title}</AccordionTrigger>
                    <AccordionContent>{FAQList.Content}</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};