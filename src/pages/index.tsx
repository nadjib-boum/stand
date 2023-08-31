import Sidenav from "@/components/Sidenav";
import People from "@/components/People";

export default function Home() {
  return (
    <div className="_container flex justify-between pt-6">
      <Sidenav />
      <div>X</div>
      <People />
    </div>
  );
}
