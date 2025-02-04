import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          <GradientText>Come on, follow my story</GradientText>
        </>
      }
      description="SEBAIK BAIK MANUSIA ADALAH YANG BERMANFAAT BAGI ORANG LAIN."
    />
  </Section>
);

export { CTA };
