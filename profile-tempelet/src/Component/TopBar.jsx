import styled from "styled-components";
import {BsPhone} from "react-icons/bs";
export const TopBar = () => {

    const TitleBar  = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;
        width: 280px;
        height: 64px;
        background-color: white;
        border-radius: 8px;
    `

    const H1Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        background-color: white;
    `

    const H1 = styled.h1`
        color: #344054;
        font-weight: 700;
        font-size: 20px;
        background-color: white;
    `

    const P = styled.p`
        color: #667085;
        font-size: 14px;
        background-color: white;
    `

    const MobileIcon = styled.div`
    `;

    return (
        <TitleBar>
            <H1Wrapper>
                <H1> Oregon Region </H1>
                <P> $114.45 </P>
            </H1Wrapper>
            <MobileIcon> 
                <BsPhone  size={25} style={{backgroundColor: "white"}}/>
            </MobileIcon>
        </TitleBar>
    )
}