import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Zaid<span role="emoji">😎</span>. A Web Developer<span role="emoji">🚀</span> and passionate coder
          <span role="emoji">💻</span>. I code in React and Node. Check out my{" "}
          <a href="https://github.com/zaidakhterr">Github Profile</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
