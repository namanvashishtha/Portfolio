import Layout from "./components/Layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <TooltipProvider>
      <Layout />
      <Toaster />
      <CustomCursor />
    </TooltipProvider>
  );
}

export default App;
