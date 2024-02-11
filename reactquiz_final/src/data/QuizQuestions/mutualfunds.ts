// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const mutualFunds: Topic = {
  topic: 'Mutual Funds',
  level: 'Intermediate',
  totalQuestions: 15,
  totalScore: 150,
  totalTime: 300,
  questions: [
    {
      question:
        'What are mutual funds?',
      choices: [
        'A type of investment that pools money from multiple investors to invest in securities such as stocks, bonds, and other assets',
        'Savings accounts offered by banks',
        'Government-issued securities',
        'Corporate bonds'
      ],
      type: 'MCQs',
      correctAnswers: [
        'A type of investment that pools money from multiple investors to invest in securities such as stocks, bonds, and other assets'
      ],
      score: 10,
    },
    {
      question: 'What is the primary advantage of investing in mutual funds?',
      choices: ['High liquidity', 'Low risk', 'Diversification', 'Fixed returns'],
      type: 'MCQs',
      correctAnswers: ['Diversification'],
      score: 10,
    },
    {
      question:
        'How are mutual funds managed?',
      choices: [
        'By individual investors',
        'By investment professionals who make decisions on behalf of the fund',
        'By government agencies',
        'By commercial banks'
      ],
      type: 'MCQs',
      correctAnswers: [
        'By investment professionals who make decisions on behalf of the fund'
      ],
      score: 10,
    },
    {
      question:
        'What are the types of mutual funds based on investment objectives?',
      choices: [
        'Equity funds, debt funds, balanced funds, and hybrid funds',
        'Savings accounts, fixed deposits, recurring deposits',
        'Real estate investments, commodities, currencies',
        'Stocks, bonds, options'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Equity funds, debt funds, balanced funds, and hybrid funds'
      ],
      score: 10,
    },
    {
      question: 'What is the Net Asset Value (NAV) of a mutual fund?',
      choices: [
        'The total assets of the fund minus its liabilities, divided by the number of outstanding units',
        'The total number of units issued by the mutual fund',
        'The total expenses incurred by the mutual fund',
        'The annual return of the mutual fund'
      ],
      type: 'MCQs',
      correctAnswers: [
        'The total assets of the fund minus its liabilities, divided by the number of outstanding units'
      ],
      score: 10,
    },
    {
      question: 'What is the purpose of a mutual fund prospectus?',
      choices: [
        'To provide information about the funds investment objectives, strategies, risks, and fees',
        'To guarantee fixed returns to investors',
        'To promote the mutual fund through advertisements',
        'To facilitate trading of mutual fund units'
      ],
      type: 'MCQs',
      correctAnswers: [
        'To provide information about the funds investment objectives, strategies, risks, and fees'
      ],
      score: 10,
    },
    {
      question:
        'What are the advantages of investing in mutual funds?',
      choices: [
        'Diversification, professional management, and liquidity',
        'High risk and high returns',
        'Guaranteed returns and low fees',
        'Limited investment options'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Diversification, professional management, and liquidity'
      ],
      score: 10,
    },
    {
      question:
        'What factors should investors consider when selecting mutual funds?',
      choices: [
        'Investment objectives, risk tolerance, expense ratios, and historical performance',
        'The popularity of the fund, its brand name, and advertising',
        'The size of the fund and the number of investors',
        'The location of the funds office and its management team'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Investment objectives, risk tolerance, expense ratios, and historical performance'
      ],
      score: 10,
    },
    {
      question: 'What is the role of expense ratios in mutual funds?',
      choices: [
        'Expense ratios impact returns and represent the percentage of assets used to cover fund expenses',
        'Expense ratios guarantee fixed returns to investors',
        'Expense ratios determine the NAV of the mutual fund',
        'Expense ratios indicate the performance of the mutual fund'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Expense ratios impact returns and represent the percentage of assets used to cover fund expenses'
      ],
      score: 10,
    },
    {
      question: 'What is the importance of reviewing a mutual funds prospectus before investing?',
      choices: [
        'Reviewing a mutual funds prospectus is unnecessary for investors',
        'A mutual funds prospectus provides important information about its investment objectives, strategies, risks, and fees',
        'Mutual fund prospectuses are only available to institutional investors',
        'Mutual fund prospectuses contain misleading information for investors'
      ],
      type: 'MCQs',
      correctAnswers: [
        'A mutual funds prospectus provides important information about its investment objectives, strategies, risks, and fees'
      ],
      score: 10,
    },
    {
      question: 'How can investors assess the historical performance of mutual funds?',
      choices: [
        'Historical performance of mutual funds is not relevant for investment decisions',
        'Investors can evaluate mutual fund performance by analyzing historical returns, risk-adjusted metrics, and benchmark comparisons',
        'Mutual fund performance can be assessed by reviewing advertisements and marketing materials',
        'Investors should rely solely on fund ratings provided by third-party agencies for evaluating mutual fund performance'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Investors can evaluate mutual fund performance by analyzing historical returns, risk-adjusted metrics, and benchmark comparisons'
      ],
      score: 10,
    },
    {
      question:
        'What are the potential risks associated with investing in mutual funds?',
      choices: [
        'Market risk, liquidity risk, and interest rate risk',
        'Mutual funds guarantee fixed returns and have no risks',
        'Mutual funds are risk-free investments',
        'Mutual funds only carry operational risks'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Market risk, liquidity risk, and interest rate risk'
      ],
      score: 10,
    },
    {
      question:
        'What are the differences between open-end and closed-end mutual funds?',
      choices: [
        'Open-end funds issue unlimited shares and are redeemable at NAV, while closed-end funds issue a fixed number of shares and trade on exchanges',
        'Open-end funds issue a fixed number of shares, while closed-end funds issue unlimited shares',
        'Open-end funds are traded on exchanges, while closed-end funds are redeemable at NAV',
        'There are no differences between open-end and closed-end mutual funds'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Open-end funds issue unlimited shares and are redeemable at NAV, while closed-end funds issue a fixed number of shares and trade on exchanges'
      ],
      score: 10,
    },
    {
      question:
        'How can investors redeem their mutual fund units?',
      choices: [
        'By selling their units back to the mutual fund at the current NAV',
        'By transferring their units to another investor',
        'By converting their units into shares of individual stocks',
        'By exchanging their units for government securities'
      ],
      type: 'MCQs',
      correctAnswers: [
        'By selling their units back to the mutual fund at the current NAV'
      ],
      score: 10,
    },
  ],
}
