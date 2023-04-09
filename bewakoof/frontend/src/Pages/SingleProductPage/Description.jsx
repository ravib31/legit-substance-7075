import { BiPlus } from "react-icons/bi";
import { GrFormSubtract } from "react-icons/gr";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";

const Description = ({children,title}) => {
  return (
    <div>
        <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {title}
                        </Box>
                        {isExpanded ? (
                          <GrFormSubtract fontSize="12px" />
                        ) : (
                          <BiPlus fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel width={'500px'}>
                       {children}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

    </div>
  )
}

export default Description