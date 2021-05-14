import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';

function Chat() {
    return (
        <Container>
            <HeaderChannel>
                <InfoChannelContainer>
                    <ChannelTitleContainer>
                        <p># Air Force</p>
                        <StarIcon>
                            <StarOutlineOutlinedIcon fontSize='small' />
                        </StarIcon>
                    </ChannelTitleContainer>
                    <DetailsContainer>
                        <p>Détails</p>
                        <DetailsIcons>
                            <InfoOutlinedIcon />
                        </DetailsIcons>
                    </DetailsContainer>
                </InfoChannelContainer>
                <ChannelDescription>
                    <p>Le groupe de discussion pour les receveurs.</p>
                </ChannelDescription>
            </HeaderChannel>
        </Container>
    )
}

export default Chat;

const Container = styled.div`
`

const HeaderChannel = styled.div`
    height: 64px;
    border-bottom: 1px solid #532753;
    padding-left: 19px;
`

const InfoChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 28px;
    padding-top: 10px;
`

const ChannelTitleContainer = styled.div`
    font-weight: bold;
    display: flex;
    height: 28px;
    align-items: center;
`

const StarIcon = styled.div`
`

const DetailsContainer = styled.div`
    display: flex;
    color: rgb(188, 171, 188);
`

const DetailsIcons = styled.div`
    margin-left: 5px;
`

const ChannelDescription = styled.div`
    color: rgb(188, 171, 188);
    font-size: 12px;
`