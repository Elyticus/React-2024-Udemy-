/* eslint-disable react/prop-types */
import componentImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDesc = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function ComponentProps({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Component image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  const description = reactDesc[genRandomInt(2)];
  return (
    <header>
      <img src={componentImage} alt="" />
      <h1>React Essentials</h1>
      <p>
        <span className="description">{description} </span>React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <ComponentProps
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <ComponentProps {...CORE_CONCEPTS[1]} />
            <ComponentProps {...CORE_CONCEPTS[2]} />
            <ComponentProps {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
