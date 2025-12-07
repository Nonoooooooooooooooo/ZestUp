import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>ZestUp</h3>

      <p>Contact : contact@zestup</p>
      <p>Téléphone : +33 6 </p>
      <p>Adresse : 123 France</p>

      <div className={styles.socials}>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <p><a href="/mentions-legales">Mentions légales</a></p>
      <p><a href="/politique-confidentialite">Politique de confidentialité</a></p>
      <p>&copy; 2025 ZestUp. Tous droits réservés.</p>
    </footer>
  );
}
