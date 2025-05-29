
import styled from 'styled-components';
const Footer =() =>{
    return(
        <FooterContainer>
            <p>© 2023 My Project. All rights reserved.</p>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`;
export default Footer;