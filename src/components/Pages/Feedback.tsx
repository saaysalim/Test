import React, { useReducer } from 'react'; // Import React and useReducer hook from React library
import './Feedback.css'; // Import CSS for styling the feedback form

// Define the state structure for feedback with properties for each feedback category
interface FeedbackState {
  basicUnderstanding: string;
  applicationAndImplementation: string;
  conceptualUnderstanding: string;
  criticalThinkingAndEvaluation: string;
}

// Define action types for updating each part of the state
type FeedbackAction =
  | { type: 'SET_BASIC_UNDERSTANDING'; value: string }
  | { type: 'SET_APPLICATION_IMPLEMENTATION'; value: string }
  | { type: 'SET_CONCEPTUAL_UNDERSTANDING'; value: string }
  | { type: 'SET_CRITICAL_THINKING_EVALUATION'; value: string };

// Initial state for the feedback form, starting with all fields empty
const initialState: FeedbackState = {
  basicUnderstanding: '',
  applicationAndImplementation: '',
  conceptualUnderstanding: '',
  criticalThinkingAndEvaluation: '',
};

// Reducer function to handle state changes based on actions
function feedbackReducer(state: FeedbackState, action: FeedbackAction): FeedbackState {
  switch (action.type) {
    case 'SET_BASIC_UNDERSTANDING':
      return { ...state, basicUnderstanding: action.value }; // Update basicUnderstanding
    case 'SET_APPLICATION_IMPLEMENTATION':
      return { ...state, applicationAndImplementation: action.value }; // Update applicationAndImplementation
    case 'SET_CONCEPTUAL_UNDERSTANDING':
      return { ...state, conceptualUnderstanding: action.value }; // Update conceptualUnderstanding
    case 'SET_CRITICAL_THINKING_EVALUATION':
      return { ...state, criticalThinkingAndEvaluation: action.value }; // Update criticalThinkingAndEvaluation
    default:
      throw new Error('Unknown action'); // Handle unknown actions
  }
}

// Component function for the feedback form
export default function FeedbackForm() {
  const [state, dispatch] = useReducer(feedbackReducer, initialState); // Use the useReducer hook

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(state); // Log the current state for debugging
  };

  // Render the feedback form with textareas for each feedback category
  return (
    <form onSubmit={handleSubmit}>
      <h1>Feedback Form: </h1>
      <p>Please write a short answer for each of the following to illustrate the level of your skill and knowledge in GUI.</p>
      <label>
        Basic Understanding:
        <textarea
          value={state.basicUnderstanding}
          onChange={(e) => dispatch({ type: 'SET_BASIC_UNDERSTANDING', value: e.target.value })}
        />
      </label>

      <label>
        Application and Implementation:
        <textarea
          value={state.applicationAndImplementation}
          onChange={(e) => dispatch({ type: 'SET_APPLICATION_IMPLEMENTATION', value: e.target.value })}
        />
      </label>

      <label>
        Conceptual Understanding:
        <textarea
          value={state.conceptualUnderstanding}
          onChange={(e) => dispatch({ type: 'SET_CONCEPTUAL_UNDERSTANDING', value: e.target.value })}
        />
      </label>

      <label>
        Critical Thinking and Evaluation:
        <textarea
          value={state.criticalThinkingAndEvaluation}
          onChange={(e) => dispatch({ type: 'SET_CRITICAL_THINKING_EVALUATION', value: e.target.value })}
        />
      </label>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}
