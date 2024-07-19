import { useState } from "react";
import "../styles/App.css";

function App() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>
          <h1>Main</h1>
          <section>
            <p>
              A section to add general information like name, email and phone
              number.
            </p>
          </section>
          <section>
            A section to add your educational experience (school name, title of
            study and date of study)
          </section>
          <section>
            <p>
              A section to add practical experience (company name, position
              title, main responsibilities of your jobs, date from and until
              when you worked for that company)
            </p>
          </section>
        </main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default App;
