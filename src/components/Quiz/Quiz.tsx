import React, { useState, useMemo } from 'react';
import type { Quiz as QuizType } from '../../types/quiz';
import styles from './Quiz.module.scss';
import classNames from 'classnames';
import { FaCrown, FaRedo, FaPlus } from 'react-icons/fa';

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
    if (showResults) return;

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

  const hasSelectedAnswer = selectedAnswers[currentQuestion.id]?.length > 0;

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
  
  const handleRetry = () => {
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
  };

  const score = useMemo(() => {
    if (!showResults) return 0;
    return quiz.questions.reduce((acc, question) => {
      const userAnswers = selectedAnswers[question.id] || [];
      const correctAnswers = question.correctAnswerIds;
      const isCorrect = correctAnswers.length === userAnswers.length && correctAnswers.every(id => userAnswers.includes(id));
      return acc + (isCorrect ? 1 : 0);
    }, 0);
  }, [showResults, quiz.questions, selectedAnswers]);

  const scorePercentage = useMemo(() => {
    return Math.round((score / quiz.questions.length) * 100);
  }, [score, quiz.questions.length]);


  if (showResults) {
    return (
      <div className={`${styles.quizContainer} ${styles.resultsContainer}`}>
        <h2 className={styles.resultsTitle}>Тест завершен!</h2>
        <div className={styles.progressCircle} style={{'--percentage': scorePercentage} as React.CSSProperties}>
          <div className={styles.progressValue}>{score}/{quiz.questions.length}</div>
        </div>
        <p className={styles.scoreText}>Вы набрали {scorePercentage}% правильных ответов.</p>
        
        <div className={styles.resultsActions}>
          <button onClick={handleRetry} className={styles.retryButton}>
            <FaRedo />
            Повторить попытку
          </button>
        </div>

        <div className={styles.premiumFeature}>
          <div className={styles.premiumHeader}>
            <FaCrown />
            <span>Премиум возможность</span>
          </div>
          <p>Создавайте новые тесты на любые темы, чтобы отточить свои знания до совершенства.</p>
          <button className={styles.premiumButton}>
            <FaPlus />
            Сгенерировать новый тест
          </button>
        </div>
      </div>
    )
  }

  const forwardButtonClasses = classNames({
    [styles.primaryButton]: hasSelectedAnswer,
  });

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.quizTitle}>{quiz.title}</h2>
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
            <button onClick={handleSubmit} disabled={!hasSelectedAnswer} className={forwardButtonClasses}>
              Проверить
            </button>
          ) : (
            <button onClick={handleNextQuestion} disabled={!hasSelectedAnswer} className={forwardButtonClasses}>
              Вперед
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz; 