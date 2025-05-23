"use client"

import React from "react"
import styled from "styled-components"
import { Briefcase, GraduationCap } from "lucide-react"

const ExperienceContainer = styled.section`
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

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.border};
`

const Tab = styled.button<{ active: boolean }>`
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  background: transparent;
  color: ${({ theme, active }) => (active ? theme.primary : theme.text)};
  border-bottom: 3px solid ${({ theme, active }) => (active ? theme.primary : "transparent")};
  margin-bottom: -2px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 576px) {
    padding: 10px 15px;
    font-size: 1rem;
  }
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.border};

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const TimelineItem = styled.div<{ isLeft: boolean }>`
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${({ isLeft }) => (isLeft ? "0" : "50%")};
  }
`

const TimelineContent = styled.div<{ isLeft: boolean }>`
  position: relative;
  padding: 30px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-left: 30px;
  
  @media (min-width: 768px) {
    margin-left: ${({ isLeft }) => (isLeft ? "0" : "30px")};
    margin-right: ${({ isLeft }) => (isLeft ? "30px" : "0")};
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    
    @media (max-width: 767px) {
      left: -40px;
    }
    
    @media (min-width: 768px) {
      left: ${({ isLeft }) => (isLeft ? "auto" : "-40px")};
      right: ${({ isLeft }) => (isLeft ? "-40px" : "auto")};
    }
  }
`

const TimelineDate = styled.div`
  display: inline-block;
  padding: 5px 15px;
  background: ${({ theme }) => theme.muted};
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text};
`

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`

const TimelineSubtitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  line-height: 1.6;
`

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = React.useState("experience")

  const experienceData = [
    {
      date: "01/2021 - Present",
      title: "Software Engineer",
      company: "Toshiba India Software Pvt Ltd",
      location: "Bengaluru, India",
      description:
        "Developing and maintaining React components, enhancing UI consistency and user experience. Implementing performance optimizations like lazy loading and code splitting. Collaborating with backend developers and designers for seamless feature integration.",
    },
    {
      date: "03/2020 - 01/2021",
      title: "UI Developer",
      company: "Adroitent ITES Pvt Ltd",
      location: "Bengaluru, India",
      description:
        "Built pixel-perfect responsive UI, ensuring cross-browser compatibility. Improved code reusability by developing modular and scalable components. Worked in an Agile environment, contributing to sprint planning and retrospectives.",
    },
  ]

  const educationData = [
    {
      date: "2016 - 2020",
      title: "Bachelor of Engineering",
      institution: "Government Engineering College",
      location: "Hassan, India",
      description:
        "Specialized in Electronics and Communication Engineering. Participated in various technical events and workshops. Completed projects related to web development and electronics.",
    },
  ]

  return (
    <ExperienceContainer id="experience">
      <Content>
        <SectionTitle>Experience</SectionTitle>
        <SectionSubtitle>My professional journey and educational background</SectionSubtitle>

        <TabsContainer>
          <Tab active={activeTab === "experience"} onClick={() => setActiveTab("experience")}>
            <Briefcase size={18} style={{ marginRight: "8px", verticalAlign: "middle" }} />
            Experience
          </Tab>
          <Tab active={activeTab === "education"} onClick={() => setActiveTab("education")}>
            <GraduationCap size={18} style={{ marginRight: "8px", verticalAlign: "middle" }} />
            Education
          </Tab>
        </TabsContainer>

        <Timeline>
          {activeTab === "experience" &&
            experienceData.map((item, index) => (
              <TimelineItem key={index} isLeft={index % 2 === 0}>
                <TimelineContent isLeft={index % 2 === 0}>
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>
                    {item.company} - {item.location}
                  </TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}

          {activeTab === "education" &&
            educationData.map((item, index) => (
              <TimelineItem key={index} isLeft={index % 2 === 0}>
                <TimelineContent isLeft={index % 2 === 0}>
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>
                    {item.institution} - {item.location}
                  </TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </Content>
    </ExperienceContainer>
  )
}
