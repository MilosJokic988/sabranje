import "./Sport.css";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Sport() {
  const filtered = articles.filter(a => a.category === "sport");

  return (
    <section className="category-page">
      <h2>Спорт</h2>

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
