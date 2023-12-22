import { Button } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <span className="border border-red-100">
      <Button color="green" component={Link} href="/sign-up">
        test
      </Button>
    </span>
  );
}
