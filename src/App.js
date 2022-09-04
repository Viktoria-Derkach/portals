import './App.css';
import Modal from './Modal';
import { useState } from 'react';

const P = ({children}) => <p>{children}</p>

function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <button onClick={() => setOpen(true)}>open / close</button>
      <Modal open={open} onClose={() => setOpen(false)} ><P>123</P> </Modal>
    </>
  );
}

export default App;
