import Spline from "@splinetool/react-spline"
import logo from "./images/logo.png";

export default function Animation() {
  return (
    <section className="h-screen">
        <a href="./">
            <img className="absolute top-5 left-5 w-[100px] transition-all hover:-rotate-45" src={logo} alt="Bella Leonette Logo" />
        </a>
        {/* <Spline scene="https://prod.spline.design/EPvntYYBRGvAPQuA/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/EChf4WPGk7XC6WWN/scene.splinecode" />
        {/* <Spline scene="https://prod.spline.design/aQJ6IRxc1zjpFLZK/scene.splinecode" /> */}
    </section>
  )
}
