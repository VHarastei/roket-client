import { Box, Link, Paper, TablePagination, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { News as NewsType } from '../../types';
import { Api } from '../api';

export const News = () => {
  const params = useParams();
  const categoryId = params.categoryId as string;

  const [news, setNews] = useState<NewsType | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSize, setCurrentSize] = useState(10);

  const getNews = useCallback(
    async (page: number, size: number) => {
      const newNews = await Api.getNewsList(categoryId, page, size);
      setNews(newNews);
    },
    [categoryId]
  );

  const handleChangeCurrentPage = async (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    await getNews(value, currentSize);
    setCurrentPage(value);
  };

  const handleChangeCurrentSize = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    await getNews(currentPage, +event.target.value);
    setCurrentSize(+event.target.value);
    setCurrentPage(0);
  };

  useEffect(() => {
    getNews(currentPage, currentSize);
  }, [getNews, currentPage, currentSize]);

  return (
    <Box m={1}>
      {news?.rows.map((item) => (
        <Paper key={item.id}>
          <Box display="flex" flexDirection="column" my={2} p={1}>
            <Link to={`${item.id}`} component={RouterLink}>
              {item.title}
            </Link>
            <img width={200} alt="item" src={item.image} />
            <Typography>{item.date}</Typography>
            <Typography>{item.shortDescription}</Typography>
            <Typography>{item.likesQuantity}</Typography>
          </Box>
        </Paper>
      ))}
      {news && (
        <TablePagination
          color="primary"
          component="div"
          count={news.totalItems}
          page={currentPage}
          onPageChange={handleChangeCurrentPage}
          rowsPerPage={currentSize}
          rowsPerPageOptions={[
            { value: 3, label: '3' },
            { value: 10, label: '10' },
          ]}
          onRowsPerPageChange={handleChangeCurrentSize}
        />
      )}
    </Box>
  );
};
