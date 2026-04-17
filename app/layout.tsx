import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "Ospuro - Water Treatment Solutions",
  description: "Water and Wastewater Treatment Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* Header */}
        <Header />

        {/* Page Content with Transition */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}