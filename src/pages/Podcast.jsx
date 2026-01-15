import "./Podcast.css";
import { episodes } from "../data/episodes";
import EpisodeCard from "../components/EpisodeCard";

export default function Podcast() {
  return (
    <section className="podcast-page">
      <div className="podcast-header">
        <h2>Подкаст Сабрање</h2>
        <p>Слушај разговоре који сабирају,а не деле.</p>
      </div>

      <div className="podcast-grid">
        {episodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>
    </section>
  );
}
