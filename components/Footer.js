import { Link } from '@material-ui/core'
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>
                To request that resources be added to this page, follow the
                <Link href="https://github.com/bmanley91/sbumc-resource-site/blob/main/CONTRIBUTING.md">
                    <a> Contribution Guidelines</a>
                </Link>.
            </span>
        </footer>
    )
}
