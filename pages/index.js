import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hovercard from "../components/hovercard";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Aiden Smith - Blog</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.blogBox}`}
      >
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <Link href={`/posts-FR/${id}-FR`}>
                <a className={`${utilStyles.rightEdge}`}>
                  FR
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <br/>
      <p className={`${utilStyles.uselessCenter}`}>Sidenote: Every post has a French translation! Press "<strong>FR</strong>" to view!</p>
    </Layout>
  );
}
