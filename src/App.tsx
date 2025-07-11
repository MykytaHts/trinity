import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import LessonCatalogPage from './pages/LessonCatalogPage';
import HomeworkPage from './pages/HomeworkPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lessons" element={<LessonCatalogPage />} />
          <Route path="lessons/:lessonId" element={<LessonPage />} />
          <Route path="homework" element={<HomeworkPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 