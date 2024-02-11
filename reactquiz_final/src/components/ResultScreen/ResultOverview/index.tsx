import { FC, useEffect } from 'react'
import styled from 'styled-components'

import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'
import { convertSeconds } from '../../../utils/helpers'
import { Result } from '../../../types'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 30px;
  }
`

interface ResultOverviewProps {
  result: Result[]
}

interface RewardRequestBody {
  user: string;
  amount: number;
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed'

  useEffect(() => {
    // Fetch request
    const handleRewardClick = async (amount: number) => {
      try {
          const requestBody: RewardRequestBody = { user: 'user3', amount };
          const response = await fetch('http://127.0.0.1:5000/reward', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          alert('Reward points updated successfully');

          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }

          // Fetch updated reward points after rewarding
          
      } catch (error) {
          console.error('There was a problem with the reward operation:', error);
      }
  };
  handleRewardClick(obtainedScore*10)
  }, []) // Empty dependency array to run the effect only once on initial render

  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Score secured:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Time Spent:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p>
        Status:<HighlightedText> {calculateStatus}</HighlightedText>
      </p>
    </ResultOverviewStyle>
  )
}

export default ResultOverview
