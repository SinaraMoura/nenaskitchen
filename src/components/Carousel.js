import listCategories from "../../public/items.json";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Elastic.module.css";
import { useRouter } from "next/navigation";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 4 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 3 }
];

export default function ElasticCarousel() {
  const categories = listCategories.categories;
  const router = useRouter();

  const filterCategory = (category) => {
    router.push(`/filter?category=${category}`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints}>
          {categories.elastic.map((item) => (
            <div
              onClick={() => filterCategory(item.name)}
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