import "./Nauka.css";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Nauka() {
  const filtered = articles.filter(a => a.category === "наука" || a.category === "nauka");

  return (
    <section className="category-page">
      <h2>Наука</h2>

      <div className="articles-grid">
        {filtered.length > 0 ? (
          filtered.map((a) => <ArticleCard key={a.id} article={a} />)
        ) : (
          <p className="empty">Још нема објава.</p>
        )}
      </div>
    </section>
  );
}
