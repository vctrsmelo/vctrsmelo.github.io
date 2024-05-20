import React from 'react'
import { Box, Chip, Link, Typography, SvgIcon } from '@mui/material'
import hero from '../../static/hero.png'
import backgroundImage from '../../static/background-min.jpg'
import { Container, styled } from '@mui/system';
import { ReactComponent as LeetCodeSvg } from '../../static/leetcode.svg';
import { SocialMediaButtons } from '../../components/SocialMediaButtons';
import Portfolio from '../Portfolio/Portfolio';

const ProfileImage = styled('img')({
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '4px solid #fff',
    overflow: 'hidden'
})

const Overlay = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(4px)',
    zIndex: -1,
})

export const LeetCodeIcon = (props: any) => (
    <SvgIcon {...props} component={LeetCodeSvg} viewBox="0 0 24 24"/>
)

const FullScreenBackground = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -2, // Ensures the background is behind all content
});

export default () => {

    return (
        <>
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <FullScreenBackground />
                    <Overlay/>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ProfileImage src={hero} alt="profile"/>
                        <Typography variant="h4" mt={4} gutterBottom>
                            Hi, I'm Victor
                        </Typography>
                        <Typography variant="body1" mt={4}>
                            Enthusiastic Software Engineer @AWS with over 5 years of experience in <b>AWS</b> cloud computing, <b>fullstack</b> development with React and TypeScript, and <b>iOS</b> development with Swift.
                        </Typography>
                        <Typography variant="body2" color="white" textAlign="center" mt={2}>
                            Bachelor in Computer Science | {' '}
                            <Link href="https://www.credly.com/badges/9692735a-caf4-40d8-b1ed-d11d2292b445/linked_in?t=rx9n99" color="inherit" target="_blank" rel="noopener noreferrer"> 
                                AWS Certified
                            </Link>
                            {' '}|{' '}
                            <Link href="https://www.wwdcscholars.com/s/8B4A9BF6-ED50-47E2-B04F-423D3BD26F8C/2020" color="inherit" target="_blank" rel="noopener noreferrer">
                                Awarded Apple WWDC Scholarship
                            </Link>
                        </Typography>
                        <SocialMediaButtons mt={4}/>
                    </Box>
                </Box>
            </Container>
            <Portfolio mt={4}/>
        </>
    )
}