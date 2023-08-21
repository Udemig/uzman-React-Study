import Sayac from './components/Sayac';
import { useState } from 'react';

function App() {
  // uygulamadaki temanın state'i
  // true ise koyu moda değilse açık mod
  const [tema, temaDegis] = useState(true);

  return (
    <div
      // tema değerine verilecek class'ları belirleme
      className={`p-5 ${tema ? 'bg-dark text-light' : ''}`}
      style={{ height: '100vh' }}
    >
      <div className="d-flex justify-content-between">
        <h3>Temayı Belirle</h3>
        <button
          // temayı tersine çevirir
          onClick={() => temaDegis(!tema)}
          className="btn btn-warning"
        >
          {tema ? 'Açık Mod' : 'Koyu Mod'}
        </button>
      </div>

      <Sayac />
    </div>
  );
}

export default App;
