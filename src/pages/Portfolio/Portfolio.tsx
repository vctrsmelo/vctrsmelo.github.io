import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Alert from '@mui/material/Alert';
import { SocialMediaButtons } from '../../components/SocialMediaButtons'
import ProjectGrid from './ProjectGrid';
import ItemsSelector from '../../components/ItemsSelector';
import { ProjectModel } from './Models';

const projects: ProjectModel[] = [
    {
        award: 'WWDC 2020 Scholarship Winner',
        title: 'Tic Tac Toe! Humanity VS. AI',
        media: { type: 'video', url: 'https://www.youtube.com/embed/ov_U4okydMo' },
        skills: ['iOS', 'Swift', 'Game', 'SwiftUI'],
        description: "AI challenges humanity to a game of Tic Tac Toe, but we've hacked the system to gain superpowers! By combining storytelling with the BFS algorithm, this innovative project was recognized and selected as one of the top 300 student submissions worldwide for the Apple WWDC 2020 scholarship.",
        links: [
            { title: 'Github', url: 'https://github.com/vctrsmelo/WWDC20'}, 
            { title: 'WWDC Scholars', url: 'https://www.wwdcscholars.com/s/8B4A9BF6-ED50-47E2-B04F-423D3BD26F8C/2020'}
        ],
    },
    {
      title: 'Apple Watch Breath Replica',
      media: { type: 'image', url: 'https://raw.githubusercontent.com/vctrsmelo/Breathe-Animation-Replica/master/demo.gif' },
      skills: ['iOS', 'Animation', 'Swift', 'SwiftUI'],
      description: 'My implementation of the breath animation in SwiftUI.',
      links: [{ title: 'Github', url: 'https://github.com/vctrsmelo/Breathe-Animation-Replica' }],
    },
    // Add more projects as needed
  ];

  const PortfolioAlert = () => {
    return (
      <Box my={4}>
        <Alert
          severity="info"
          icon={false}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 123, 255, 0.1)', // Light blue background for visibility
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="body1">
            I'm still working on this page during my free time. Hopefully soon I'll display all my side projects here, but for now feel free to check my Github for other projects.
          </Typography>
        </Alert>
      </Box>
    );
  };

const initialSkillsState: Record<string, boolean> = projects
  .flatMap(project => project.skills)
  .reduce((acc, skill) => {
      acc[skill] = false
      return acc
}, {} as Record<string, boolean>)

export default (props: any) => {

  const [skills, setSkills] = useState<Record<string, boolean>>(initialSkillsState)

  const toggleSkill = (skill: string) => {
      setSkills(prevSkills => ({
          ...prevSkills,
          [skill] : !prevSkills[skill]
      }))
  }

  const selectedSkills = Object.entries(skills)
        .filter(([key, value]) => value)
        .map(([key]) => key);

  return (
      <Box sx={{ pt: 4, pb: 8 }} style={{ background: '#111111', width: '100%'}} {...props}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
              Side Projects
          </Typography>
          <PortfolioAlert/>
          <ItemsSelector 
              items={skills} 
              onClickItem={(skill: string) => {
                  console.log(`Clicked on ${skill}`)
                  toggleSkill(skill)
              }}
          />
          <ProjectGrid selectedSkills={selectedSkills} projects={projects} mt={2} />
          </Container>
      </Box>
  )
}