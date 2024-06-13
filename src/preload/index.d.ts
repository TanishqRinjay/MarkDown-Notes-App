export {} // This file doesn't have a default export
declare global {
  interface Window {
    context: {
      locale: string
    }
  }
}
