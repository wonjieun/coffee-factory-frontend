import Layout from '../components/Layout';
import { Button } from 'antd-mobile';
import Link from 'next/link';

const About = () => {
  return (
    <Layout title="About">
      <Link href="/">
        <Button>Go to Index</Button>
      </Link>
    </Layout>
  );
};
export default About;
