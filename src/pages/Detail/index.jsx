import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { callApi } from "../../domain/api";
import classes from "./style.module.scss";

const Detail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const response = await callApi(`/name/${name}`, "GET");

      const modifiedData = {
        flags: response[0]?.flags?.svg,
        name: response[0]?.name?.common,
        nativeName: Object.values(response[0].name?.nativeName),
        population: response[0]?.population,
        region: response[0]?.region,
        subRegion: response[0]?.subregion,
        capital: response[0]?.capital[0],
        tld: response[0].tld[0],
        currency: Object.values(response[0]?.currencies)[0],
        language: Object.values(response[0]?.languages)[0],
        borders: response[0]?.borders,
      };

      setCountry(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className={classes["main-container"]}>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Box className={classes["detail-container"]}>
        <Box className={classes["image-wrapper"]}>
          <img src={country.flags} alt="" />
        </Box>
        <Box className={classes["main-detail"]}>
          <Typography variant="h4">{country.name}</Typography>
          <Box className={classes["detail-wrapper"]}>
            <Box className={classes.detail}>
              <Box className={classes["detail-one"]}>
                <Box>
                  <Typography>Native Name :</Typography>
                  {country.nativeName?.map((x, idx) => {
                    return (
                      <div key={idx}>
                        <Typography>{x.official}</Typography>
                      </div>
                    );
                  })}
                </Box>
                <Typography>Population : {country.population}</Typography>
                <Typography>Region : {country.region}</Typography>
                <Typography>Sub Region : {country.subRegion}</Typography>
                <Typography>Capital : {country.capital}</Typography>
              </Box>
              <Box className={classes["detail-two"]}>
                <Typography>Top Level Domain: {country.tld}</Typography>
                <Typography>Currencies: {country.currency?.name}</Typography>
                <Typography>Languages: {country.language}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>Border Countries:</Typography>
              <Box>
                {country.borders?.map((item, idx) => (
                  <Button key={idx} disabled>
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
