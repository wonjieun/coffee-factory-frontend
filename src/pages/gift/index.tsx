import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import List from '@/components/gift/List';

const Gift = () => {
  return (
    <Layout>
      <Head>
        <title>Gift</title>
      </Head>
      <List />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default Gift;
