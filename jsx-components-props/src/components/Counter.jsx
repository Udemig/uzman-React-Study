import { useState } from 'react';

function Counter() {
  //* useState ile sayacan değerini dinamik olrak yönetebiliriz.
  //* ilk dönen değer sayacın anlık sayısı
  //* ikinci dönen değer sayıyı değiştirmek için kullanılacak fonk.
  const [sayi, setSayi] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setSayi(sayi - 1)}>eksi</button>
      <p>{sayi}</p>
      {/* set methodu içerisinde ne gönderilirse sayacın değeri o olur */}
      <button onClick={() => setSayi(sayi + 1)}>artı</button>
    </div>
  );
}

export default Counter;
