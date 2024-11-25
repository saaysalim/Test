// src/components/Flux/NavigationBar.tsx
import React, { useEffect, useState } from 'react';
import navigationStore from '../Stores/NavigationStore';
import * as NavigationActions from '../Activities/NavigationActions';

const NavigationBar: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState(navigationStore.getCurrentMenu());

  useEffect(() => {
    const onChange = () => {
      setCurrentMenu(navigationStore.getCurrentMenu());
    };

    navigationStore.addChangeListener(onChange);
    return () => {
      navigationStore.removeChangeListener(onChange);
    };
  }, []);

  const handleNavigation = (menuName: string) => {
    NavigationActions.navigate(menuName);
  };

  return (
    <nav>
      {/* ... other menu items ... */}
      <button onClick={() => handleNavigation('Activities')}>Activities</button>
      {/* ... other menu items ... */}
    </nav>
  );
};

export default NavigationBar;
