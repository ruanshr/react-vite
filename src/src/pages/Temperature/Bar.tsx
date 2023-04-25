import { useEffect, useState } from "react";
interface IItem {
  id: string;
  name: string;
  price: number;
}
interface IBarProps {
  celsius: string;
}
export function Bar(props: IBarProps) {
  const [error, setError] = useState<ErrorEvent | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any>([]);
  console.log("Bar render function ");
  useEffect(() => {
    console.log("Bar useEffect function ");
    fetch("./images/4.4.png").then(
      (rseult) => {
        setIsLoaded(true);
        const list: IItem[] = [{ id: "1", name: "张三", price: 23 }];
        setItems(list);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, [props.celsius]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading ...</div>;
  } else {
    return (
      <ul>
        {items.map((item: IItem) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
