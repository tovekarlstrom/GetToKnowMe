interface Answer {
  option: string;
  correct: boolean;
}
interface Question {
  question: string;
  correctAnswerIndex: number;
  answers: Answer[];
}
export const quizQuestions: any = [
  {
    question: "who am I when it comes to movies?",
    correctAnswerIndex: 1,
    answers: [
      {
        option: "watching a movie two times! not for me..",
      },
      {
        option: "oh if she is in the move then it must be woth watching",
      },
      {
        option: "whats the IMDB?",
      },
      {
        option: "lets pick one i know i wont be disappointed of",
      },
    ],
  },
  {
    question: "who am I when it comes to finding a better way?",
    correctAnswerIndex: 0,
    answers: [
      {
        option:
          "lets sit down and chreey pick what we like and then start looking from there",
      },
      {
        option: "better way? this is the best way possible.",
      },
      {
        option: "whats the IMDB?",
      },
      {
        option: "lets pick one i know i wont be disappointed of",
      },
    ],
  },
  {
    question: "What's my go-to way to start the day?",
    correctAnswerIndex: 2,
    answers: [
      {
        option: "Snooze the alarm at least three times, it's a ritual.",
      },
      {
        option: "Jump out of bed and straight into a yoga pose—zen mode on.",
      },
      {
        option: "Coffee, strong and black, before I can function.",
      },
      {
        option: "Check my emails before anything else. Priorities, right?",
      },
    ],
  },
  {
    question: "How do I handle a coding bug?",
    correctAnswerIndex: 1,
    answers: [
      {
        option: "Ignore it and hope it magically fixes itself.",
      },
      {
        option: "Time to deep dive into Stack Overflow for solutions!",
      },
      {
        option: "Take a break, play some video games, then come back fresh.",
      },
      {
        option: "Call a friend and brainstorm together until it’s solved.",
      },
    ],
  },
  {
    question: "What's my idea of a perfect weekend?",
    correctAnswerIndex: 3,
    answers: [
      {
        option: "Catching up on work—because, why not?",
      },
      {
        option: "A spontaneous road trip, no plans, just vibes.",
      },
      {
        option: "Binge-watching that new series everyone's talking about.",
      },
      {
        option: "Exploring a new café, laptop in tow for a coding session.",
      },
    ],
  },
  {
    question: "How do I approach learning something new?",
    correctAnswerIndex: 0,
    answers: [
      {
        option: "I dive right in—let's learn by doing!",
      },
      {
        option: "Research everything first, then slowly start practicing.",
      },
      {
        option: "I ask around and see what others recommend first.",
      },
      {
        option: "Trial and error—heavy on the error part, but it works!",
      },
    ],
  },
];
