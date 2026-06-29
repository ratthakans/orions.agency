/// <reference types="vite/client" />

// vite-imagetools — `?as=picture` imports resolve to a <picture> descriptor.
declare module "*?as=picture" {
  const value: {
    img: { src: string; w: number; h: number };
    sources: Record<string, string>;
  };
  export default value;
}
