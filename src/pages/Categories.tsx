import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../api';
import { Category } from '../../types';

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const newCategories = await Api.getCategoryList();
      setCategories(newCategories);
    };

    getCategories();
  }, []);

  return (
    <Box m={1} display="flex" gap={1}>
      {categories.map((category) => (
        <Button key={category.id} to={`news/${category.id}`} variant="contained" component={Link}>
          {category.name}
        </Button>
      ))}
    </Box>
  );
};
