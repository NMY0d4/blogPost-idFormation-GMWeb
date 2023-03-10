import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container px-4 pt-5'>
      <h1>Bienvenue sur Code.ID</h1>
      <span>Le blog spécial pour les formations avec Id Formation.</span>
      <div className={`row mt-5 `}>
        <div className={`col-12 col-sm-6 ${styles.blogCard}`}>
          <div className='card w-100 h-100'>
            <div className='card-body'>
              <h5 className='card-title'>Lisez les articles</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Maximisez votre culture web
              </h6>
              <p className='card-text'>
                Chaque formateur tente de vous apporter le plus de compétence
                possible(dans leur articles).
              </p>
              <Link href='/blog'>Visitez le blog</Link>
            </div>
          </div>
        </div>
        <div className={`col-12 col-sm-6 ${styles.blogCard}`}>
          <div className={`card w-100 h-100`}>
            <div className='card-body'>
              <h5 className='card-title'>Voir la listes des membres</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Rencontrez des formateurs
              </h6>
              <p className='card-text'>
                Ajoutez, invitez et discutez avec les différents membres.
              </p>
              <Link href='/utilisateurs'>Découvrez la liste des membres</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
