import MainForm from "@/components/forms/mainForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-lg animate-float w-full shadow-md bg-primaryWhite gap-10 px-4 py-8 rounded-lg flex flex-col items-center justify-center">
        <MainForm />
      </div>
    </main>
  );
}
