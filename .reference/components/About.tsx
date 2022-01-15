import ReactMarkdown from "react-markdown";

const About = ({ author }: any) => {
    return (
        <>
            <ReactMarkdown>{author.body}</ReactMarkdown>
        </>
    )
}

export default About;