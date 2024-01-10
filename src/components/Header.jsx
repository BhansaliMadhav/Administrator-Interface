import { Typography, Box, useTheme, colors } from "@mui/material";
import { tokens } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useGSAP(() => {
    gsap.fromTo(
      ".header",
      { y: "5rem", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, stagger: 0.001, delay: 2 }
    );
  });
  return (
    <Box mb={"30px"} class={"header"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
