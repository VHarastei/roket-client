import { Box, Container, Link, Paper } from '@mui/material';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { Article } from './pages/Article';
import { Categories } from './pages/Categories';
import { News } from './pages/News';

function App() {
  return (
    <Container>
      <Paper elevation={5}>
        <Box p={1} display="flex" gap={1}>
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </Box>
      </Paper>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/news/:categoryId" element={<News />} />
        <Route path="/news/:categoryId/:articleId" element={<Article />} />
      </Routes>
    </Container>
  );
}

export default App;
