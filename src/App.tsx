import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LessonCatalogPage from './pages/LessonCatalogPage';
import LessonPage from './pages/LessonPage';
import HomeworkPage from './pages/HomeworkPage';
import HomeworkAssignmentPage from './pages/HomeworkAssignmentPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="lessons" element={<LessonCatalogPage />} />
        <Route path="lessons/:lessonId" element={<LessonPage />} />
        <Route path="homework" element={<HomeworkPage />} />
        <Route path="homework/:id" element={<HomeworkAssignmentPage />} />
      </Route>
    </Routes>
  );
};

export default App; 