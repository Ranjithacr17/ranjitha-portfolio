"use client"

import styled from "styled-components"
import { MapPin, Mail, Phone } from "lucide-react"

const ContactContainer = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.muted};
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

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  max-width: 600px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ContactCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`

const ContactDetails = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
  }

  p, a {
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`

export default function ContactSection() {
  return (
    <ContactContainer id="contact">
      <Content>
        <SectionTitle>Contact Me</SectionTitle>
        <SectionSubtitle>Get in touch with me for any questions or opportunities</SectionSubtitle>

        <ContactGrid>
          <ContactInfo>
            <ContactCard>
              <IconBox>
                <MapPin size={24} />
              </IconBox>
              <ContactDetails>
                <h3>Location</h3>
                <p>Bengaluru, India 573201</p>
              </ContactDetails>
            </ContactCard>

            <ContactCard>
              <IconBox>
                <Mail size={24} />
              </IconBox>
              <ContactDetails>
                <h3>Email</h3>
                <a href="mailto:ranjithacr17@gmail.com">ranjithacr17@gmail.com</a>
              </ContactDetails>
            </ContactCard>

            <ContactCard>
              <IconBox>
                <Phone size={24} />
              </IconBox>
              <ContactDetails>
                <h3>Phone</h3>
                <a href="tel:+919591770363">+91 9591770363</a>
              </ContactDetails>
            </ContactCard>
          </ContactInfo>
        </ContactGrid>
      </Content>
    </ContactContainer>
  )
}
