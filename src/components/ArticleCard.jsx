import "./ArticleCard.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/${article.category}`} className="article-link">
      <div className="article-card">
        <span className="category">{article.category}</span>
        <h3>{article.title}</h3>
        <p className="summary">{article.summary}</p>
        <p className="date">{article.date}</p>
      </div>
    </Link>
  );
}
