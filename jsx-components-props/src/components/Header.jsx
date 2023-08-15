/*
 * Bütün Bileşenler bir fonksiyondur
 * Fonksiyonun isminin ilk harfi büyük
 * Her zaman return satırın JSX kodu yer alır
 * Yazılan fonksiyonu export et
 */

/*
  ! HTML JSX Farkları
  * class yerine className
  * bir jasavascriptt kodunu {} yardımıyla js içerisine yazabiliyoruz
  * olayları izlerken addEventLİwstener yerine direkt jsx elemanı üzerine yazıyoruz
  */

function Header() {
  const logo = 'E-Ticaret';

  // tıklanmaa olunca çalışır
  const girisYap = () => {
    alert('Giriş Yapılıyor......');
  };

  // bu bileşen çağrılınca ekrana gelicek arayüz kodları
  return (
    <header className="ust-alan">
      <h1>{logo}</h1>
      <nav>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
        />
        <button>ara</button>
      </nav>

      <button onClick={girisYap}>KayıtOl</button>
    </header>
  );
}

export default Header;
