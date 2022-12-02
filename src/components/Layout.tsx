interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="container">{children}</div>;
}
