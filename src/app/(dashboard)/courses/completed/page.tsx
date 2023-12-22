import { TITLE_COURSE_COMPLETED } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: TITLE_COURSE_COMPLETED
};

const Page = () => {
  return <div>completed courses</div>;
};

export default Page;
