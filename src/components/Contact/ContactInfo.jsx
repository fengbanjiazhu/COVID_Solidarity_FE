import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { FaRegCopy, FaInstagram } from "react-icons/fa";
import { toast } from "sonner";

function ContactInfo() {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("c0vidsolidaritysyd@gmail.com");
      toast.success("Copy succeeded!");
    } catch (error) {
      console.log(error);
      toast.error("Copy failed, please try again.");
    }
  };

  const jumpToIns = () => window.open("https://www.instagram.com/c0vidsolidaritysyd/", "_blank");

  return (
    <div>
      <Item variant="outline" className="mb-4">
        <ItemContent>
          <ItemTitle>Email Us:</ItemTitle>
          <ItemDescription>c0vidsolidaritysyd@gmail.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button onClick={copyText} variant="outline" size="sm">
            <FaRegCopy />
          </Button>
        </ItemActions>
      </Item>

      <Item variant="outline" className="mb-4">
        <ItemContent>
          <ItemTitle>Visit us on instagram:</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button onClick={jumpToIns} variant="outline" size="sm">
            <FaInstagram />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

export default ContactInfo;
