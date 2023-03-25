
export default function App() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Hello</p>
      <Profile />
      <MyButton />
      <Doggo />
      <RecipeList />
    </div>

  )
}

function MyButton() {
  return (
    <button>Click me</button>
  )
}

function Profile() {
  return (
    <div>
      <h2>{user.name}</h2>
      <img 
      src={user.imageUrl} 
      alt={"photo of " + user.name}
      style={{
      width: user.imageSize,
      }}
      />
    </div>
  )
}


function Doggo() {
  const listToys = bettyToys.map(bettyToy =>
    <li key={bettyToy.id}>
      {bettyToy.name}
    </li>
    );

  return (
    <>
     <h2>{dog.name}</h2>
    <img
      src={dog.imgLink}
      style={{
      width: dog.pawSize,
      }} 
      />
      <ul>{listToys}</ul>
    </>
  );
}

function RecipeList() {

  const listItems = recipes.map(recipe =>
    <li
    key={recipe.id}
    style={{
      color: recipe.isDinner ? 'red' : 'pink'
    }}
    >
      {recipe.title}
    </li>

  )
  return (
    <ul>{listItems}</ul>
  )
}

const user = {
  name: 'Miss Vanjee',
  imageUrl: 'https://dragadventures.files.wordpress.com/2018/03/capture30.jpg',
  imageSize: 190,
}

const bettyToys = [
  { name: 'weasel', id: 1 },
  { name: 'mr brocoli', id: 2 },
  { name: 'squid', id: 3 }
];

const dog = {
  name: 'Betty',
  food: 'Denta Sticks',
  imgLink: 'https://paw-dicure.com/wp-content/uploads/2021/06/icon.png',
  pawSize: 90,
}

const recipes = [
  { title: 'spag bol', id: 1, isDinner: true },
  { title: 'pizza', id: 2, isDinner: true },
  { title: 'toast', id: 3, isDinner: false },
];

