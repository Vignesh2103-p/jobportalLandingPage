import { Button, IconButton, Menu as MuiMenu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { useState } from "react";

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Header>
      <Logo>
        <LogoIcon loading="lazy" alt="" src="/logo.svg" />
        <Postjob>PostJob</Postjob>
      </Logo>

      <Menu>
        <a href="#">AI Cover Letter Generator</a>
        <a href="#">Resume Template</a>
        <a href="#">Pricing</a>
      </Menu>

      <MobileMenuIcon onClick={handleMenuClick}>
        <MenuIcon />
      </MobileMenuIcon>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        keepMounted
      >
        <MenuItem onClick={handleMenuClose}>AI Cover Letter Generator</MenuItem>
        <MenuItem onClick={handleMenuClose}>Resume Template</MenuItem>
        <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
      </MuiMenu>
      <IconButtons>
        <Button1
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16px",
            borderColor: "#6de754",
            borderRadius: "12px",
            "&:hover": { borderColor: "#6de754" },
          }}
        >
          Sign In
        </Button1>
        <Button2
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16px",
            background: "#6de754",
            borderRadius: "12px",
            "&:hover": { background: "#6de754" },
          }}
        >
          Get Started
        </Button2>
      </IconButtons>
    </Header>
  );
};

// Styled components
const LogoIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const Postjob = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: 0.02em;
  color: inherit;
  display: inline-block;
  min-width: 59px;
  font-family: "SF Pro Display", sans-serif;
  font-weight: 600;
  white-space: nowrap;
`;

const Logo = styled.div`
  border-radius: var(--br-81xl);
  overflow: hidden;
  display: flex;
  margin-right: 40px;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: center;
  padding: var(--padding-xs);
  gap: var(--gap-9xs);

  @media screen and (max-width: 1050px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 470px) {
    font-size: 14px;
  }
`;

const Button1 = styled(Button)`
  height: 44px;
  width: 119px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  @media screen and (max-width: 512px) {
    width: 90px;
    font-size: 14px;
  }
`;

const Button2 = styled(Button)`
  height: 44px;
  flex: 1;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  @media screen and (max-width: 512px) {
    width: 90px;
    font-size: 13px;
  }
`;

const IconButtons = styled.div`
  width: 292px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-base);
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 16px;
  margin-right: auto;
  color: gray;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }

  @media screen and (max-width: 1050px) {
    gap: 15px;
    font-size: 14px;
  }
  @media screen and (max-width: 950px) {
    gap: 10px;
    margin-right: 20px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  width: 90%;
  font-size: 16px;
  align-items: center;
  padding: 0 20px;
`;

const MobileMenuIcon = styled(IconButton)`
  display: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 800px) {
    display: block;
    color: var(--color-white);
  }
`;

export default HeaderComponent;
