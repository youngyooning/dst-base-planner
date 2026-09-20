import logo from "@/shared/assets/logo.webp";

export function Header() {
  return (
    <header className="border-border bg-card sticky top-0 z-10 border-b">
      <div className="flex h-(--header-height) items-center justify-between px-4">
        <a aria-label="홈" className="flex items-center gap-2 font-semibold" href="/">
          <img src={logo} aria-hidden="true" className="grid size-10 place-items-center" />
          <span>굶지마 베이스 플래너</span>
        </a>
      </div>
    </header>
  );
}
