import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItems } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firbase';

function Sidebar({ rooms }) {

    const addChannel = () =>{
        const promptName = prompt("Entrez le nom du channel");
        if(promptName){
            db.collection('rooms').add({
                name: promptName,
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Medloks_22
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels >
                {
                    sidebarItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        rooms.map(channel => (
                            <Channel>
                                # {channel.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    background: #3F0E40;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753; 
`

const Name = styled.div`

`

const NewMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    color: #3F0E40;
    fill: #3F0E40;
    margin-right: 20px;
    cursor: pointer;  
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover{
        background: #350D36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;

`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover{
        background: #350D36;
    }
`