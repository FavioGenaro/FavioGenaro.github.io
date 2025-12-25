
export default function MainGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        min-h-screen
        grid grid-rows-[auto_1fr]
        background
      "
    >
      <main
        className="
          grid grid-rows-[auto_1fr]
          
        "
      >
        {children}
      </main>
    </div>
  );
}
