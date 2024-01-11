import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      className="headings"
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  useGSAP(() => {
    if (!isCollapsed) {
      gsap.fromTo(
        ".my-sidebar",
        { x: "-100%", opacity: 0 },
        { x: "0", opacity: 1, duration: 1.25, stagger: 0.001 }
      );

      gsap.fromTo(
        ".menu-icon",
        { opacity: 0, y: "-40px" },
        { opacity: 1, y: 0, duration: 1, stagger: 0.001, delay: 0.5 }
      );
      gsap.fromTo(
        ".name",
        { opacity: 0, y: "-100px" },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo",
          stagger: 0.001,
          delay: "1",
        }
      );
      gsap.fromTo(
        ".headings",
        { x: "-100%" },
        { x: 0, duration: 1, stagger: 0.1, delay: 1.2, ease: "expo" }
      );
    }
  }, [isCollapsed]);
  useGSAP(() => {
    if (isCollapsed) {
      gsap.fromTo(
        ".headings",
        { x: "70px" },
        { x: 0, duration: 1, stagger: 0.1, ease: "expo" }
      );
    }
  }, [isCollapsed]);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `#868dfb !important`,
        },
        "& .pro-menu-item.active": {
          color: `#6870fa !important`,
        },
      }}
      className={"my-sidebar"}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo and menu icon */}
          <MenuItem
            class="menu-icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml={"15px"}
              >
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  className="admin-text"
                >
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb={"25px"} className="name">
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className={"user"}
              >
                <img
                  alt="profile-user"
                  width={"100px"}
                  height={"100px"}
                  src={`../../assets/user.png`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight={"bold"}
                  sx={{ m: "10px 0 0 0" }}
                >
                  Madhav
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu Items */}
          <Box
            paddingLeft={isCollapsed ? undefined : "10%"}
            className="headings"
          >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px " }}
              className="headings"
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px " }}
              className="headings"
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              className="headings"
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px " }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
