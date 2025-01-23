import Home from "@/components/HomePage";
import { fetchEvents } from "@/data/events";
import { fetchSponsors } from "@/data/sponsors";

export default async function page() {
  const events = await fetchEvents();
  const sponsors = await fetchSponsors();
  return <Home events={events} sponsors={sponsors} />;
}
