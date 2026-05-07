const stories = [
  ["Seu story", "JP", true],
  ["Coach Leo", "CL", false],
  ["Julia B.", "JB", false],
  ["Marcos S.", "MS", false],
  ["Ana P.", "AP", false],
  ["Turma 6h", "6H", false]
] as const;

export function StoryList() {
  return (
    <section>
      <div className="section-title-row">
        <h2>Stories</h2>
        <a className="link-orange" href="#feed">Ver todos</a>
      </div>
      <div className="stories">
        {stories.map(([name, initials, plus]) => (
          <div className="story" key={name}>
            <div className="story-ring">
              <div className="story-avatar">{initials}</div>
              {plus && <span className="story-plus">+</span>}
            </div>
            <div className="story-label">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
