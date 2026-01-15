import "./EpisodeCard.css";

export default function EpisodeCard({ episode }) {
  return (
    <div className="episode-card">
      <div className="episode-thumb">
        <iframe
          src={`https://www.youtube.com/embed/${episode.youtubeId}`}
          title={episode.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <h3>{episode.title}</h3>
      <p className="date">{episode.date}</p>
    </div>
  );
}
