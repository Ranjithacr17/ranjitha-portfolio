"use client"
import styled from "styled-components"
import { GitlabIcon as GitHub, Linkedin, Mail, Heart } from "lucide-react"

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.background};
  padding: 60px 20px 30px;
  position: relative;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.muted};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 576px) {
    gap: 15px;
  }
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Copyright = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Logo>Ranjitha CR</Logo>

        <SocialLinks>
          <SocialLink href="https://github.com/Ranjithacr17/" target="_blank" rel="noopener noreferrer">
            <GitHub size={20} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/ranjitha-c-r-699662191"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </SocialLink>
          <SocialLink href="mailto:ranjithacr17@gmail.com">
            <Mail size={20} />
          </SocialLink>
        </SocialLinks>

        <FooterLinks>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#experience">Experience</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>

        <Copyright>
          © {new Date().getFullYear()} Ranjitha CR. All rights reserved. Made with{" "}
          <Heart size={16} color="#ff6b6b" style={{ margin: "0 5px" }} />
        </Copyright>
      </Content>
    </FooterContainer>
  )
}
