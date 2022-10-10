import styled from 'styled-components';

const HeaderWpr = styled.div`
    border-bottom: 1px #e8e8e8 solid;
`;

const HeaderCnt = styled.div`
    padding: 10px 16px;
    width: 1200px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 110px;
`;

const NavList = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const NavLinkLogo = styled.img`
    margin-top: 9px;
    width: 77px;
`;

const NavLinkItem = styled.a`
    cursor: pointer;
    font-size: 1.125rem;
`;

const styles = {
    HeaderWpr,
    Logo,
    NavLinkLogo,
    NavList,
    NavLinkItem,
    HeaderCnt,
};

export default styles;
