import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

/**
 * Criar uma rota para o endereço "/contato" que renderizará o componente Contact
 *
 * A rota deve ser adicionada logo após a rota que renderiza o componente Post
 */

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Posts />} />
              <Route path="/:id/:slug" element={<Post />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
