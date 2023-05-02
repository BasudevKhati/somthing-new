import styled from 'styled-components';
import { 
    Logo,
    OR,
    BR,
    CR,
    Plus,
} from './images/Images';

export const SideIcons = () => {

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 16px;
    `;

    const ImageWrapper = styled.button`
        padding: 6px 0;
    `

    
    return (
        <div >
            <Wrapper >
                <ImageWrapper>
                    <Logo />
                </ImageWrapper>
                <ImageWrapper>
                    <OR />
                </ImageWrapper>
                <ImageWrapper>
                    <BR />
                </ImageWrapper>
                <ImageWrapper>
                    <CR />
                </ImageWrapper>
                <ImageWrapper>
                    <Plus />
                </ImageWrapper>
            </Wrapper>
        </div>
    );
}