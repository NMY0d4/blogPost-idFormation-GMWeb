import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

export default function Index({ articles }) {
  return (
    <div className='container px-4 py-5'>
      <h1 className='text-center'>Bienvenue sur le blog</h1>
      <p className='text-center'>Voici les articles</p>
      <div className='row g-3 mt-4'>
        {articles.map((article) => (
          <div key={uuidv4()} className='col-12 col-md-6 col-xl-4'>
            <div className='card h-100 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>{article.title}</h5>
                <p className='card-text'>{`${article.body.slice(0, 20)}...`}</p>
                <Link href={`/blog/${article.id.toString()}`}>
                  Lire cet article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();
    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
