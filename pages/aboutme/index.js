import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import TagLabel from "../../components/tagLabel";
import utilStyles from "../../styles/utils.module.css";

const SkillsLabel = ({ type, children }) => {
    return (
        <TagLabel
            backgroundColor={type === "soft" ? "green" : "red"}
            textColor="white"
        >
            {children}
        </TagLabel>
    );
};

export default function Post() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hey, welcome! I'm <b>Raquel</b>. I'm a{" "}
                    <b>Software Engineer</b> and <b>Solutions Architect</b> who
                    loves everything about Software craftsmanship, designing
                    solutions and, of course, coding.
                </p>
            </section>

            <section className={utilStyles.headingMd}>
                <p>
                    My main skills are focused on <b>backend</b> development. In
                    my daily activities I play around with{" "}
                    <SkillsLabel>Java</SkillsLabel>,{" "}
                    <SkillsLabel>NodeJS</SkillsLabel>,{" "}
                    <SkillsLabel>SQL</SkillsLabel>,{" "}
                    <SkillsLabel>Microservices</SkillsLabel>,{" "}
                    <SkillsLabel>Serverless</SkillsLabel>,{" "}
                    <SkillsLabel>API Gateway</SkillsLabel>,{" "}
                    <SkillsLabel>Cloud Computing (AWS)</SkillsLabel>,{" "}
                    <SkillsLabel>Terraform</SkillsLabel>
                    <br />
                    But I also like <b>frontend</b> development and I usually
                    choose <SkillsLabel>React.JS</SkillsLabel> and{" "}
                    <SkillsLabel>React Native</SkillsLabel> for this. By the
                    way, this site is built over{" "}
                    <SkillsLabel>Next.JS</SkillsLabel>
                </p>
            </section>

            <section className={utilStyles.headingMd}>
                <p>
                    Currently, I'm a <b>Technical Leader</b> at the{" "}
                    <a href="https://www.riachuelo.com.br">
                        Riachuelo Fashion Stores
                    </a>{" "}
                    and I'm <b>leading</b> a team of 9 developers in a technical
                    way. My main responsibilities are:
                    <ul>
                        <li key="0">
                            Designing and explaining{" "}
                            <b>Architectural Solutions</b>
                        </li>
                        <li key="1">
                            Proposing <b>standards</b> to be followed while we
                            are coding
                        </li>
                        <li key="2">
                            Ensuring that our solutions match the corporative{" "}
                            <b>architectural principles and standards</b>
                        </li>
                        <li key="3">
                            Bringing standards and corporative solutions{" "}
                            <b>along with other Technical Leaders</b>
                        </li>
                        <li key="4">
                            Managing my time to also code something, being a{" "}
                            <b>hands on</b> Technical Leader
                        </li>
                    </ul>
                </p>
            </section>
        </Layout>
    );
}
