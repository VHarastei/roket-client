import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FullArticle as ArticleType } from '../../types';
import { Api } from '../api';

export const Article = () => {
  const params = useParams();
  const articleId = params.articleId as string;

  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const getArticle = async () => {
      const newArticle = await Api.getArticle(articleId);
      setArticle(newArticle);
    };
    getArticle();
  }, [articleId]);

  return (
    <Box m={1}>
      {article && (
        <Paper>
          <Box display="flex" flexDirection="column" my={2} p={1}>
            <Typography>{article.title}</Typography>
            <img width={200} alt="article" src={article.image} />
            <Typography>{article.fullDescription}</Typography>
            <Typography>{article.likesQuantity}</Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
