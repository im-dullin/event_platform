import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

/**
 * 메인 페이지를 제외한 다른 페이지 에서는 헤더와 푸터를 사용하지 않으므로
 * root 페이지들은 별도의 layout을 생성해준다.
 * 기존 layout.tsx의 RootLayout와 거의 비슷하므로 복사해 사용한다.
 */
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }
  