import "./styles.css";

export default function App() {
  interface Book {
    title: string;
    author: string;
  }

  const myBook: Book = {
    title: "Dee the Var",
    author: "abdul",
  };

  function printBookInfo(book: Book): void {
    console.log(`${book.title} and ${book.author}`);
  }

  printBookInfo({
    title: "Dee the Var",
    author: "abdul",
  });

  interface User {
    username: string;
    email: string;
  }

  const userProfile: User = {
    username: "Abdul",
    email: "abdu/@gmail.com",
  };

  function printUser(user: User): void {
    console.log(`${user.username}, ${user.email}`);
  }

  interface Movie {
    title: string;
    director: string;
    releaseYear: number;
    genres: string[];
  }

  interface Laptop {
    barand: string;
    model: string;
    price: number;
    specs: {
      ram: string;
      storeage: string;
      processor: string;
    };
  }

  interface ConcatFunction {
    (a: string, b: string): string;
  }

  const concatStrings: ConcatFunction = (a, b) => {
    return a + b;
  };

  interface BooleanFunction {
    (a: number): boolean;
  }

  const isPositive: BooleanFunction = (a) => {
    if (a > 0) return true;
    else {
      return false;
    }
  };

  interface SubtractFunction {
    (a: number, b: number): number;
  }

  const subtract: SubtractFunction = (a, b) => {
    return a - b;
  };

  console.log(subtract(4, 3));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
