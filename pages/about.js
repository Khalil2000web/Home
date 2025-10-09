import { pagesData } from '../data/pagesData';

export async function getStaticProps() {
  return {
    props: {
      page: pagesData.about
    }
  };
}

export default function AboutPage({ page }) {
  return (
    <div className="about-content">
      <h2>{page.title}</h2>
      {page.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
