import Styled from './Banner.styled';

import ConsoleScreen from '../../Assets/sd_console_scr.svg';

const Banner = () => {
	return (
		<Styled.BannerWpr>
			<div>
				<Styled.Heading>
					Want your users to feel more safe & secure?
				</Styled.Heading>
				<Styled.DescHeading>
					Protect your companies reputation by not being included in biometrics
					data-breaches.
				</Styled.DescHeading>
				<Styled.DescHeading>
					Privacy focused consoles, to check presence on the spot.
				</Styled.DescHeading>
				<Styled.SubHeading>Coming Soon...</Styled.SubHeading>
			</div>
			<Styled.HeroImage src={ConsoleScreen} alt='hero-console' />
		</Styled.BannerWpr>
	);
};

export default Banner;
