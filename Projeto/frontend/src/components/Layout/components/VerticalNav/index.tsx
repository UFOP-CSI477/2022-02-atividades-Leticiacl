import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { LayoutContext } from "../../../../contexts/layout";
import { PropsChildrenOnly } from "../../../../shared/types/utils";
import colors from "../../../../styles/colors";
import { NavList, UserInfo } from "./components";
import {
  AppDrawer,
  MobileHeader,
  VerticalNavContainer,
  VerticalNavContentContainer,
  VerticalNavContentWrapper,
} from "./styles";

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { isMobile, toggleDrawer, drawerIsOpen } = useContext(LayoutContext);

  return (
    <VerticalNavContainer>
      <AppDrawer
        component="aside"
        drawerIsOpen={drawerIsOpen}
        isMobile={isMobile}
      >
        {isMobile && drawerIsOpen && (
          <MobileHeader component="header">
            <IconButton
              aria-label="fecha o menu de navegação"
              onClick={toggleDrawer}
              edge="end"
            >
              <CloseIcon sx={{ fill: colors.orange[500] }} />
            </IconButton>
          </MobileHeader>
        )}
        <UserInfo />
        <NavList />
      </AppDrawer>
      <VerticalNavContentWrapper component="section" isMobile={isMobile}>
        <VerticalNavContentContainer>
          {isMobile && (
            <MobileHeader>
              <Button onClick={toggleDrawer}>
                <MenuIcon sx={{ fill: colors.orange[500] }} />
              </Button>
            </MobileHeader>
          )}
          {children}
        </VerticalNavContentContainer>
      </VerticalNavContentWrapper>
    </VerticalNavContainer>
  );
};
export default React.memo(VerticalNavbar);
