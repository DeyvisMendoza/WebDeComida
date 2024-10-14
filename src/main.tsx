import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import '../src/style/global.css'; //css global
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css'; //estilos de Mantine
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </MantineProvider>
  </StrictMode>
);
