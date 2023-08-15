import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Counter from './components/Counter';

function App() {
  const users = [
    {
      name: 'Ahmet',
      surname: 'Kaya',
      age: 30,
      gender: 'Erkek',
      ehliyet: true,
    },
    {
      name: 'Ayşe',
      surname: 'Demir',
      age: 25,
      gender: 'Kadın',
      ehliyet: false,
    },
    {
      name: 'Mehmet',
      surname: 'Yılmaz',
      age: 45,
      gender: 'Erkek',
      ehliyet: true,
    },
    {
      name: 'Fatma',
      surname: 'Aksoy',
      age: 28,
      gender: 'Kadın',
      ehliyet: true,
    },
    {
      name: 'Ali',
      surname: 'Çelik',
      age: 22,
      gender: 'Erkek',
      ehliyet: false,
    },
    {
      name: 'Zeynep',
      surname: 'Aydın',
      age: 35,
      gender: 'Kadın',
      ehliyet: true,
    },
    {
      name: 'Mustafa',
      surname: 'Öztürk',
      age: 40,
      gender: 'Erkek',
      ehliyet: true,
    },
  ];

  return (
    <div className="App-header">
      {/* bir bileşenin ekrana basma */}
      <Header />
      <Counter />
      {/* prop >  Bir bieleşni  farklı içeriklerle kullanmak için veri gönderme */}
      <Card name={'Ahmet'} surname={'Kaya'} age={30} />
      <Card name={'Ali'} surname={'Yıldırım'} age={18} />
      <Card name={'Berke'} surname={'Aydoğan'} age={17} />
      <Card name={'Ali'} surname={'Yıldız'} age={17} />

      {/* çoklu render > bir dizideki her bir eleman ekrana bileşene basma */}
      {/* users dizidneki her bir kullanıcı için ekran kart basar */}
      {users.map((user) => (
        <Card
          name={user.name}
          surname={user.surname}
          age={user.age}
          ehliyet={user.ehliyet}
        />
      ))}
    </div>
  );
}

export default App;
