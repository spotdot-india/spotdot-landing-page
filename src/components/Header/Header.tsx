import { Link } from 'react-router-dom';

import Logo from '../../assets/sd_logo_small.png';
import SpotoneLogo from '../../assets/sd_one_logo_small.png';

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
                    <Styled.NavLinkItem>merkhet</Styled.NavLinkItem>
                    <Styled.NavLinkItem>studio</Styled.NavLinkItem>
                    <Styled.NavLinkItem>about us</Styled.NavLinkItem>
                </Styled.NavList>
            </Styled.HeaderCnt>
        </Styled.HeaderWpr>
    );
};

export default Header;
