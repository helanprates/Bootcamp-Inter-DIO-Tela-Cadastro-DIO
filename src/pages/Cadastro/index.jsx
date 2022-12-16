
 import {useNavigate} from "react-router-dom"; 

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper, FazerLogintext, } from "./styles";

const Cadastro = () => {
    
        const navigate = useNavigate();
        const handleClickSignIn = () => {
            navigate('/login')
        }

    return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                <form>
                    <Input placeholder="Nome Completo"/>
                    <Input placeholder="e-mail"/>
                    <Input placeholder="senha"  type="password"/>
                    <Button title="Criar minha conta" variant="secondary" onClick={() => null} type="button"/>
                </form>
                
                    
                    <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</EsqueciText>
                    <Row>
                    <CriarText>Já tenho conta.</CriarText>
                    <FazerLogintext onClick={handleClickSignIn}>Fazer login.</FazerLogintext>
                    </Row>
                

            </Wrapper>    
        </Column>
    </Container>
    </>
    )}

    export {Cadastro}