import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { Header } from "./layouts/Header/Header";
import { defaultTheme } from "./styles/themes/defaulttheme";
import { GlobalStyle } from "./styles/themes/global";
import { TransactionsProvaider } from "./transactionsContex";
import { useEffect, useState } from "react";
import { api } from "./services/api";

export function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvaider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </TransactionsProvaider>
    </ThemeProvider>
  )
}

