import React from 'react';
import { Box, IconButton } from '@mui/material';
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { LeetCodeIcon } from '../pages/Home/Home';

export const SocialMediaButtons = (props: any) => (
    <Box {...props} display="flex" justifyContent="center" gap={1}>
        <IconButton href="https://www.linkedin.com/in/vsmelo/" target="_blank" rel="noopener" color="inherit">
            <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://github.com/vctrsmelo" target="_blank" rel="noopener" color="inherit">
            <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://leetcode.com/u/vctrsmelo/" target="_blank" rel="noopener" color="inherit">
            <LeetCodeIcon fontSize="large" />
        </IconButton>
    </Box>
);
