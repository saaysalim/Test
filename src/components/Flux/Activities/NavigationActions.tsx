// src/componets/Flux/Activities/NavigationActions.tsx
import { ActionTypes } from './ActionTypes';

interface NavigateAction {
  type: typeof ActionTypes.NAVIGATE;
  payload: {
    menuName: string;
  };
}
export function navigate(menuName: string): NavigateAction {
  return {
    type: ActionTypes.NAVIGATE,
    payload: { menuName },
  };
}
