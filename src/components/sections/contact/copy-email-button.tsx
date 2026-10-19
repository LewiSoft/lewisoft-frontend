"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function CopyEmailButton({ email }: { email: string }) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email address copied");
    } catch {
      toast.error("Couldn't copy — please select the address instead.");
    }
  }

  return (
    <Button variant="secondary" size="sm" onClick={copy}>
      <Copy data-icon="inline-start" />
      Copy
    </Button>
  );
}
