import './App.css';
import Image from './Image';
import UserProfile from './UserProfile';
import Order from './Order';
// import gatinho from './gatinho.jpg';

// objetos p/ arquivo UserProfile
const users = [
  {
  id: 102,
  name: "João",
  email: "joao@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
  },
  {
  id: 77,
  name: "Amélia",
  email: "amelia@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
  }
];

// objetos p/arquivo Order
const headphone = {
  id: 102,
  user: "cena@gmail.com",
  product: "Razer Headphone",
  price: {
    value: 99.99,
    currency: "dollars"
  }
};

const energyDrink = {
  id: 77,
  user: "cena@gmail.com",
  product: "Monster 500mL",
  price: {
    value: 9.99,
    currency: "dollars"
  }
};

function App() {
  return (
    <div>
      {/* ref arquivo Image */}
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />

      {/* ref arquivo UserProfile */}
      <div className="App">
        {users.map((user) => <UserProfile key={user.id} user={user}/>)}
      </div>

      {/* ref arquivo Order */}
      {/* 1.O que o componente App é em relação a Order? Resposta: App é o componente pai . */}
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>

    </div>
  );
}

export default App;

// import staringCat from './staringCat.jpg';
// <Image source={staringCat} alternativeText="Cute cat staring" />
// gabarito faz como comentários acima, eu salvei a imagem no arquivo, importei nesse arquivo e a imagem está aparecendo no browser. Tudo certo :)
// <Image source={gatinho} alternativeText='Cute cat staring' />