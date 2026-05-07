import Link from "next/link";

export function AppLogo({ small = false }: { small?: boolean }) {
  return (
    <Link className={`brand-center ${small ? "brand-small" : ""}`} aria-label="SUPREMA FIT" href="/">
      <img className="logo-image" src="/suprema-logo.png" alt="Logo SUPREMA FIT" />
      <div className="brand-type brand-inline">
        <span className="suprema">SUPREMA</span>
        <span className="fit">FIT</span>
      </div>
    </Link>
  );
}
