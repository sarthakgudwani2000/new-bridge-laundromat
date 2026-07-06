import "@/App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";
import NewBridge from "@/pages/NewBridge";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import SchedulePickup from "@/pages/SchedulePickup";

export default function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <HashRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/new-bridge-laundromat" replace />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/schedule-pickup" element={<SchedulePickup />} />
            <Route path="/new-bridge-laundromat" element={<NewBridge />} />
            <Route
              path="*"
              element={<Navigate to="/new-bridge-laundromat" replace />}
            />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}
