import Home from "@/components/HomePage";
import { fetchEvents } from "@/data/events";

export default async function page() {
  const events = await fetchEvents();
  return <Home events={events} />;
}
