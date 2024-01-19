
import React from 'react'; // we will only see this statement at the top of the folder

const Navbar = () => { // making it have the navbar at the top of the page with some inner html 
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#456', 
    padding: '20px',
  };

  return (   // our navbar links, they dont go anywhere but are present at the top of the page
    <nav style={navbarStyle}>
      <ul>
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

