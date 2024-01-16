import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";
import MediaCard from "../../components/Card";
import Search from "../../components/Search";
import Dropdown from "../../components/Dropdown";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [listRegion, setListRegion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const response = await callApi("/all", "GET");

      const modifiedData = response?.slice(0, 20)?.map((item) => {
        return {
          flags: item.flags?.svg,
          name: item.name?.common,
          population: item.population,
          region: item.region,
          capital: item.capital[0],
        };
      });
      const listReg = response?.slice(0, 20)?.map((item) => {
        return item?.region;
      });
      const uniqueReg = Array?.from(new Set(listReg));

      setListRegion(uniqueReg);
      setCountries(modifiedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchRegion = async () => {
    try {
      const response = await callApi(`/region/${region.toLowerCase()}`, "GET");
      const modifiedData = response?.slice(0, 20)?.map((item) => {
        return {
          flags: item.flags?.svg,
          name: item.name?.common,
          population: item.population,
          region: item.region,
          capital: item.capital[0],
        };
      });
      setCountries(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchCountry = async () => {
    try {
      const response = await callApi(`/name/${search}`, "GET");
      const modifiedData = response?.slice(0, 20)?.map((item) => {
        return {
          flags: item.flags?.svg,
          name: item.name?.common,
          population: item.population,
          region: item.region,
          capital: item.capital[0],
        };
      });

      setCountries(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return;
  }

  return (
    <Container>
      <Box className={classes["head-search"]}>
        <Search
          setter={setSearch}
          onClick={handleSearchCountry}
          placeholder="Search Country"
        />
        <Dropdown
          onChange={handleSearchRegion}
          setter={setRegion}
          placeholder="Region"
          value={region}
          list={listRegion}
        />
      </Box>
      <Box className={classes["card-container"]}>
        {countries?.map((country, idx) => (
          <MediaCard
            key={idx}
            src={country?.flags}
            name={country?.name}
            population={country?.population}
            region={country?.region}
            capital={country?.capital}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
