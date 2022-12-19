import { AddNewTransition, Container, HeaderContainer } from "./HeaderStyles";
import logotipo from '../../../assets/logo.svg'

import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){
  return (
    <HeaderContainer>
      <Container>
      <img src={logotipo} alt="" />
      
      <Link to='/transition'> 
        <AddNewTransition>
         <span>Nova transação</span>
        </AddNewTransition>
      </Link>
      </Container>
    </HeaderContainer>
  )
}