import { Metadata } from 'next';
import HomeButton from './_components/home-button';

export const metadata: Metadata = {
  title: 'Sign Up'
};

const Page = () => {
  return (
    <div>
      <HomeButton />
    </div>
  );
};

export default Page;
