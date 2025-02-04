import { Section } from 'astro-boilerplate-components';

import betterStackLogo from '../../public/assets/images/better-stack-white.png';
import nextlessLogo from '../../public/assets/images/nextlessjs.png';
import sentryLogo from '../../public/assets/images/sentry-white.png';

const Sponsors = () => (
  <Section title="Achievement">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.instagram.com/fhikcc_" target="_blank">
              <img src={sentryLogo.src} alt="Sentry" width={260} height={224} />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
              <img
                src={betterStackLogo.src}
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextlessjs.com">
              <img
                src={nextlessLogo.src}
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
