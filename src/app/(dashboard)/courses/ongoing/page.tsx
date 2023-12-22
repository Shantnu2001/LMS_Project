import { TITLE_COURSE_ONGOING } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: TITLE_COURSE_ONGOING
};

const Page = () => {
  return <div>ongoing courses</div>;
};

export default Page;
