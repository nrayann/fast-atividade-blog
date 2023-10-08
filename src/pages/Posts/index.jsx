import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const linkStyle = {
  fontSize: 16,
  fontWeight: 400,
  textDecoration: "none",
  color: "#FFFFFF",
};

/**
  - Obter lista de posts através do método getPosts
  - Utilizar state posts para mostrar em tela lista de posts
  - Utilizar o método getViewPostRoute para obter rota para usar no componente Link para visualizar um post específico
  - Utilizar o método formatPostDate para mostrar em tela a data formatada do post
  - Mostrar o componente Loading enquanto isLoading for true
*/

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://api.slingacademy.com/v1/sample-data/blog-posts"
      );
      const data = await response.json();
      setPosts(data.blogs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getViewPostRoute = (post) => `/${post.id}/${encodeURI(post.title)}`;

  const formatPostDate = (date) => new Date(date).toLocaleDateString("pt-BR");

  return (
    <Grid container rowGap={2} direction={"column"} data-testid="postsList">
      <Grid item>
        <Typography variant="h4">Publicações</Typography>
      </Grid>
      {isLoading && <Loading />}
      {posts.map((post) => (
        <Grid item key={post.id} data-testid="postItem">
          <Link to={getViewPostRoute(post)} style={linkStyle}>
            <Typography align="left">{post.title}</Typography>
          </Link>
          <Typography align="left" variant="caption">
            {formatPostDate(post.created_at)}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
