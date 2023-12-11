import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "10+ Projects Completed",
  "1 Year of Web App Development",
  "Experiences in teamwork/team managment",
  "Contributed as a Junior Developer 📝",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
