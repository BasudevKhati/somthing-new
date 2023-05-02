import styled from "styled-components";

import Mobile from './images/mobile.svg';
import user from './images/User.svg';
import GreenDot from './images/greendot.svg';

import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { AiOutlineUser, AiOutlineFileDone } from 'react-icons/ai';
import { FiSettings, FiMic, FiHeadphones } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import { TiMessages } from 'react-icons/ti';
import { HiPlusSm } from 'react-icons/hi';

import { useState } from "react";



export const MenuBar = () => {

    const [showNumber, setShowNumber] = useState(false);
    const [showMembers, setShowMembers] = useState(false);

    const handleToggleNumber = () => {
        setShowNumber(!showNumber);
    };

    const handleToggleMembers = () => {
        setShowMembers(!showMembers);
    };

    const handleSettingClick = () => {
        localStorage.setItem()
    }


    const MenuWraper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 280px;
        height: 100%;
        margin: 8px 8px 0 0;
        padding: 16px;
        background-color: white;
        border-radius: 8px;
    `;

    const MenuContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    `;

    const NavBar = styled.div`

    display: flex;
    align-items: center;
    background-color: white;

    nav{
    }
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    li{
        list-style: none;  
        width: 248px;
        padding: 4px;
        background-color: white;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        color: #667085;
    }
    a:hover{
        color: #344054;
    }
    `;

    const Numbers = styled.div`
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0;
    `;

    const NumbersWrapper = styled.div`
        background-color: white;
        display: flex;
        align-items: center;

        p{
            background-color: white;
            font-size: 16px;
            font-weight: 600;
            color: #344054;
        }
    `;

    const DefaultMessage = styled.div`
        width: 248px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border: 1px solid #D0D5DD;
        border-radius: 8px;
        transition: all .5s;
    `;

    const Members = styled.div`
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0;
    `;

    const User = styled.div`
        background-color: white;
        display: flex;
        align-items: center;
    `;

    const ImageWrapper = styled.div`
        background-color: white;
    `;

    const ActiveUser = styled.div`
        background-color: white;
        display: flex;
        align-items: center;
    `;


    return (
        <MenuWraper>
            <MenuContent>
                <NavBar>
                    <nav>
                        <ul>
                            <li> <a> <AiOutlineFileDone style={{ backgroundColor: 'white', marginRight: '11px' }} /> Dashboard </a> </li>
                            <li> <a> <AiOutlineUser style={{ backgroundColor: 'white', marginRight: '11px' }} /> Contacts </a> </li>
                            <li> <a> <FiSettings style={{ backgroundColor: 'white', marginRight: '11px' }} /> Settings </a> </li>
                            <li> <a> <TiMessages style={{ backgroundColor: 'white', marginRight: '11px' }} /> Bulk SMS </a> </li>
                        </ul>
                    </nav>
                </NavBar>
                <Numbers>
                    <NumbersWrapper onClick={handleToggleNumber} style={{ cursor: 'pointer' }}>
                        <BiChevronDown style={{ backgroundColor: 'white', marginRight: '11px', color: '#344054', cursor: 'pointer' }} />
                        <p>Numbers</p>
                    </NumbersWrapper>
                    <HiPlusSm style={{ backgroundColor: 'white', color: '#344054', cursor: 'pointer' }} />
                </Numbers>
                {
                    showNumber ? (
                        <DefaultMessage>
                            <Image src={Mobile} bg={'white'} boxSize='40px' />
                            <Text style={{ lineHeight: '18px', color: '#667085' }} bg={'white'} fontSize='xs'>You don’t have any number in this workspace. <span style={{ backgroundColor: 'white' }}>Purchase Number</span> </Text>
                        </DefaultMessage>)
                        : null
                }
                <Members>
                    <NumbersWrapper onClick={handleToggleMembers} style={{ cursor: 'pointer' }}>
                        <BiChevronDown style={{ backgroundColor: 'white', marginRight: '11px', color: '#344054', cursor: 'pointer' }} />
                        <p>Members</p>
                    </NumbersWrapper>
                    <HiPlusSm style={{ backgroundColor: 'white', color: '#344054', cursor: 'pointer' }} />
                </Members>
                {
                    showMembers ? (
                        <User>
                            <ImageWrapper style={{ position: 'relative' }}>
                                <Image boxSize='32px' src={user} style={{ backgroundColor: 'white' }} />
                                <Image src={GreenDot} style={{ backgroundColor: 'white', position: 'absolute', borderRadius: '50%', top: '18px', left: '20px' }} />
                            </ImageWrapper>
                            <Text bg='white' fontSize='14px' fontWeight='500' padding='8px'> Olivia Maiden Rhye (You) </Text>
                        </User>
                    )
                        : null
                }
            </MenuContent>
            <ActiveUser>
                <ImageWrapper style={{ position: 'relative' }}>
                    <Image boxSize='40px' src={user} style={{ backgroundColor: 'white' }} />
                    <Image src={GreenDot} style={{ backgroundColor: 'white', position: 'absolute', borderRadius: '50%', top: '23px', left: '28px' }} />
                </ImageWrapper>
                <Text bg='white' color='#344054' fontSize='14px' fontWeight='700' padding='8px'> Olivia Madye... </Text>
                <FiMic style={{ backgroundColor: 'white', color: '#344054', cursor: 'pointer', marginRight: '10px' }}/>
                <FiHeadphones style={{ backgroundColor: 'white', color: '#344054', cursor: 'pointer', marginRight: '10px' }}/>
                <FiSettings style={{ backgroundColor: 'white', color: '#344054', cursor: 'pointer', marginRight: '10px' }}/>
            </ActiveUser>
        </MenuWraper>
    )
}

