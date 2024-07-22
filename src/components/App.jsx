import "../styles/App.css";
import Info from "./Info";
import School from "./School";
import Work from "./Work";

function App() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>
          <h1>Continue with your Application</h1>
          <section>
            <p>
              Thank you for your interest in the position at the Company. We
              appreciate the time you took to apply.
            </p>
            <p>
              To proceed with your application, could you please upload your CV
              down below? Your CV will help us better understand your
              qualifications and experiences.
            </p>
          </section>
          <Info />
          <School />
          <Work />
          <section>
            <p>
              Thank you again for considering a career with The Company. We look
              forward to reviewing your application.
            </p>
          </section>
        </main>
        <aside>Sidebar</aside>
      </div>
      <footer>© 2024 The Company. All rights reserved.</footer>
    </>
  );
}

export default App;
