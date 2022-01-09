import { useEffect, useState } from "react";

export function useManufacturers() {
  const [manufacturers, setManufacturers] = useState([]);
  const fetchManufacturers = async () => {
    const data = await fetch("https://the-vehicles-api.herokuapp.com/brands/");
    console.log(data);

    setManufacturers(await data.json());
  };
  useEffect(() => {
    fetchManufacturers();
  }, []);

  return manufacturers;
}
