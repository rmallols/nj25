// https://www.reddit.com/r/midnightsuns/comments/1g1jj51/i_made_highquality_upscaled_versions_of_the_tarot/
import ElBoigImage from './images/el-boig.png';
import ElDimoniImage from './images/el-dimoni.png';
import ElEmperadorImage from './images/el-emperador.png';
import ElErmitaImage from './images/el-ermita.png';
import ElMagImage from './images/el-mag.png';
import ElMonImage from './images/el-mon.png';
import ElSacerdotImage from './images/el-sacerdot.png';
import ElSolImage from './images/el-sol.png';
import ElsAmantsImage from './images/els-amants.png';
import LaEmperadriuImage from './images/la-emperadriu.png';
import LaForcaImage from './images/la-forca.png';
import LaLLunaImage from './images/la-lluna.png';
import LaMortImage from './images/la-mort.png';
import LaTorreImage from './images/la-torre.png';

export type Message = {
  text?: string;
  image?: string;
  maxImageWidth?: string;
};

export default function getRandomMessage(): Message {
  const messages = [
    {
      text: `el-boig`,
      image: ElBoigImage,
    },
    {
      text: `el-dimoni`,
      image: ElDimoniImage,
    },
    {
      text: `el-emperador`,
      image: ElEmperadorImage,
    },
    {
      text: `el-ermita`,
      image: ElErmitaImage,
    },
    {
      text: `el-mag`,
      image: ElMagImage,
    },
    {
      text: `L’arcà núm. 21 del Tarot és  una carta de finalització d’un cicle i
        ací es concreta en una morgue de cadàvers de tot l’espectre polític. Hi falta, però el ‘pedorro’ que s’amagà en el Ventorro. `,
      image: ElMonImage,
    },
    {
      text: `L’arcà núm. 5 del Tarot  marca la conformitat amb les normes establertes
      a través d’ estructures i rituals tradicionals que en l’àmbit faller frenen  la creativitat i la innovació.`,
      image: ElSacerdotImage,
    },
    {
      text: `el-sol`,
      image: ElSolImage,
    },
    {
      text: `els-amants`,
      image: ElsAmantsImage,
    },
    {
      text: `la-emperadriu`,
      image: LaEmperadriuImage,
    },
    {
      text: `la-forca`,
      image: LaForcaImage,
    },
    {
      text: `la-lluna`,
      image: LaLLunaImage,
    },
    {
      text: `L’arcà núm. 13 del Tarot té un nom aterrador, però  no és mala carta. Indica canvi i transformació
  
        Com quan se t’apaga el mòbil, el carregues i el reinicies amb més memòria RAM.`,
      image: LaMortImage,
    },
    {
      text: `la-torre`,
      image: LaTorreImage,
    },
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
