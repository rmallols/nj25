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
      text: `Encarna la innocència, l'espontaneïtat i la llibertat. Pots fer el que t’isca dels collons o del potorro.`,
      image: ElBoigImage,
    },
    {
      text: `Simbolitza el materialisme, la luxúria, la degradació i els excesos, per tant, si en Falles no folles, per Pasqua no falles.`,
      image: ElDimoniImage,
    },
    {
      text: `Representa el control autoritari mitjançant la intel·ligència, per tant, no tractes d'imitar ni a Trump, ni a Musk, ni a Putin.`,
      image: ElEmperadorImage,
    },
    {
      text: `Significa la introspecció, la meditació en solitari per a asimilar allò aprés. Has de trobar el control remot perdut. Aïllat per a pensar fins que el wi-fi no puga localitzar-te. `,
      image: ElErmitaImage,
    },
    {
      text: `Significa imaginació, originalitat, compromís i grans habilitats, per tant, t’has de fer fallera o faller de Na Jordana.`,
      image: ElMagImage,
    },
    {
      text: `Marca la finalització o l’ocàs d’un cicle, com la trajectòria del ‘pedorro’ que s’amagà en el Ventorro.`,
      image: ElMonImage,
    },
    {
      text: `Prediu la conformitat amb les normes establertes a través de  rituals tradicionals que frenen  la creativitat i la innovació, per tant, fes-te faller o fallera de qualsevol falla rància, però mai de Na Jordana. `,
      image: ElSacerdotImage,
    },
    {
      text: `Reflectix felicitat, satisfacció, vitalitat i èxit. No oblides posar-te ulleres i Nivea perquè vas a brillar molt.`,
      image: ElSolImage,
    },
    {
      text: `Ho diu el Tarot i ho deia Estellés: “No hi havia a València dos amants com vosaltres …” Entés?`,
      image: ElsAmantsImage,
    },
    {
      text: `Representa l’energia femenina  quant a la capacitat de gestar i donar vida, per tant: “Tú que eres tan guapa y tan lista. Tú  te mereces un príncipe, un dentista…”.`,
      image: LaEmperadriuImage,
    },
    {
      text: `Fa referència a coses i situacions que poden acabar de sobte i sense un previ avís. No és mala carta si penses en la hipoteca.`,
      image: LaForcaImage,
    },
    {
      text: `Representa el dolor que ocultes o que t’oculten, malgrat que sigues brillant.  Posa’t ponxo, beu tequila, plora  i canta com fa Chavela:  “Pues desde que te fuiste no he tenido luz de luna…”`,
      image: LaLLunaImage,
    },
    {
      text: `Té  nom aterrador, però  no és mala carta. A quin sant! Indica canvi i transformació, per tant,  apaga el mòbil, carrega’l i reibicia’l. Potser obtingues més memòria RAM.`,
      image: LaMortImage,
    },
    {
      text: `Marca la destrucció que altera l’equilibri i l’estabilitat. És com una DANA que et posa a prova per traure força davant  la incompetència política per poder avançar cap al futur. `,
      image: LaTorreImage,
    },
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
