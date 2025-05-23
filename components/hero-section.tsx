"use client"
import styled from "styled-components"
import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react"

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.05;
    z-index: -1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 120px;
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const TextContent = styled.div`
  flex: 1;
`

const Greeting = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 600px;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
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

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background: ${({ theme }) => theme.gradient};
  color: white;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
  }
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 5px solid rgba(255, 255, 255, 0.1);
  animation: morphing 10s ease-in-out infinite;

  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    margin-bottom: 30px;
  }
`

const ScrollDown = styled.a`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translate(-50%, -5px);
  }

  @media (max-width: 768px) {
    bottom: 20px;
  }
`

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <Content>
        <TextContent>
          <Greeting>Hello, I'm</Greeting>
          <Name>Ranjitha CR</Name>
          <Title>Frontend Developer</Title>
          <Description>
            Passionate and results-driven Frontend Developer with 4 years of experience in building high-quality,
            user-centric web applications. Specialized in React and modern JavaScript.
          </Description>
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
          <Button href="#contact">Get in Touch</Button>
        </TextContent>
        <ImageContainer>
          <ProfileImageWrapper>
            <Image src="/profile.png" alt="Ranjitha CR" fill style={{ objectFit: "cover" }} priority />
          </ProfileImageWrapper>
        </ImageContainer>
      </Content>
      <ScrollDown href="#about">
        <span>Scroll Down</span>
        <ArrowDown size={20} />
      </ScrollDown>
    </HeroContainer>
  )
}
