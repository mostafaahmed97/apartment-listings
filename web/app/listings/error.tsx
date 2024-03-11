'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <>
      <p className="mb-2">An error occurred...</p>
      <Link href="/listings" className="text-sm text-gray-500">
        Go back
      </Link>
    </>
  );
}
