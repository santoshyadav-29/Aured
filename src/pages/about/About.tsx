import AboutUs from "../../components/about/AboutUs";
import Members from "../../components/about/Members";
import SecondaryCover from "../../layouts/secondaryCover";

const About = () => {
  return (
    <>
      <SecondaryCover
        title="About"
        description="We are a non-profit organization focusing on child education with technology."
      />
      <AboutUs />
      <Members />
    </>
  );
};

export default About;
