import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <h1 className="p-4 fw-bold">React Form</h1>
      </header>

      <main>
        <div className="container">
          <form className="p-4">
            <div class="mb-3">
              <label for="newArticle" className="form-label">
                Inserisci nuovo articolo
              </label>
              <input type="text" className="form-control" id="newArticle" />
            </div>
            <button type="submit" className="btn btn-success">
              <i className="fa-solid fa-plus fa-xl"></i>
            </button>
          </form>

          <div className="p-4">
            <ul className="list-group">
              <li className="list-group-item">Nuovo Articolo</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
