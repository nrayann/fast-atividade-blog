import parse from "html-react-parser";

export default function PostContent({ content }) {
  return <>{parse(content)}</>;
}
