// https://www.reddit.com/r/midnightsuns/comments/1g1jj51/i_made_highquality_upscaled_versions_of_the_tarot/
import SunImage from './images/sun.webp';
import DevilImage from './images/devil.webp';
import JudgementImage from './images/judgement.webp';
import DeathImage from './images/death.webp';
import ElMonImage from './images/el-mon.png';
import MortIVidaImage from './images/mort-i-vida.png';
import ElSacerdotImage from './images/el-sacerdot.png';

export default function getRandomMessage(): {
  text?: string;
  image?: string;
  maxImageWidth?: string;
} {
  const messages = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        Donec dapibus ipsum sit amet pellentesque hendrerit.`,
      image: ElMonImage,
    },
    {
      text: `Vestibulum posuere eros quis nisi convallis aliquam.

        Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
      image: MortIVidaImage,
      maxImageWidth: '65%',
    },
    {
      text: `Vestibulum posuere eros quis nisi convallis aliquam.

          Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
      image: ElSacerdotImage,
    },
    // {
    //   text: `Mauris facilisis viverra eleifend. Ut luctus imperdiet nisi, non vehicula tellus lacinia sit amet.

    //     Curabitur lorem ligula, eleifend vel dictum et, rhoncus non nisi. Etiam efficitur erat lacus, non mollis metus sagittis ac.

    //     Phasellus turpis lacus, congue non lectus vel, tempus feugiat tellus.

    //     Aenean suscipit nunc non fringilla porttitor.`,
    //   image: JudgementImage,
    // },
    // {
    //   text: `Nam sit amet nulla eget dui sollicitudin molestie quis a nibh.

    //     Aenean nisl risus, vulputate in tristique id, tristique eu arcu.

    //     Donec et sollicitudin lectus. Phasellus dictum ante a dui aliquet condimentum.

    //     Sed fringilla, ligula ut ornare aliquam, est enim molestie turpis, vitae porttitor eros erat nec risus.`,
    //   image: DeathImage,
    // },
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
