interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      {title ? <div className="text-3xl text-center py-3">{title}</div> : null}
      <div className="p-10 flex justify-center items-center flex-col">
        {children}
      </div>
    </>
  );
}
