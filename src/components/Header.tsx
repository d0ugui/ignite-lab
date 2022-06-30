import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 px-6 flex items-center justify-between lg:justify-center lg:px-0 bg-gray-700 border-b border-gray-600">
      <Logo />

      <div className="flex items-center lg:hidden">
        <span>Aulas</span>
        <div className="space-y-2 ml-2">
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
        </div>
      </div>
    </header>
  );
}
