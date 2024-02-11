import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const chartData = [
    {
        id: 11,
        label1: 20,
        label2: 50,
    },
    {
        id: 12,
        label1: 50,
        label2: 40,
    },
    {
        id: 13,
        label1: 10,
        label2: 50,
    },
    {
        id: 14,
        label1: 25,
        label2: 30,
    },
    {
        id: 15,
        label1: 43,
        label2: 25,
    },
    {
        id: 16,
        label1: 23,
        label2: 23,
    },
    {
        id: 17,
        label1: 19,
        label2: 40,
    },
]

export const transactions = [
    {
        id: 18, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 19, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 20, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 21,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 22,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 23,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 24,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 25,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 26, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 27, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 28, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 29, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 30, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];
export const loansData = {
    percent: 31,
    savingsTarget: 500000,
    targetReached: 250000,
  };

export const subscriptions = [
    {
        id: 32,
        title: "LinkedIn",
        due_date: "23/12/04",
        service: "Premium",
        amount: 20000
    },
    {
        id: 33,
        title: "Netflix",
        due_date: "23/12/10",
        service: "Monthly",
        amount: 5000
    },
    {
        id: 34,
        title: "DSTV",
        due_date: "23/12/22",
        service: "1yr Premium",
        amount: 2000
    }
];

export const initialSavings = [
    {
        id: 35,
      image: personsImgs.person_one,
      saving_amount: 250000,
      title: "Rent",
      date_taken: "24/04/2024",
      amount_left: 40000,
      isTargetMet: false
    }
]
export const financialQuotes = [
    "Invest in yourself. Your career is the engine of your wealth.",
    "The stock market is a device for transferring money from the impatient to the patient.",
    "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it.",
    "The goal of a successful trader is to make the best trades. Money is secondary.",
  "Don't work for money; make it work for you.",
  "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
  "Good investors are not in a rush to get rich; they are in a rush not to get poor.",
  "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
  "The best investment you can make is in yourself.",
  "Savings represent much more than just money; they represent options, freedom, and ultimately, your most valuable asset – your time.",
  "Risk comes from not knowing what you're doing.",
  "The greatest wealth-building tool is the ability to save.",
  "Successful investing is about managing risk, not avoiding it.",
  "Never depend on a single income. Make investment to create a second source.",
  "The best time to plant a tree was 20 years ago. The second-best time is now.",
  "Live like no one else now, so later you can live like no one else.",
  "The more you learn, the more you earn.",
  "It's not about how much you make but how much you keep.",
  "An investment in knowledge pays the best interest.",
  "Start where you are. Use what you have. Do what you can.",
  ];