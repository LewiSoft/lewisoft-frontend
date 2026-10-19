import { cacheLife } from "next/cache";

// With Cache Components enabled, reading the current time during prerender is
// a build error unless it's cached. The year is computed once and refreshed
// daily, so the footer stays fully static.
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
