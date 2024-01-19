import NavBar from './NavBar';     // we can see here this is importing everyyhing to APP folder importing everything 
import LoginForm from './LoginForm';
import './App.css';

function App() {   //our app function we need see the navbar and loginform
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;



/*Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
Create a Navigation component that contains links styled like a navbar.
The links don't have to go anywhere.
Put the Navigation component at the top of the page and the LoginForm in the center of the page.*/
