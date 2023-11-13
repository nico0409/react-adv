import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductBottons = ({ className, style }: Props) => {
  // maxCount
  const { counter, increaseBy, maxcount } = useContext(ProductContext);

  //ismaxReach =usecallback [counter,maxcount]
  //true si el count === maxCount
  //false si el count !== maxCount

  const ismaxReach = useCallback(
    () => !!maxcount && counter === maxcount,
    [counter, maxcount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${ismaxReach() && styles.disable}`}
      >
        +
      </button>
    </div>
  );
};

export default ProductBottons;
