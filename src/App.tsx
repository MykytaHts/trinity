import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import SectionsPage from './pages/SectionsPage/SectionsPage'; // Импортируем новую страницу
// import LessonCatalogPage from './pages/LessonCatalogPage';
// import LessonPage from './pages/LessonPage';
import HomeworkPage from './pages/HomeworkPage';
import HomeworkAssignmentPage from './pages/HomeworkAssignmentPage';
import LessonsListPage from './pages/LessonsListPage';
import LessonPage from './pages/LessonPage';
import { ArticleListPage } from './features/admin/pages/ArticleListPage/ArticleListPage';
import { ArticleEditorPage } from './features/admin/pages/ArticleEditorPage/ArticleEditorPage';
import { ArticleFeedPage } from './pages/ArticleFeedPage/ArticleFeedPage';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:courseId" element={<SectionsPage />} />
          <Route path="courses/:courseId/:sectionId" element={<LessonsListPage />} />
          <Route path="courses/:courseId/:sectionId/:lessonId" element={<LessonPage />} />
          <Route path="articles" element={<ArticleFeedPage />} />
          <Route path="articles/:id" element={<ArticlePage />} />
          {/* <Route path="lessons" element={<LessonCatalogPage />} />
        <Route path="lessons/:lessonId" element={<LessonPage />} /> */}
          <Route path="homework" element={<HomeworkPage />} />
          <Route path="homework/:id" element={<HomeworkAssignmentPage />} />

          {/* Admin Routes */}
          <Route path="admin/articles" element={<ArticleListPage />} />
          <Route path="admin/articles/new" element={<ArticleEditorPage />} />
          <Route path="admin/articles/edit/:id" element={<ArticleEditorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App; 