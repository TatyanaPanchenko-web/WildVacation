import Content from "../../Components/Content/Content";
import Features from "../../Components/Features/Features";
import Directions from "../../Components/Directions/Directions";
import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Review from "../../Components/Review/Review";

export default function Main() {
  return (
    <>
      <Content />
      <main>
        <Features />
        <Directions />
        <About />
        <Blog />
        <Review />
      </main>
    </>
  );
}
