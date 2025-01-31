// https://www.reddit.com/r/midnightsuns/comments/1g1jj51/i_made_highquality_upscaled_versions_of_the_tarot/
import SunImage from './images/sun.webp';
import DevilImage from './images/devil.webp';
import JudgementImage from './images/judgement.webp';
import DeathImage from './images/death.webp';

export default function getRandomMessage(): { text?: string; image?: string } {
  const messages = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        
        Donec dapibus ipsum sit amet pellentesque hendrerit.
        
        Phasellus eget sapien ut libero egestas efficitur a eget lectus.
        
        Aliquam vel elit nec orci dictum tempus.
        
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
      image: SunImage,
    },
    {
      text: `Vestibulum posuere eros quis nisi convallis aliquam.

        Interdum et malesuada fames ac ante ipsum primis in faucibus.
    
        Vestibulum ultricies massa tortor, ut consequat libero elementum id.
    
        Morbi a consequat lectus. Praesent suscipit non sapien sed tempus. Cras nec laoreet justo.`,
      image: DevilImage,
    },
    {
      text: `Vestibulum posuere eros quis nisi convallis aliquam.
  
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
      
          Vestibulum ultricies massa tortor, ut consequat libero elementum id.
      
          Morbi a consequat lectus. Praesent suscipit non sapien sed tempus. Cras nec laoreet justo.`,
      image: DevilImage,
    },
    {
      text: `Mauris facilisis viverra eleifend. Ut luctus imperdiet nisi, non vehicula tellus lacinia sit amet.

        Curabitur lorem ligula, eleifend vel dictum et, rhoncus non nisi. Etiam efficitur erat lacus, non mollis metus sagittis ac.
    
        Phasellus turpis lacus, congue non lectus vel, tempus feugiat tellus.
    
        Aenean suscipit nunc non fringilla porttitor.`,
      image: JudgementImage,
    },
    {
      text: `Nam sit amet nulla eget dui sollicitudin molestie quis a nibh.

        Aenean nisl risus, vulputate in tristique id, tristique eu arcu.
    
        Donec et sollicitudin lectus. Phasellus dictum ante a dui aliquet condimentum.
    
        Sed fringilla, ligula ut ornare aliquam, est enim molestie turpis, vitae porttitor eros erat nec risus.`,
      image: DeathImage,
    },
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
