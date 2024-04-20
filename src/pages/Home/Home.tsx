import React from "react";
import styles from "./Home.module.scss";
import stage from "../../assets/stage.jpg"
import stage2 from "../../assets/stage2.jpg"

interface Props {
}

const Home = ({ }: Props) => {
  return <div className={styles.Home}>
    <p className="text-center pb-4">
      <strong>Celtic Spirit, a dynamic four-piece ensemble hailing from Brisbane, captivates audiences with their unique blend of traditional and contemporary Celtic-inspired songs, lively tunes, and compelling original compositions.</strong>
    </p>
    <p>At the heart of their sound are the lush, ethereal vocal harmonies of Susanna O'Leary (also known by her stage name, Zannah) and Wendy Lang, whose voices together create a mystical, otherworldly experience. Susanna, a virtuoso on the piano, brings cinematic depth to the group's arrangements, while Wendy's mastery of the tin whistles and clarinet injects a poignant, evocative quality to their music.</p>
    <p>
      <img src={stage} className={styles.RightImage} alt="Celtic Spirit on stage" />
      Adding to the ensemble's rich tapestry of sounds are cellist Emma Hales and guitarist/percussionist Camaron De La Vega. Emma's cello weaves a deep, resonant undercurrent that enriches the band's sonic landscape, while Camaron's versatile guitar and percussion work introduce rhythmic textures and contemporary flair, drawing from his extensive background in multicultural music styles.</p>
    <p>Together, this quartet not only embodies the spirited essence of Celtic music, from the hauntingly beautiful airs that seem to whisper tales of yore to the vibrant jigs that compel any listener to their feet, but also brings a fresh, innovative twist to the genre. Their performances are a journey through time and emotion, bridging the gap between the ancient and the modern, the traditional and the avant-garde.</p>
    <p>
      <img src={stage2} className={styles.LeftImage} alt="Celtic Spirit on stage" />
      Celtic Spirit is quickly making their mark on the music scene, with anticipation building for their upcoming highlight performance at the prestigious Lord Mayor’s City Hall Concert in April. This event promises to be a showcase of their remarkable talent and a celebration of Celtic music's enduring appeal. Whether you're a long-time fan of Celtic tunes or exploring this rich musical tradition for the first time, Celtic Spirit offers an unforgettable experience that resonates with the soul and lifts the spirits.</p>
    <div className="clear-both"></div>
  </div>;
};

export default (props: Props) => {
  return <Home {...props} />
};
