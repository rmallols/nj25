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
  title?: { [key: string]: string };
  text?: { [key: string]: string };
  image?: string;
  maxImageWidth?: string;
};

export default function getRandomMessage(): Message {
  const messages = [
    {
      title: {
        '/': 'El Boig',
        '/es': 'El Loco',
        '/en': 'The Crazy',
      },
      text: {
        '/': "Encarna la innocència, l'espontaneïtat i la llibertat. Pots fer el que t'isca dels collons o del potorro.",
        '/es':
          'Encarna la inocencia, la espontaneidad y la libertad. Puedes hacer lo que te salga de los cojones o del potorro.',
        '/en':
          'It embodies innocence, spontaneity and freedom. You can do whatever comes out of your ass with it.',
      },
      image: ElBoigImage,
    },
    {
      title: {
        '/': 'El Dimoni',
        '/es': 'El Demonio',
        '/en': 'The Devil',
      },
      text: {
        '/': 'Simbolitza el materialisme, la luxúria, la degradació i els excesos, per tant, si en Falles no folles, per Pasqua no falles.',
        '/es':
          'Simboliza el materialismo, la lujuria, la degradación y los excesos, por tanto, si en Fallas no follas, por Pascua no fallas.',
        '/en':
          "It symbolizes materialism, lust, degradation and excesses, therefore, we don't know the question, but sex is definitely the answer.",
      },
      image: ElDimoniImage,
    },
    {
      title: {
        '/': "L'Emperador",
        '/es': 'El Emperador',
        '/en': 'The Emperor',
      },
      text: {
        '/': "Representa el control autoritari mitjançant la intel·ligència, per tant, no tractes d'imitar ni a Trump, ni a Musk, ni a Putin.",
        '/es':
          'Representa el control autoritario mediante la inteligencia, por tanto, no tratas de imitar ni a Trump, ni a Musk, ni a Putin.',
        '/en':
          "It represents authoritarian control through intelligence, so don't try to imitate Trump, Musk, or Putin.",
      },
      image: ElEmperadorImage,
    },
    {
      title: {
        '/': "L'Ermità",
        '/es': 'El Ermitano',
        '/en': 'The Hermit',
      },
      text: {
        '/': 'Significa la introspecció, la meditació en solitari per a asimilar allò aprés. Has de trobar el control remot perdut. Aïllat per a pensar fins que el wi-fi no puga localitzar-te.',
        '/es':
          'Significa la introspección, la meditación en solitario para asimilar lo aprendido. Tienes que encontrar el control remoto perdido. Aislado para pensar hasta que el wi-fi no pueda localizarte.',
        '/en':
          'It means introspection, solitary meditation to assimilate what you have learned. You have to find the lost remote control. Isolated to think until the wi-fi can locate you.',
      },
      image: ElErmitaImage,
    },
    {
      title: {
        '/': 'El Mag',
        '/es': 'El Mago',
        '/en': 'The Magician',
      },
      text: {
        '/': 'Significa imaginació, originalitat, compromís i grans habilitats, per tant, t’has de fer fallera o faller de Na Jordana.',
        '/es':
          'Significa imaginación, originalidad, compromiso y grandes habilidades, por tanto, tienes que hacerte fallera o fallero de Na Jordana.',
        '/en':
          'It means imagination, originality, commitment and great skills, therefore, you have to become a fallera or faller of Na Jordana.',
      },
      image: ElMagImage,
    },
    {
      title: {
        '/': 'El Mon',
        '/es': 'El Mundo',
        '/en': 'The World',
      },
      text: {
        '/': 'Marca la finalització o l’ocàs d’un cicle, com la trajectòria del ‘pedorro’ que s’amagà en el Ventorro.',
        '/es':
          'Marca la finalización o el ocaso de un ciclo, como la trayectoria del pedorro que se escondió en el Ventorro.',
        '/en':
          "It marks the end or decline of a cycle, like the trajectory of the 'pedorro' (farter) that hid in the infamous restaurant 'El Ventorro'.",
      },
      image: ElMonImage,
    },
    {
      title: {
        '/': 'El Sacerdot',
        '/es': 'El Sacerdote',
        '/en': 'The Priest',
      },
      text: {
        '/': 'Prediu la conformitat amb les normes establertes a través de  rituals tradicionals que frenen  la creativitat i la innovació, per tant, fes-te faller o fallera de qualsevol falla rància, però mai de Na Jordana.',
        '/es':
          'Predice la conformidad con las normas establecidas a través de rituales tradicionales que frenan la creatividad y la innovación, por tanto, hazte fallero o fallera de cualquier falla rancia, pero nunca de Na Jordana.',
        '/en':
          'It predicts conformity to established norms through traditional rituals that inhibit creativity and innovation, therefore, become a faller or fallera of any stale falla, but never of Na Jordana.',
      },
      image: ElSacerdotImage,
    },
    {
      title: {
        '/': 'El Sol',
        '/es': 'El Sol',
        '/en': 'The Sun',
      },
      text: {
        '/': 'Reflectix felicitat, satisfacció, vitalitat i èxit. No oblides posar-te ulleres i Nivea perquè vas a brillar molt.',
        '/es':
          'Refleja felicidad, satisfacción, vitalidad y éxito. No olvides ponerte gafas y Nivea porque vas a brillar mucho.',
        '/en':
          "It reflects happiness, satisfaction, vitality and success. Don't forget to put on your glasses and Nivea cream because you're going to shine brightly.",
      },
      image: ElSolImage,
    },
    {
      title: {
        '/': 'Els Amants',
        '/es': 'Los Amantes',
        '/en': 'The Lovers',
      },
      text: {
        '/': 'Ho diu el Tarot i ho deia Estellés: “No hi havia a València dos amants com vosaltres …” Entés?',
        '/es':
          'Lo dice el Tarot y lo decía Estellés: “No había en Valencia dos amantes como vosotros…” ¿Entiendes?',
        '/en':
          'The Tarot says it and Estellés said it: “There were no two lovers like you in Valencia …” Do you understand?',
      },
      image: ElsAmantsImage,
    },
    {
      title: {
        '/': "L'Emperadriu",
        '/es': 'La Emperadora',
        '/en': 'The Empress',
      },
      text: {
        '/': 'Representa l’energia femenina  quant a la capacitat de gestar i donar vida, per tant: “Tú que eres tan guapa y tan lista. Tú  te mereces un príncipe, un dentista…”.',
        '/es':
          'Representa la energía femenina en cuanto a la capacidad de gestar y dar vida, por tanto: “Tú que eras tan guapa y tan lista. Tú te mereces un príncipe, un dentista…”.',
        '/en':
          'It represents feminine energy in terms of the ability to conceive and give life, therefore: “You who are so beautiful and so smart. You deserve a prince, a dentist…”.',
      },
      image: LaEmperadriuImage,
    },
    {
      title: {
        '/': 'La Força',
        '/es': 'La Fuerza',
        '/en': 'The Strength',
      },
      text: {
        '/': 'Fa referència a coses i situacions que poden acabar de sobte i sense un previ avís. No és mala carta si penses en la hipoteca.',
        '/es':
          'Hace referencia a cosas y situaciones que pueden acabar de repente y sin un previo aviso. No es mala carta si piensas en la hipoteca.',
        '/en':
          "It refers to things and situations that can end suddenly and without warning. It's not a bad card if you think about the mortgage.",
      },
      image: LaForcaImage,
    },
    {
      title: {
        '/': 'La Lluna',
        '/es': 'La Luna',
        '/en': 'The Moon',
      },
      text: {
        '/': 'Representa el dolor que ocultes o que t’oculten, malgrat que sigues brillant.  Posa’t ponxo, beu tequila, plora  i canta com fa Chavela:  “Pues desde que te fuiste no he tenido luz de luna…”',
        '/es':
          'Representa el dolor que ocultas o que te ocultan, aunque seas brillante. Ponte poncho, bebe tequila, llora y canta como hace Chavela: “Pues desde que te fuiste no he tenido luz de luna…”',
        '/en':
          'It represents the pain you hide or are hidden from you, despite the fact that you are brilliant. Put on a poncho, drink tequila, cry and sing like Chavela does: "So since you left I haven\'t had any moonlight..."',
      },
      image: LaLLunaImage,
    },
    {
      title: {
        '/': 'La Mort',
        '/es': 'La Muerte',
        '/en': 'The Death',
      },
      text: {
        '/': 'Té  nom aterrador, però  no és mala carta. A quin sant! Indica canvi i transformació, per tant,  apaga el mòbil, carrega’l i reibicia’l. Potser obtingues més memòria RAM.',
        '/es':
          'Tiene nombre aterrador, pero no es mala carta. ¡A qué santo! Indica cambio y transformación, por tanto, apaga el móvil, cárgalo y reibícialo. Quizás obtengas más memoria RAM.',
        '/en':
          "It sounds scary, but it's not a bad card. Who the hell! Indicates change and transformation, therefore, turn off the mobile, carry it and reset it. You will get more RAM memory.",
      },
      image: LaMortImage,
    },
    {
      title: {
        '/': 'La Torre',
        '/es': 'La Torre',
        '/en': 'The Tower',
      },
      text: {
        '/': 'Marca la destrucció que altera l’equilibri i l’estabilitat. És com una DANA que et posa a prova per traure força davant  la incompetència política per poder avançar cap al futur.',
        '/es':
          'Marca la destrucción que altera el equilibrio y el establecimiento. És com una DANA que et posa a prova per traure força davant la incompetencia política per poder avançar cap al futur.',
        '/en':
          "It marks the destruction that alters the balance and stability. It's like a DANA that poses a challenge to force political incompetence to be able to advance towards the future.",
      },
      image: LaTorreImage,
    },
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
