// Icon
import { ArrowRight } from "lucide-react";

// Styled
import {
  Brand,
  JoinButton,
  LoginButton,
  NavActions,
  NavbarContainer,
  NavLink,
  NavMenu,
} from "./Navbar.styled";

function Navbar() {
  return (
    <NavbarContainer>
      <Brand>Brandname</Brand>

      <NavMenu>
        <NavLink>Home</NavLink>
        <NavLink>Product</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Contact</NavLink>
      </NavMenu>

      <NavActions>
        <LoginButton>Login</LoginButton>
        <JoinButton>
          JOIN US <ArrowRight size={15} />
        </JoinButton>
      </NavActions>
    </NavbarContainer>
  );
}

export default Navbar;
