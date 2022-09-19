import { Link } from 'react-router-dom';

import Logo from '../../Assets/sd_logo_small.png';
import SpotoneLogo from '../../Assets/sd_one_logo_small.png';

import Styled from './Header.styled';

const Header = () => {
	return (
		<Styled.HeaderWpr>
			<Styled.HeaderCnt>
				<Styled.NavLink to='/'>
					<Styled.Logo src={Logo} />
				</Styled.NavLink>
				<Styled.NavList>
					<Link to='/spotone'>
						<Styled.NavLinkLogo src={SpotoneLogo} />
					</Link>
					<Styled.NavLinkItem>Products</Styled.NavLinkItem>
					<Styled.NavLinkItem>About Us</Styled.NavLinkItem>
				</Styled.NavList>
			</Styled.HeaderCnt>
		</Styled.HeaderWpr>
	);
};

export default Header;
