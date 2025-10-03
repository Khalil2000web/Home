import Link from 'next/link';

export default function Home() {
  return (
    <main className="indexmain">
      <h1 className="title-h1">Tour Archive</h1>

      {/* 2025 */}
      <section className="main20">
        <h2>2025</h2>
        <div className="cards">
          <Link href="/travels/prague-2025" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2493.jpeg" loading="eager" className="card-img" alt="Prague, Czechia" />
            <div className="name">PRAGUE</div>
          </Link>
          <Link href="/travels/vienna-2025" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_1804.jpeg" loading="eager" className="card-img" alt="Vienna, Austria" />
            <div className="name">VIENNA</div>
          </Link>
          <Link href="/travels/budapest-2025" className="card">
            <img src="https://ik.imagekit.io/cx6yav04a/IMG_2313.jpeg" loading="eager" className="card-img" alt="Budapest, Hungary" />
            <div className="name">BUDAPEST</div>
          </Link>
        </div>
      </section>

</main>
  )
}
