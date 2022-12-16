
import {useNavigate} from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";

const Login = () => {
    
        const navigate = useNavigate();
        const handleClickSignIn = () => {
            navigate('/feed')
        }

        const navigateCadastro = useNavigate();
        const handleClickCriarConta = () => {
            navigateCadastro('/cadastro')
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
                <TitleLogin>Faça seu login</TitleLogin>
                <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                <form>
                    <Input placeholder="e-mail"/>
                    <Input placeholder="senha"  type="password"/>
                    <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onclick={handleClickCriarConta}>Criar contar</CriarText>
                </Row>

            </Wrapper>    
        </Column>
    </Container>
    </>
    )}

    export {Login}