"use client"
import styled from "styled-components"

const AboutContainer = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.background};
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  max-width: 600px;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutText = styled.div`
  p {
    margin-bottom: 20px;
    line-height: 1.8;
  }
`

const InfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const InfoItem = styled.div`
  margin-bottom: 15px;
`

const InfoLabel = styled.span`
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primary};
`

const InfoValue = styled.span`
  color: ${({ theme }) => theme.text};
`

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background: ${({ theme }) => theme.gradient};
  color: white;
  border-radius: 30px;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
  }
`

export default function AboutSection() {
  return (
    <AboutContainer id="about">
      <Content>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>Get to know more about me and my background</SectionSubtitle>

        <AboutContent>
          <AboutText>
            <p>
              I'm a passionate Frontend Developer with 4 years of experience in building high-quality, user-centric web
              applications. I specialize in creating responsive, accessible, and performant web experiences using modern
              technologies.
            </p>
            <p>
              My journey in web development started during my engineering studies, and I've been continuously improving
              my skills since then. I enjoy solving complex problems and turning ideas into reality through clean and
              efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities.
            </p>
            <ResumeButton href="#" target="_blank" rel="noopener noreferrer">
              Download Resume
            </ResumeButton>
          </AboutText>

          <InfoList>
            <InfoItem>
              <InfoLabel>Name:</InfoLabel>
              <InfoValue>Ranjitha CR</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Email:</InfoLabel>
              <InfoValue>ranjithacr17@gmail.com</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Phone:</InfoLabel>
              <InfoValue>+91 9591770363</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Location:</InfoLabel>
              <InfoValue>Bengaluru, India</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Degree:</InfoLabel>
              <InfoValue>B.E. in Electronics and Communication</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Experience:</InfoLabel>
              <InfoValue>4 Years</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Freelance:</InfoLabel>
              <InfoValue>Available</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Languages:</InfoLabel>
              <InfoValue>English, Kannada, Hindi</InfoValue>
            </InfoItem>
          </InfoList>
        </AboutContent>
      </Content>
    </AboutContainer>
  )
}
