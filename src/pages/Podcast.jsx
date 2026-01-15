import "./Podcast.css";
import { episodes } from "../data/episodes";
import EpisodeCard from "../components/EpisodeCard";

export default function Podcast() {
  return (
    <section className="podcast-page">
      <div className="podcast-header">
        <h2>Podcast Sabrаnje</h2>
        <p>Slušaj razgovore koji sabiraju, a ne dele.</p>
      </div>

      <div className="podcast-grid">
        {episodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>
    </section>
  );
}
