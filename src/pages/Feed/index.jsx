
/* import { Link } from "react-router-dom";
import { Button } from "../../components/Button"; */

/* import banner from '../../assets/banner.png'
import { Button } from "../../components/Button"; */
import { Card } from '../../components/Card';
import { Header } from "../../components/Header";
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (
    <>
    <Header autenticado={true} />
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card /> 
        </Column>
        <Column flex={1}>
            <TitleHighlight> # RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={25} nome="Helan Prates" image="https://avatars.githubusercontent.com/u/106835714?v=4"/>  
            <UserInfo percentual={55} nome="Helan Prates" image="https://avatars.githubusercontent.com/u/106835714?v=4"/> 
            <UserInfo percentual={35} nome="Helan Prates" image="https://avatars.githubusercontent.com/u/106835714?v=4"/> 
            <UserInfo percentual={85} nome="Helan Prates" image="https://avatars.githubusercontent.com/u/106835714?v=4"/>  
            <UserInfo percentual={35} nome="Helan Prates" image="https://avatars.githubusercontent.com/u/106835714?v=4"/> 
            <UserInfo percentual={15} nome="Helan Prates" image="https://avatars.githubusercontent.com/u/106835714?v=4"/> 
        </Column>
    </Container>
    </>
    )}

    export {Feed}