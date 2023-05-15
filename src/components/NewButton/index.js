import styles from './style.module.css';

export default function NewButton() {
  return (
    <div>
      <button>
        Klik saya.
      </button>
      <p className={styles.blue}>Warna biru</p>
    </div>
  )
}