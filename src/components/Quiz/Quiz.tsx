import React, { useState } from 'react';
import type { Quiz as QuizType } from '../../types/quiz';
import styles from './Quiz.module.scss';
import classNames from 'classnames';

interface QuizProps {
  quiz: QuizType;
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleSelectAnswer = (questionId: string, optionId: string) => {
    if (showResults) return; // Блокируем изменение ответов после проверки

    const isMultiSelect = currentQuestion.correctAnswerIds.length > 1;
    const currentSelections = selectedAnswers[questionId] || [];

    if (isMultiSelect) {
      const newSelections = currentSelections.includes(optionId)
        ? currentSelections.filter((id) => id !== optionId)
        : [...currentSelections, optionId];
      setSelectedAnswers({ ...selectedAnswers, [questionId]: newSelections });
    } else {
      setSelectedAnswers({ ...selectedAnswers, [questionId]: [optionId] });
    }
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className={styles.quizContainer}>
      <h2>{quiz.title}</h2>
      <div className={styles.questionContainer}>
        <div className={styles.questionHeader}>
          <span>Вопрос {currentQuestionIndex + 1} из {quiz.questions.length}</span>
          <h3>{currentQuestion.questionText}</h3>
        </div>
        <ul className={styles.optionsList}>
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswers[currentQuestion.id]?.includes(option.id);
            const isCorrect = currentQuestion.correctAnswerIds.includes(option.id);

            const optionClasses = classNames(styles.optionItem, {
              [styles.selected]: isSelected && !showResults,
              [styles.correct]: showResults && isCorrect,
              [styles.incorrect]: showResults && isSelected && !isCorrect,
            });

            return (
              <li
                key={option.id}
                className={optionClasses}
                onClick={() => handleSelectAnswer(currentQuestion.id, option.id)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
        {showResults && currentQuestion.explanation && (
          <div className={styles.explanation}>
            <h4>Пояснение:</h4>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
      </div>
      {!showResults && (
        <div className={styles.navigation}>
          <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
            Назад
          </button>
          {isLastQuestion ? (
            <button onClick={handleSubmit}>
              Проверить
            </button>
          ) : (
            <button onClick={handleNextQuestion}>
              Вперед
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz; 