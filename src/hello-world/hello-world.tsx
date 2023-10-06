export function HelloWorld({ id, hidden }: { id: string; hidden?: boolean }) {
  if (hidden) {
    return null;
  }

  return (
    <div id={id} data-testid="hello-world">
      Hello, world!
    </div>
  );
}
