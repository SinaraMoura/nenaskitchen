import { categories } from "../../../public/items.json";
import Carousel from "react-elastic-carousel";
import styles from "../../styles/Elastic.module.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 4 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

export default function ElasticCarousel() {
  const { elastic } = categories;
  return (
    <div className={styles.container}>
      <div>
        <h1>Faça sua escolha de hoje !</h1>
      </div>

      <hr className={styles.seperator} />
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints}>
          {elastic.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.icon})` }}
            >
              <div className={styles.title}>
                <h3>{item.name} </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}