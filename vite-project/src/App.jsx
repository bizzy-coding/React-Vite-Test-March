
export default function App() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Hello</p>
      <Profile />
      <MyButton />
      <Doggo />
    </div>

  )
}

function MyButton() {
  return (
    <button>Click me</button>
  )
}

const user = {
  name: 'Miss Vanjee',
  imageUrl: 'https://dragadventures.files.wordpress.com/2018/03/capture30.jpg',
  imageSize: 190,
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

const dog = {
  name: 'Betty',
  food: 'Denta Sticks',
  imgLink: 'https://paw-dicure.com/wp-content/uploads/2021/06/icon.png',
  pawSize: 90,

}

function Doggo() {
  return(
    <>
    <h2>{dog.name}</h2>
    <img
      src={dog.imgLink}
      style={{
        width: dog.pawSize,
      }}
    />
    </>
  )
}