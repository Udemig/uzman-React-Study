// gönderilen özellikleri
// bileşenin parametresi aracılığı ile alıyoruz
function Card(props) {
  return (
    <div className="card">
      <h1>Kullanıcı İsmi: {props.name}</h1>
      <h1>Kullanıcı Soyadı: {props.surname}</h1>
      <h1>Yaş: {props.age}</h1>

      {/* jsx içersinde bir koşula göre ekran basma */}
      <h2>{props.ehliyet ? 'Ehliyet Var' : 'Ehliyet Yok'}</h2>
    </div>
  );
}

export default Card;
