import React from 'react';
import { Grid } from '@mui/material';
import Project from './Project';
import { ProjectModel } from './Models';

const ProjectsList = ({ projects, selectedSkills, ...props }: any) => {

  const selectedSkillsSet = new Set(selectedSkills)
  return (
    <Grid container spacing={4} {...props}>
      {projects.filter((project: ProjectModel) => {
        if (selectedSkills.length === 0) { return true }        
        return project.skills.some((skill: string) => selectedSkillsSet.has(skill))
      })
      .map((project: any, index: any) => (
        <Project key={index} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectsList;
