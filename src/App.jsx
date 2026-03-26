export default function App() {
  const themes = [
    "Innovative Teaching Pedagogy",
    "Best Institutional Practices",
    "Research & Innovation in Higher Education",
    "Intellectual Property Rights (IPR)",
    "Start-up, Skill Orientation & Success Stories",
  ];

  const paperTypes = [
    "Teaching innovation case studies",
    "Survey-based academic studies",
    "Field projects and action research",
    "Individual success stories in teaching or research",
    "Institutional best practice models",
    "Entrepreneurship development initiatives",
    "Start-up ecosystem in higher education institutions",
  ];

  const awards = [
    "Innovative Teaching Pedagogy Award",
    "Green Innovation Award",
    "Innovative Institute Award",
    "Woman Innovator Award",
  ];

  const organisers = [
    "Ashveena Innovators LLP",
    "Maulana Azad College",
    "SB College of Science",
    "Vidyapith Vikas Manch",
    "Rajkunwar Bahuuddeshiya Shikshan Sanstha",
    "Late Wamrao Pitambare College",
    "ACTRA",
    "ELTAI–CSN",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>
              <h1 className="text-4xl font-extrabold md:text-5xl text-slate-900">
                National Educators Summit 2026
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Multidisciplinary Summit on Teaching, Research, Innovation & IPR
              </p>

              <p className="mt-6 text-slate-700 leading-7">
                A national platform for educators, researchers, innovators and academic leaders to present best practices,
                showcase institutional excellence, publish achievements and gain national recognition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border p-4 bg-white shadow-sm">
                  <p className="text-sm text-slate-500">Summit Date</p>
                  <p className="font-semibold">15 April 2026</p>
                </div>
                <div className="rounded-xl border p-4 bg-white shadow-sm">
                  <p className="text-sm text-slate-500">Venue</p>
                  <p className="font-semibold">Maulana Azad College, CSN</p>
                </div>
                <div className="rounded-xl border p-4 sm:col-span-2 bg-white shadow-sm">
                  <p className="text-sm text-slate-500">Last Date</p>
                  <p className="font-semibold">10 April 2026</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.gle/tscirfvKb54wunnb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-center"
                >
                  Register Now
                </a>

                <a
                  href="mailto:ashveenallp@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border rounded-lg font-semibold hover:bg-slate-100 text-center"
                >
                  Submit Paper
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold">Quick Info</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Fees</p>
                  <p className="font-semibold">₹1000 (Publication) | ₹500 (Participation)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Payment</p>
                  <p className="font-semibold">GPay / PhonePe: 9763186574</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Submission</p>
                  <p className="font-semibold">ashveenallp@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-bold">About the Summit</h2>
        <p className="mt-4 text-slate-700 leading-7">
          This summit celebrates innovation in teaching, research, institutional practices and academic entrepreneurship.
          It provides a national forum for educators to present impactful work and collaborate.
        </p>
      </section>

      {/* THEMES */}
      <section className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-xl font-bold">Call for Papers</h2>
          <div className="mt-4 space-y-2">
            {themes.map((t) => (
              <div key={t} className="p-3 bg-white rounded shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Paper Types</h2>
          <div className="mt-4 space-y-2">
            {paperTypes.map((p) => (
              <div key={p} className="p-3 bg-white rounded shadow-sm">
                {p}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* AWARDS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-bold">National Awards</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((a) => (
            <div key={a} className="p-4 border rounded-xl bg-white shadow-sm text-center">
              🏆 {a}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-slate-900 text-white py-10">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-xl font-bold">Organised By</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {organisers.map((o) => (
              <span key={o} className="bg-white/10 px-3 py-1 rounded">
                {o}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <p className="font-semibold">Contact</p>
            <p>Prof. Dr. Ashwin Ranjanikar</p>
            <p>9763186574</p>
            <p>ashveenallp@gmail.com</p>
          </div>

        </div>
      </section>

    </main>
  );
}
