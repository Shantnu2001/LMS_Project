'use client';

import React from 'react';
import Button from '@/components/ui/button';

import { useRouter } from 'next/navigation';

const HomeButton = () => {
  const router = useRouter();

  return <Button onClick={() => router.push('/')}>test</Button>;
};

export default HomeButton;
