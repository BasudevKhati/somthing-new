import styled from "styled-components";

import {MdOutlineAccountBox, MdPayment, MdNotificationsNone} from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import {HiOutlineUsers} from 'react-icons/hi';
import {BiBlock} from 'react-icons/bi';
import {FiStar, FiHeadphones} from 'react-icons/fi';


export const SettingBar = () => {
    


    const Setting = styled.div`
        width: 280px;
        background-color: white;
        border-radius: 8px 0 0 8px;
        padding: 16px;
    `

    const Heading = styled.div`

    h2{
        background-color: white;
        font-size: 18px;
        font-weight: 700;
        color: #344054;
        margin-bottom: 12px;
    }
    `;

    const SettingMenu = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #344054;
        background-color: white;
    `;

    const SettingNav = styled.div`
        background-color: white;
        margin-bottom: 5px;

        p{
            font-weight: 600;
            font-size: 14px;
            background-color: white;
            line-height: 20px;
            margin-bottom: 4px;
        }

        ul{
            margin: 0;
            padding: 0;
        }
        li{
            list-style: none;
            background-color: white;
            border-radius: 8px;
        }
        li:hover{
            background-color: #5964FF;
            color: white;
        }
        a{
            text-decoration: none;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 600;
            padding: 8px 12px;
            gap: 8px;
            border-radius: 8px;
            color: #667085;
        }
        a:hover{
            background-color: #5964FF;
            color: white;
        }
    `;

    return (
        <Setting>
            <Heading>
                <h2>Setting</h2>
            </Heading>
            <SettingMenu>
                <SettingNav>
                    <p>User Setting</p>
                    <ul>
                        <li > <a href=""> <MdOutlineAccountBox style={{width: '20px', height: '20px'}} /> My Account </a> </li>
                    </ul>
                </SettingNav>
                <SettingNav>
                    <p>Worspace</p>
                    <ul>
                        <li> <a href=""> <AiOutlineFileDone style={{width: '20px', height: '20px'}} /> Overview </a> </li>
                        <li> <a href=""> <BsTelephone style={{width: '20px', height: '20px'}} /> My Number </a> </li>
                        <li> <a href=""> <HiOutlineUsers style={{width: '20px', height: '20px'}} /> Members </a> </li>
                        <li> <a href=""> <BiBlock style={{width: '20px', height: '20px'}} /> Block List </a> </li>
                    </ul>
                </SettingNav>
                <SettingNav>
                    <p>Billing</p>
                    <ul>
                        <li> <a href=""> <FiStar style={{width: '20px', height: '20px'}} /> Subscription </a> </li>
                        <li> <a href=""> <MdPayment style={{width: '20px', height: '20px'}} /> Payment Method </a> </li>
                    </ul>
                </SettingNav>
                <SettingNav>
                    <p>Application Setting</p>
                    <ul>
                        <li> <a href=""> <FiHeadphones style={{width: '20px', height: '20px'}} /> Audio </a> </li>
                        <li> <a href=""> <MdNotificationsNone style={{width: '20px', height: '20px'}} /> Notification </a> </li>
                    </ul>
                </SettingNav>
            </SettingMenu>
        </Setting>
    )
}