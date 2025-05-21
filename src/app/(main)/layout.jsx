import Footer from "@/components/Footer"; // ✅ Adjust the path as needed

export default function MainLayout({ children }) {
  return (
    <>
      {" "}
      {children} <Footer /> {/* ✅ Must be inside <body> */}
    </>
  );
}
