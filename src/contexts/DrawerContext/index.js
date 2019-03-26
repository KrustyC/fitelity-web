import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DrawerContext = React.createContext();

const DrawerProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const context = {
    isMenuOpen,
    onToggleMenu,
  };

  return (
    <DrawerContext.Provider value={context}>{children}</DrawerContext.Provider>
  );
};

DrawerProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

const DrawerConsumer = DrawerContext.Consumer;

export { DrawerProvider, DrawerConsumer, DrawerContext };
