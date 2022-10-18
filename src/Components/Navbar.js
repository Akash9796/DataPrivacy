import React, { useState } from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "../data/NavbarData";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Container } from "../globalStyles";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const closeMobileMenu = (to, id) => {
    if (to === "/" && location.pathname === "/") {
      scrollTo(id);
    }
    navigate(to);
    setShow(false);
    console.log(id);
  };

  return (
    <IconContext.Provider value={{ color: "$fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
              }}
            >
              <NavIcon src={logo} />
              Delta
            </Link>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: background-color 0.3s ease-in;
`;
const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

const NavLogo = styled.div`
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

const NavIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  color: white;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    /* display: ${({ show }) => (show ? "none" : "flex")}; */
    display: block;
  }
`;

const NavMenu = styled.ul`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    /* transform: translateY(${({ show }) => (show ? "0" : "-10px")}); */
    transition: opacity 0.5s ease;
    background-color: #071c2f;
  }
  /* > li:first-child {
    margin-left: auto;
  } */
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
`;
