import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * App-level safety net. Catches render/lazy-chunk failures (e.g. a stale chunk
 * after a deploy, or a misconfigured Supabase client) and shows a recoverable
 * fallback instead of a blank white screen.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Surface to the console; Plausible (if present) can pick this up later.
    console.error("App error boundary caught:", error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground">— มีบางอย่างผิดพลาด</p>
        <h1 lang="th" className="font-serif text-[26px] md:text-[34px] tracking-[-0.01em] max-w-[20ch]">
          ขออภัย หน้านี้โหลดไม่สำเร็จ
        </h1>
        <p lang="th" className="font-thai text-[14px] leading-[1.8] text-muted-foreground max-w-[42ch]">
          ลองโหลดใหม่อีกครั้ง — ถ้ายังไม่ได้ อีเมลหาเราที่ hello@orions.agency
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-background bg-foreground px-5 py-3 rounded-none hover:opacity-90 transition-opacity"
        >
          โหลดหน้านี้ใหม่
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
