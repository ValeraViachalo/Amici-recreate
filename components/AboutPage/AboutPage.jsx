import { useEffect } from "react";

import { PageLayout } from "@/utils/PageLayout/PageLayout";
import Image from "next/image";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <PageLayout>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        
      </div>
    </PageLayout>
  );
}
