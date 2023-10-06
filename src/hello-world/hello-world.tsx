export function HelloWorld({ hidden }: { hidden?: boolean }) {
  return !hidden ? <div data-testid="hello-world">Hello, world!</div> : null;
}
