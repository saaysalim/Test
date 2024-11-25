// src/components/Flux/stores/NavigationStore.tsx
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/AppDispatcher';
import { ActionTypes } from '../Activities/ActionTypes';

interface NavigationState {
  currentMenu: string;
}

class NavigationStore extends EventEmitter {
  state: NavigationState = {
    currentMenu: 'Home', // default selected menu
  };

  constructor() {
    super();
    this.registerToDispatcher();
  }

  registerToDispatcher() {
    dispatcher.register((action) => {
      switch (action.type) {
        case ActionTypes.NAVIGATE:
          this.state.currentMenu = action.payload.menuName;
          this.emitChange();
          break;
        default:
          // handle other actions
      }
    });
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback: () => void) {
    this.on('change', callback);
  }

  removeChangeListener(callback: () => void) {
    this.removeListener('change', callback);
  }

  getCurrentMenu() {
    return this.state.currentMenu;
  }
}

const navigationStore = new NavigationStore();
export default navigationStore;
