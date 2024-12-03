import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleAuthor, setNewArticleAuthor] = useState("");
  const [articlesData, setArticlesData] = useState([]);

  const handleInputTitleChange = (e) => {
    setNewArticleTitle(e.target.value);
  };

  const handleInputAuthorChange = (e) => {
    setNewArticleAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const articleList = [...articlesData];
    newArticleTitle && newArticleAuthor
      ? articleList.push({ title: newArticleTitle, author: newArticleAuthor })
      : alert("Nessun valore inserito");
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
          <h2 className="fs-5 px-4">Inserisci i dati del nuovo articolo</h2>
          <form className="px-4 py-3" onSubmit={handleFormSubmit}>
            {/* Title input */}
            <div className="mb-3">
              <input
                required
                type="text"
                className="form-control"
                id="titleArticle"
                placeholder="Titolo Articolo"
                value={newArticleTitle}
                onChange={handleInputTitleChange}
              />
            </div>

            {/* Author input */}
            <div className="mb-3">
              <input
                required
                type="text"
                className="form-control"
                id="authorArticle"
                placeholder="Autore"
                value={newArticleAuthor}
                onChange={handleInputAuthorChange}
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-success">
              <i className="fa-solid fa-plus fa-xl"></i>
            </button>
          </form>

          {/* Articles list */}
          <div className="p-4">
            <ul className="list-group">
              {articlesData.map((article, i) => {
                return (
                  <li key={i} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="fw-bold">{article.title}</div>
                        <span>
                          <i>&#45; {article.author}</i>
                        </span>
                      </div>
                      <div>
                        <button className="btn btn-warning mx-1">
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          className="btn btn-danger mx-1"
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
