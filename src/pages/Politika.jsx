import "./Politika.css";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Politika() {
  const filtered = articles.filter(a => a.category === "politika");

  return (
    <section className="category-page">
      <h2>Politika</h2>

      <div className="articles-grid">
        {filtered.length > 0 ? (
          filtered.map((a) => <ArticleCard key={a.id} article={a} />)
        ) : (
          <p className="empty">Još nema objava.</p>
        )}
      </div>
    </section>
  );
}
