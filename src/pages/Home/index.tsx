import "./style.scss";

/**
 * The Home component is a React functional component that renders a welcome message and two buttons
 * for adding and viewing employees.
 * @returns The Home component is returning a JSX element.
 */
export const Home = () => {
  return (
    <main className="home-page">
      <div className="home-content">
        <h1>Welcome to HRnet</h1>
        <h2>
          <span> Your portal to manage employees list</span>
          <span></span>
        </h2>
      </div>
    </main>
  );
};
