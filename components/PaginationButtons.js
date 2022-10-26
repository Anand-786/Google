import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {useRouter} from 'next/router';

function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex max-w-lg justify-between text-blue-600 mb-10'>
        {startIndex >=10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
                <div className='flex flex-1 flex-col items-center cursor-pointer hover:underline'>
                    <ChevronLeftIcon className='h-5' />
                    <p>Previous</p>
                </div>
            </Link>
        )}

        <p>Page {startIndex/10 + 1}</p>

        <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
            <div className='flex flex-1 flex-col items-center cursor-pointer hover:underline'>
                <ChevronRightIcon className='h-5' />
                <p>Next</p>
            </div>
        </Link>
    </div>
  )
}

export default PaginationButtons