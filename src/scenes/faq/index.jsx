import { Typography, Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subTitle={"Frequently Asked Questions"} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet tellus quis lacus venenatis luctus. Suspendisse elit mauris,
            efficitur eu leo ac, tincidunt suscipit augue. Aenean faucibus magna
            non libero tincidunt, imperdiet tincidunt elit pharetra. Nam et
            posuere ex.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet tellus quis lacus venenatis luctus. Suspendisse elit mauris,
            efficitur eu leo ac, tincidunt suscipit augue. Aenean faucibus magna
            non libero tincidunt, imperdiet tincidunt elit pharetra. Nam et
            posuere ex.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet tellus quis lacus venenatis luctus. Suspendisse elit mauris,
            efficitur eu leo ac, tincidunt suscipit augue. Aenean faucibus magna
            non libero tincidunt, imperdiet tincidunt elit pharetra. Nam et
            posuere ex.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet tellus quis lacus venenatis luctus. Suspendisse elit mauris,
            efficitur eu leo ac, tincidunt suscipit augue. Aenean faucibus magna
            non libero tincidunt, imperdiet tincidunt elit pharetra. Nam et
            posuere ex.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Quextion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet tellus quis lacus venenatis luctus. Suspendisse elit mauris,
            efficitur eu leo ac, tincidunt suscipit augue. Aenean faucibus magna
            non libero tincidunt, imperdiet tincidunt elit pharetra. Nam et
            posuere ex.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
