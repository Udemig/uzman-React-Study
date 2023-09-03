import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>useEffect()</h1>
      <button onClick={() => setShow(!show)}>Gizle / Göster</button>

      {show && <Counter />}
    </div>
  );
}

export default App;
