import { useState } from 'react';

const Sayac = () => {
  /*
   * useState iki eleman döndürür
   * tuttuğumuz veri
   * veriyi değiştirmemize yararyan fonksiyon
   *
   * ilkDeğer tuttuğumuz verinin bileşen ekrana
   * ilk basıldığı andaki değeri
   */
  const [sayi, sayiDegis] = useState(0);

  return (
    <div className="container mt-5">
      <h1 className="my-4">Sayaç</h1>

      <button
        onClick={() => sayiDegis(sayi - 1)}
        className="btn btn-danger"
      >
        Eksi
      </button>
      <span className="lead mx-3">{sayi}</span>
      <button
        onClick={() => sayiDegis(sayi + 1)}
        className="btn btn-success"
      >
        Artı
      </button>
    </div>
  );
};

export default Sayac;
