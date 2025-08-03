import React from 'react';
import { Card, CardContent, CardMedia, Chip, Typography, Grid, Link, Box, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; 
import { Apple as AppleIcon } from '@mui/icons-material';
import { ProjectModel, LinkModel } from './Models';

const Project = ({ project }: { project: ProjectModel }) => {

    const { award, title, media, skills, description, links } = project;
    const appStoreLink = links.find(link => link.title === 'App Store')
    
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex'}}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 1,
                    height: '100%'
                }}
              >
                {media && (
                    <Box>
                        <CardMedia
                            component={media.type === 'video' ? 'iframe' : 'img'}
                            src={media.url}
                            alt={title}
                            sx={{ width: '100%', height: 'auto' }}
                            {...(media.type === 'video' && { allowFullScreen: true })}
                        />
                    </Box>
                )}
                <CardContent sx={{ paddingTop: 4, flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                    {award && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1, backgroundColor: 'rgba(255, 215, 0, 0.1)', borderRadius: 1 }}>
                            <EmojiEventsIcon sx={{ color: 'gold', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            {award}
                            </Typography>
                        </Box>
                    )}
                    {appStoreLink && (
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2, p: 1, backgroundColor: 'rgba(184, 209, 225, 0.1)', borderRadius: 1 }}>
                            <AppleIcon sx={{ color: 'lightblue', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            Published on the App Store<br/> 
                            <Link href={appStoreLink.url} target="_blank" rel="noopener">
                                Check here
                            </Link>
                            </Typography>
                        </Box>
                    )}
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2} paragraph>
                        {description}
                    </Typography>
                    <Box sx={{ mt: 'auto'}}>
                        <Stack 
                            direction="row"
                            spacing={1} // Space between chips
                            sx={{ flexWrap: 'wrap' }}
                            mb={2}
                        >
                            {skills.map((skill: string, index: number) => (
                                <Chip key={index} label={skill} />
                            ))}
                        </Stack>
                        {links.map((link: LinkModel, index: number) => (
                            <Link href={link.url} target="_blank" rel="noopener" key={index} sx={{ display: 'block', mb: 1 }}>
                                {link.title}
                            </Link>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Project;
