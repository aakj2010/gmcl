import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portal from './components/portal/Portal';
import Inbox from './components/pages/Inbox'
import Starred from './components/pages/Starred'
import Sent from './components/pages/Sent'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/portal' element={<Portal />}>
            <Route path='inbox' element={<Inbox />} />
            <Route path='starred' element={<Starred />} />
            <Route path='sent' element={<Sent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
