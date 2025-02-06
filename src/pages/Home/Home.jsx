import Hero from "../../components/Hero/Hero";
import SongDataTable from "../../components/music-table/MusicTable";
import SongCard from "../../components/cards/MusicCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <SongDataTable />
      <SongCard />
    </div>
  );
}
