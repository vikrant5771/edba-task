import UserTable from "@/components/UserTable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-100">
      <UserTable />
    </div>
  );
}
