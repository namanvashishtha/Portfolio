import Layout from "./components/Layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <TooltipProvider>
      <Layout />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
