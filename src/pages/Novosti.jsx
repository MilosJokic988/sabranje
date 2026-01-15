import "./Novosti.css";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Novosti() {
  // хвата све категорије да се овде приказују као кратке вести
  const latest = articles.slice(0, 10); // касније можеш сорт + fetch

  return (
    <section className="category-page">
      <h2>Новости</h2>

      <div className="articles-grid">
        {latest.length > 0 ? (
          latest.map((a) => <ArticleCard key={a.id} article={a} />)
        ) : (
          <p className="empty">Још нема објава.</p>
        )}
      </div>
    </section>
  );
}
