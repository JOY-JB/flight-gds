import Script from "next/script";
import DashboardLayout from "../Components/DashboardLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

export default MyApp;
