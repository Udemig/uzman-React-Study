import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  //! bileşenin yaşam döngüsünü izelemek için
  //* useEffect fonksiyonu kullanılır
  //* useEffect > 2 parametre ister
  //* çalıştırıcağı fonksiyon
  //* bağımlılık dizisi > fonksiyon çalışacağı zamana karar verir
  //   useEffect(() => {
  //     console.log('Bieleşen Doğma Anı > Ekrana Geldi');
  //   }, []);

  //* bağımlılık dizisine bir state veya prop verirsek
  //* o değer değiştiğinde fonksiyon çalıştır
  //   useEffect(() => {
  //     console.log('Bileşenin Gelişme Anı > State güncellendi', count);
  //   }, [count]);

  //! bileşenin erkandan gitme anını izleme
  useEffect(() => {
    console.log('Ekrana Geldi');
    return () => {
      console.log('Ekrandan Gitti');
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>eksi</button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>artı</button>
    </div>
  );
};

export default Counter;
