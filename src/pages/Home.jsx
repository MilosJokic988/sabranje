import "./Home.css";
import { episodes } from "../data/episodes";
import EpisodeCard from "../components/EpisodeCard";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <section className="home">
      <div className="home-inner">
        <h2>Добродошли у САБРАЊЕ</h2>
        <p>Место где разговор побеђује буку.</p>
        <p className="highlight">Глас времена — глас народа.</p>
      </div>

      <div className="latest">
        <h3>Најновије епизоде</h3>
        <div className="episodes-grid">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      </div>

      <div className="latest-articles">
        <h3>Најновији текстови</h3>
        <div className="articles-grid">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
      <div className="see-all-wrapper">
  <a href="/novosti" className="see-all">Види све вести →</a>
</div>
      <div className="manifest-teaser">
        <h3>Манифест Сабрања</h3>
        <p>
          У времену у којем се сви оглашавају, а мало ко ослушкује,
          ми бирамо пут разговора, сабирања и промишљања.
        </p>
        <a href="/manifest" className="read-more">Прочитај више →</a>
      </div>
    </section>
  );
}

