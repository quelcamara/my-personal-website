import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Raquel Câmara";
export const siteTitle =
    "Raquel Câmara - Data Scientist";

const SocialLink = ({ url, img, imgAlt }) => (
    <a
        className={styles.headerSocialItem}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <img height="30px" src={img} alt={imgAlt} />
    </a>
);

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/profile.jpg" />
                <meta
                    name="description"
                    content="Day-to-day life and coding as a Software Engineer/Architect"
                />
                <meta
                    property="og:image"
                    content="https://vinisantos.dev/images/profile.jpg"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.jpg"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {name}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
                <Link href="/aboutme">About Me</Link>
                <div className={styles.headerSocial}>
                    <SocialLink
                        img="/images/linkedin.svg"
                        imgAlt="LinkedIn"
                        url="https://www.linkedin.com/in/raquel-camara/"
                    />
                    <SocialLink
                        img="/images/github.svg"
                        imgAlt="GitHub"
                        url="https://github.com/quelcamara/"
                    />
                </div>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
