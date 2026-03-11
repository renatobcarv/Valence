export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Valence</h1>
      <p className="text-xl text-gray-700">Revenue Recovery AI Platform</p>
      <div className="mt-8 flex gap-4">
        <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Log In</a>
        <a href="/dashboard" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">View Dashboard</a>
      </div>
    </main>
  );
}
