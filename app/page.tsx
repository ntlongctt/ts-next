import Image from "next/image";
import Icon from "./components/icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>update</h1>
      <button>check status</button>
      <Icon name="icon-1" />
      <Button>Test Shadcn/ui</Button>
    </main>
  );
}
