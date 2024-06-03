import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Alert from '@mui/material/Alert';
import ReactGA from 'react-ga4'
import ProjectGrid from './ProjectGrid';
import ItemsSelector from '../../components/ItemsSelector';
import { ProjectModel } from './Models';

const projects: ProjectModel[] = [
    {
        title: 'Time is Money Calculator',
        media: { type: 'video', url: 'https://www.youtube.com/embed/h82OkNXmF9E' },
        skills: ['iOS','Swift', 'SwiftUI'],
        description: "Published iOS app that converts the price of anything from currency to time, using as reference your work schedule and monthly income.",
        links: [
            { title: 'App Store', url: 'https://apps.apple.com/us/app/time-is-money-calculator/id1495915563'}, 
        ],
    },
    {
        title: 'Video Filters with Swift + OpenCV',
        media: { type: 'video', url: 'https://www.youtube.com/embed/hCYMPG89HQQ' },
        skills: ['MacOS','Swift', 'OpenCV'],
        description: "Project integrating OpenCV with Swift to apply filters in a video. Multiple filters were created and used matrices to apply the desired one. This project was developed while in college.",
        links: [
            { title: 'Github', url: 'https://github.com/vctrsmelo/Photochopp'}, 
        ],
    },
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
      skills: ['iOS', 'Swift', 'SwiftUI'],
      description: 'My implementation of the breath animation in SwiftUI.',
      links: [{ title: 'Github', url: 'https://github.com/vctrsmelo/Breathe-Animation-Replica' }],
    },
    {
      title: 'My Personal Website',
      media: { type: 'image', url: 'https://raw.githubusercontent.com/vctrsmelo/vctrsmelo.github.io/main/images/home.png' },
      skills: ['React', 'TypeScript'],
      description: 'An static website implemented using React, Typescript and MaterialUI. I decided for a static website so I could host it for free using Github Pages.',
      links: [{ title: 'Github', url: 'https://github.com/vctrsmelo/vctrsmelo.github.io/tree/main' }],
    },
    // Add more projects as needed
];


const skillCounts: { [key: string]: number } = {};

  projects.forEach(project => {
    project.skills.forEach(skill => {
      skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
  });
  
// Convert the skillCounts object into an array of [skill, count] pairs, then sort by count
const sortedSkills = Object.entries(skillCounts).sort((a, b) => b[1] - a[1]);
  
const initialSkillsState: Record<string, boolean> = sortedSkills
  .reduce((acc, skill) => {
      acc[skill[0]] = false
      return acc
}, {} as Record<string, boolean>)

// const PortfolioAlert = () => {
//   return (
//     <Box my={4}>
//       <Alert
//         severity="info"
//         icon={false}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           backgroundColor: 'rgba(0, 123, 255, 0.1)', // Light blue background for visibility
//           padding: 2,
//           borderRadius: 2,
//         }}
//       >
//         <Typography variant="body1">
//           I'm still working on this page during my free time. Hopefully soon I'll display all my side projects here, but for now feel free to check my Github for other projects.
//         </Typography>
//       </Alert>
//     </Box>
//   );
// };

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
          {/* <PortfolioAlert/> */}
          <ItemsSelector
              items={skills} 
              onClickItem={(skill: string) => {
                toggleSkill(skill)
                ReactGA.event({
                  category: 'Skills',
                  action: 'Click',
                  label: skill
                })
              }}
          />
          <ProjectGrid selectedSkills={selectedSkills} projects={projects} mt={2} />
          </Container>
      </Box>
  )
}