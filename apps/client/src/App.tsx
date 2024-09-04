import { Button } from './components/Button';

function App() {
  return (
    <main className="container flex flex-col gap-8 justify-center items-center min-h-screen p-8 text-center mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-balance max-w-screen-lg">
        Welcome to the Typescript Fullstack Project!
      </h1>
      <p>This is the client starting point 🚀</p>
      <Button>
        <strong>Hello</strong>
      </Button>
      {/* <Button variant="secondary">Word</Button> */}
    </main>
  );
}

export default App;
