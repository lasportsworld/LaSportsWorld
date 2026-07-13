"use client";

import { useEffect } from "react";

const LOADER_SRC = "https://webforms.pipedrive.com/f/loader";

export default function PipedriveForm({ url }: { url: string }) {
  useEffect(() => {
    // Remove any stale loader so it re-executes fresh each time this mounts
    document.querySelectorAll(`script[src="${LOADER_SRC}"]`).forEach((s) => s.remove());

    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [url]);

  return <div className="pipedriveWebForms" data-pd-webforms={url} />;
}
