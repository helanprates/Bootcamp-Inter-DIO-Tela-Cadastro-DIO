import React from 'react'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'


const Card = () => {
    return(
<CardContainer>
    <ImageBackground src="https://hermes.digitalinnovation.one/campaigns/f2e2c0f9-8741-4758-aa2e-708a15d44d45.png" />
    <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/106835714?v=4"/>
            <div>
                <h4>Helan Prates</h4>
                <p>Há 8 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
                <h4>Projeto para curso de HTM e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp DIO do Global avanade... <strong>Saiba Mais</strong>Há 8 minutos</p>
        </PostInfo>
        <HasInfo>
                <h4>#HTML #CSS #JavaScritp</h4>
        </HasInfo>
    </Content>  
</CardContainer>
    )


}

export {Card}