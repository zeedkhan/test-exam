import React, { useEffect, useState } from "react";
import { getPokemon, getAllPokemon } from "./services/pokemon";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
  },
  gridSkeleton: {
    marginBottom: 15,
  },
  typography: {
    backgroundColor: "#001f3f",
    width: 250,
    fontSize: 20,
    height: 40,
    color: "white",
    textAlign: "center",
  },
  typographyHeader: {
    padding: "2rem",
    textAlign: "center",
  },
  paper: {
    height: 250,
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  skeletonImage: {
    height: 250,
    width: 250,
  },
  container: {
    backgroundColor: "rgb(207,216,220)",
  },
  image: {
    height: 140,
    width: 140,
  },
}));

function Pokemon() {
  const spacing = 6;
  const classes = useStyles();
  // Create state to store pokemon data
  const [pokemonData, setPokemonData] = useState([]);
  // Get pokemo id 0 to id 104
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=104";
  // Create loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPokemon(BASE_URL);
      await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    const pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon);
        setLoading(false);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemonData);
  };

  return (
    <Container className={classes.container} maxWidth="1280">
      <Typography className={classes.typographyHeader} variant="h5">
        Test Fetch API
      </Typography>

      <Grid
        xs={12}
        item
        className={classes.root}
        spacing={spacing}
        justify={"space-between"}
      >
        <Grid item>
          <Grid container className={classes.grid} spacing={spacing}>
            {loading ? (
              Array.from(new Array(104)).map((x) => (
                <Grid key={x} className={classes.gridSkeleton} item>
                  <Skeleton variant="rect" className={classes.skeletonImage} />
                  <Skeleton variant="text" className={classes.typography} />
                </Grid>
              ))
            ) : (
              <>
                {pokemonData.map((pokemon) => (
                  <Grid key={pokemon.id} item className={classes.gridData}>
                    <Paper className={classes.paper}>
                      <img
                        className={classes.image}
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                      />
                      <Typography className={classes.typography}>
                        {pokemon.name}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pokemon;
