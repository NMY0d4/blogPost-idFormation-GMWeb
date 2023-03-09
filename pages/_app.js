import Container from '@/components/Container/Container.component';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
