import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container>
        <div className="py-5 text-sm text-[var(--color-subtext)] flex flex-col items-center md:flex-row gap-2 md:justify-between">
          <span>© {new Date().getFullYear()} Nguyen Thi Quynh Mai</span>
        </div>
      </Container>
    </footer>
  );
}
