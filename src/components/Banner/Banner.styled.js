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

const Heading = styled.h1`
	margin-top: 100px;
	font-size: 3rem;
	font-weight: 900;
	margin-bottom: 20px;
	animation: ${fadeIn} 0.2s ease-out;
`;

const SubHeading = styled.h2`
	font-size: 2rem;
	font-weight: 900;
	margin-top: 50px;
`;

const DescHeading = styled.p`
	font-size: 1.3rem;
	font-weight: 400;
	font-family: 'DM Sans', sans-serif;
	animation: ${fadeIn} 0.2s ease-out;
`;

const HeroImage = styled.img`
	margin-top: 50px;
	width: 250px;
`;

const styles = {
	BannerWpr,
	Heading,
	SubHeading,
	DescHeading,
	HeroImage,
};

export default styles;
