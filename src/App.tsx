import './App.css';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;