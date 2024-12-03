import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newArticle, setNewArticle] = useState("Titolo Articolo");
  const [articlesData, setArticlesData] = useState([]);

  const handleInputChange = (e) => {
    setNewArticle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const articleList = [...articlesData];
    articleList.push({ title: newArticle });
    setArticlesData(articleList);
  };

  const deleteArticle = (id) => {
    const updatedList = articlesData.filter((article, i) => i !== id);
    setArticlesData(updatedList);
  };

  return (
    <>
      <header>
        <h1 className="p-4 fw-bold">React Form</h1>
      </header>

      <main>
        <div className="container">
          <form className="p-4" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="newArticle" className="form-label">
                Inserisci nuovo articolo
              </label>
              <input
                type="text"
                className="form-control"
                id="newArticle"
                value={newArticle}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              <i className="fa-solid fa-plus fa-xl"></i>
            </button>
          </form>

          <div className="p-4">
            <ul className="list-group">
              {articlesData.map((article, i) => {
                return (
                  <li key={i} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>{article.title}</div>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteArticle(i)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
