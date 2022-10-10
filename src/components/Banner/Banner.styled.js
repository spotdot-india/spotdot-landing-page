import styled, { keyframes } from 'styled-components';

//? ANIMATIONS
const fadeIn = keyframes`
 from { opacity: 0; scale: 0.95; }
 to { opacity: 1; scale: 1; }
`;

//? STYLES
const BannerWpr = styled.div`
    text-align: center;
`;

//? COMMON COMPS
const DescHeading = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    animation: ${fadeIn} 0.2s ease-out;
`;

const BoxHeading = styled.div`
    margin: 100px auto 0px auto;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px red solid; */
`;

const Heading = styled.h1`
    width: 755px;
    font-size: 3rem;
    font-weight: 400;
    /* font-family: 'DM Sans', sans-serif; */
    margin-bottom: 20px;
    animation: ${fadeIn} 0.2s ease-out;
`;

const SubHeading = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
    margin-top: 150px;
`;

const DescHeadingOne = styled(DescHeading)`
    margin-top: 50px;
`;

const DescHeadingTwo = styled(DescHeading)`
    margin-top: 300px;
    font-size: 1.7rem;
    font-family: 'Manrope', sans-serif;
    margin-bottom: 50px;
`;

const HeroImage = styled.img`
    margin-top: 250px;
    width: 360px;
`;

const ConsolePortrait = styled.img`
    width: 230px;
`;

const styles = {
    BannerWpr,
    Heading,
    DescHeadingOne,
    DescHeadingTwo,
    BoxHeading,
    SubHeading,
    DescHeading,
    HeroImage,
    ConsolePortrait,
};

export default styles;
