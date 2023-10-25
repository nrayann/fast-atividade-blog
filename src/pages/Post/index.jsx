import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import PostContent from "../../components/PostContent";
import Loading from "../../components/Loading";

const linkStyle = {
  fontSize: 16,
  fontWeight: 400,
  color: "#FFFFFF",
};

/**
 * Renderizar condicionalmente o componente Loading baseado no estado isLoading
 *
 * Criar um state para post e um state para postCreator, ambos devem ser inicializados com null
 *
 * Utilizar o useEffect para assim que tiver o id do post executar o método getPost
 * Utilizar o useEffect para assim que tiver o post executar o método getPostCreator
 *
 * Renderizar os valores title, photo_url e content_html nos locais apropriados
 *
 * Renderizar os crédios do post chamando o método getCredids no local apropriado
 */

export default function Post() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [postCreator, setPostCreator] = useState(null);

  useEffect(() => {
    /** utilizar useEffect para obter post */
    const getPost = async () => {
      try {
        const response = await fetch(
          `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
        );
        const data = await response.json();

        /**
         * Armazenar no state post o valor de data.blog
         */
        setPost(data.blog);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getPost();
  }, [id]);

  useEffect(() => {
    /** utilizar useEffect para obter post creator logo após obter post */
    const getPostCreator = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.slingacademy.com/v1/sample-data/users/${post.user_id}`
        );
        const data = await response.json();

        /**
         * Armazenar no state postCreator o valor de data.user
         */
        setPostCreator(data.user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    if (post) {
      getPostCreator();
    }
  }, [post]);

  const getCredids = (post, postCreator) =>
    `${postCreator.first_name} ${postCreator.last_name}, ${formatPostDate(
      post.created_at
    )}`;

  const formatPostDate = (date) => new Date(date).toLocaleDateString("pt-BR");

  return (
    <Grid container direction="column">
      <Grid item>
        <Link to="/" style={linkStyle}>
          <Typography>Voltar</Typography>
        </Link>
      </Grid>
      {/* mostrar apenas se isLoading for true */}
      {isLoading && <Loading />}
      {/* mostrar apenas se existir post e postCreator */}
      {post && postCreator && (
        <Grid item>
          <Typography variant="h3" mb={4}>
            {post.title}
          </Typography>
          <img width="100%" src={post.photo_url} alt={post.title} />
          <PostContent content={post.content_html} />
          <Typography>
            <strong>Criado por: </strong>
            {getCredids(post, postCreator)}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
