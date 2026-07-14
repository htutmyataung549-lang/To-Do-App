import { RecipeDetail } from "@/types/todo";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import IngredientList from "./IngredientList";
import { Text } from "react-native";
interface ReceipeAccordianProps {
  receipe: RecipeDetail;
}

export default function RecipeAccordion({ receipe }: ReceipeAccordianProps) {
  return (
    <Accordion
      type="single"
      isCollapsible={true}
      isDisabled={false}
      className="border border-slate-200 rounded-xl overflow-hidden shadow-sm"
    >
      <AccordionItem value="ingredients" className="border-b border-slate-200">
        <AccordionHeader>
          <AccordionTrigger className="bg-slate-50 p-4">
            <AccordionTitleText className="text-slate-800 font-bold">
              🛒 Ingredients
            </AccordionTitleText>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="p-4 bg-white">
          {/* <AccordionContentText>
          To place an order, simply select the products you want, proceed to
          checkout, provide shipping and payment information, and finalize your
          purchase.
        </AccordionContentText> */}
          <IngredientList receipe={receipe} />
        </AccordionContent>
      </AccordionItem>
      <Divider className="bg-border" />
      <AccordionItem value="steps">
        <AccordionHeader>
          <AccordionTrigger className="bg-slate-50 p-4">
            <AccordionTitleText className="text-slate-800 font-bold">
              👨‍🍳 Instructions
            </AccordionTitleText>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="p-4 bg-white">
          <Text className="text-slate-600 leading-relaxed text-justify text-base">
            {receipe.strInstructions}
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
