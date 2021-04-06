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
            <font face="Candara">
                <p align='justify'>
                    Hey, there 😀 <br/>
                    Welcome to the most beginner-friendly blog on <b>Data Science</b> {" "}
                    you will ever see! Hope you are ready to go into the
                    hotter topics on <b>Data Analysis</b>, <b>Machine Learning</b>,{" "}
                    <b>Artificial Inteligence</b>, and so many other exciting stuff
                    about technology and programming without getting all chaotic about those
                    hard and complex book definitions. 
                </p>
                <p align='justify'>
                    So let us not take it too long!<br/>
                    But first, let me introduce myself properly.
                </p>
                <p align='justify'>
                    I am a Designer and Civil Engineer who ended up falling in love
                    with Data Science after a long time struggling to decide
                    if I should keep on following the path I had once begun, or
                    if I should just throw it all away and follow my heart into something
                    I could finally see myself in. I know it might sound a little
                    cheesy at some point, but that's what it is.  
                </p>
                <p align='justify'>
                    I am a very curious person, and when I first dumped into Data Science,
                    it was such a completely new world for me that I found myself 
                    unbearable amazed by the so many things I felt I just <i>needed</i> {" "}
                    to know right away.  So here we are!
                </p>
                <p align = 'justify'>
                    When I decided I wanted to keep track of my progress I found that
                    building a blog would be just the perfect beginning. That's because here
                    I can not only keep my records about the things I am most recently studying,
                    but I can also improve some communication skills, and - last but not least! - 
                    maybe I am able to help other people, in the near future, who are also 
                    starting their jorney into Data Science.
                </p>
                <p align='justify'>
                    No changing of career is easy as it seems. It demands a lot of effort and
                    resilience from you to start all over again. And that's why I am here! I hope
                    this blog finds you in a perfect timing so you don't give up on following the
                    path you've been dreaming. Be very welcome and enjoy your stay! 💻
                </p>
            </font>
            </section>
        </Layout>
    );
}
