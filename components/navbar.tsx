"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { useTheme } from "@/components/theme-provider"
import { Sun, Moon, Menu, X } from "lucide-react"

const NavbarContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme, scrolled }) => (scrolled ? theme.navBg : "transparent")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
  padding: ${({ scrolled }) => (scrolled ? "15px 0" : "20px 0")};
  box-shadow: ${({ theme, scrolled }) => (scrolled ? theme.shadow : "none")};
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadow};
    z-index: 101;
  }
`

const NavLink = styled.a`
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: ${({ theme }) => theme.gradient};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 15px 0;
  }
`

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.muted};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 102;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavContent>
          <Logo>Ranjitha CR</Logo>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink href="#home" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink href="#skills" onClick={closeMenu}>
              Skills
            </NavLink>
            <NavLink href="#experience" onClick={closeMenu}>
              Experience
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </NavLinks>
          <div style={{ display: "flex", gap: "10px" }}>
            <ThemeToggle onClick={toggleTheme}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </ThemeToggle>
            <MobileMenuButton onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>
          </div>
        </NavContent>
      </NavbarContainer>
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  )
}
