import LeftSideBar from '@/components/LeftSideBar';
import RightSideBar from '@/components/RightSideBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSideBar />
        {children}
        <RightSideBar />
      </main>
    </div>
  );
}
