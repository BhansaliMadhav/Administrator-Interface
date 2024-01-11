import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import { useEffect } from "react";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tl1 = gsap.timeline();

  useGSAP(() => {
    tl1.fromTo(
      ".inner-box",
      { x: "-50px", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 1.5, stagger: 0.25 }
    );
  });
  return (
    <Box width="100%" m="0 30px" className="inner-box">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
