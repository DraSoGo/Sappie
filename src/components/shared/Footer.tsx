export default function Footer() {
  return (
    <footer className="bg-felt-dark border-t border-gold/20 py-4 text-center text-sm text-card-text/50">
      <span>Sappie — Learn cards, handle them well.</span>
      <span className="mx-3 opacity-30">·</span>
      <a
        href="https://buymeacoffee.com/drasogo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold/50 hover:text-gold transition-colors"
      >
        Support ☕
      </a>
    </footer>
  );
}
