import { Topic } from '.'

export const personalFinance: Topic = {
  topic: 'Personal Finance',
  level: 'Beginner',
  totalQuestions: 8,
  totalScore: 60,
  totalTime: 400,
  questions: [
    {
      question:
        'What is the purpose of creating a budget?',
      choices: [
        'To restrict spending',
        'To track income and expenses',
        'To limit financial growth',
        'To avoid financial planning'
      ],
      type: 'MCQs',
      correctAnswers: [
        'To track income and expenses'
      ],
      score: 10,
    },
    {
      question: 'What is the importance of an emergency fund?',
      choices: ['Emergency funds are unnecessary for financial stability.', 'Emergency funds help cover unexpected expenses and provide financial security.', 'Emergency funds are used for luxury purchases.', 'Emergency funds guarantee investment success.'],
      type: 'MCQs',
      correctAnswers: ['Emergency funds help cover unexpected expenses and provide financial security.'],
      score: 10,
    },
    {
      question:
        'What are the key components of a personal financial plan?',
      choices: [
        'Savings goals and spending limits',
        'Monthly bills and utility payments',
        'Lifestyle choices and entertainment expenses',
        'Daily expenses and impulse purchases'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Savings goals and spending limits'
      ],
      score: 10,
    },
    {
      question:
        'What are the advantages of saving money regularly?',
      choices: [
        'Regular savings prevent financial growth.',
        'Regular savings ensure a limited lifestyle.',
        'Regular savings provide financial security and help achieve financial goals.',
        'Regular savings lead to financial instability.'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Regular savings provide financial security and help achieve financial goals.'
      ],
      score: 10,
    },
    {
      question: 'How can individuals improve their credit score?',
      choices: [
        'By ignoring credit card payments',
        'By applying for multiple loans at once',
        'By making timely bill payments and managing credit responsibly',
        'By defaulting on loan payments'
      ],
      type: 'MCQs',
      correctAnswers: [
        'By making timely bill payments and managing credit responsibly'
      ],
      score: 10,
    },
    {
      question: 'What is the significance of setting financial goals?',
      choices: [
        'Financial goals limit personal growth.',
        'Financial goals provide a framework for effective financial planning and decision-making.',
        'Financial goals are irrelevant in personal finance.',
        'Financial goals guarantee financial success.'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Financial goals provide a framework for effective financial planning and decision-making.'
      ],
      score: 10,
    },
    {
      question: 'How can individuals reduce unnecessary expenses?',
      choices: [
        'By increasing spending on luxury items',
        'By disregarding budgeting techniques',
        'By tracking expenses and eliminating non-essential purchases',
        'By avoiding financial planning'
      ],
      type: 'MCQs',
      correctAnswers: [
        'By tracking expenses and eliminating non-essential purchases'
      ],
      score: 10,
    },
    {
      question: 'What is the purpose of retirement planning?',
      choices: [
        'Retirement planning is unnecessary for financial stability.',
        'Retirement planning ensures financial security during retirement years.',
        'Retirement planning limits financial growth.',
        'Retirement planning guarantees investment success.'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Retirement planning ensures financial security during retirement years.'
      ],
      score: 10,
    },
  ],
}
