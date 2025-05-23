"use client"
import styled from "styled-components"
import { Code, Layout, Zap, Layers, Users, GitBranch } from "lucide-react"

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  padding: 30px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
`

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text};
`

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 20px;
`

const TechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`

const TechItem = styled.li`
  background: ${({ theme }) => theme.muted};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`

export default function SkillsSection() {
  const skills = [
    {
      icon: <Code size={30} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern technologies.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Redux"],
    },
    {
      icon: <Layout size={30} />,
      title: "UI/UX Implementation",
      description: "Implementing pixel-perfect designs with attention to detail and user experience.",
      technologies: ["Responsive Design", "CSS-in-JS", "Figma", "Accessibility"],
    },
    {
      icon: <Zap size={30} />,
      title: "Performance Optimization",
      description: "Improving website performance through various optimization techniques.",
      technologies: ["Lazy Loading", "Code Splitting", "Memoization", "Bundle Analysis"],
    },
    {
      icon: <Layers size={30} />,
      title: "State Management",
      description: "Managing application state efficiently for complex user interfaces.",
      technologies: ["Redux", "Context API", "Recoil", "MobX"],
    },
    {
      icon: <Users size={30} />,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver high-quality products.",
      technologies: ["Agile", "Scrum", "Code Reviews", "Mentoring"],
    },
    {
      icon: <GitBranch size={30} />,
      title: "Version Control",
      description: "Managing code changes and collaborating with other developers efficiently.",
      technologies: ["Git", "GitHub", "GitLab", "Branching Strategies"],
    },
  ]

  return (
    <SkillsContainer id="skills">
      <Content>
        <SectionTitle>My Skills</SectionTitle>
        <SectionSubtitle>Here are the skills and technologies I work with</SectionSubtitle>

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <TechList>
                {skill.technologies.map((tech, techIndex) => (
                  <TechItem key={techIndex}>{tech}</TechItem>
                ))}
              </TechList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Content>
    </SkillsContainer>
  )
}
