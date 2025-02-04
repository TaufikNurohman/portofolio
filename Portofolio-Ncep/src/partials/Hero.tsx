import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello Everyone, I'm <GradientText>Taufik Nurohman</GradientText> 👋
        </>
      }
      description={
        <>
          I am a Student with experience in Frontend Development: React.js,
          Next.js, Tailwind CSS. With skills in technology, I have worked on
          various projects that provide innovative and efficient solutions. I am
          always eager to learn new things and deliver the best results in every
          in every job.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/Taufik.JPG"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/ig.png" alt="Instagram icon" />
          </a>

          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
