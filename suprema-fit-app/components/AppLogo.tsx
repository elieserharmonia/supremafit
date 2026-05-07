export function AppLogo({ small = false }: { small?: boolean }) {
  return (
    <div className={`brand-center ${small ? "brand-small" : ""}`} aria-label="SUPREMA FIT">
      <img className="logo-image" src="/suprema-logo.png" alt="Logo SUPREMA FIT" />
      <div className="brand-type">
        <span className="suprema">SUPREMA</span>
        <span className="fit">FIT</span>
      </div>
    </div>
  );
}
