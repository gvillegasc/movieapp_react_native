import { useEffect, useState } from "react";
import { Cast, CreditsReponse } from "../domain/interfaces/creditInterface";
import { MovieFull } from "../domain/interfaces/movieInterface";
import movieDB from "../infrastructure/services/movieDB";

interface MovieDetail {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsReponse>(`/${movieId}/credits`);

    const [movieDetailResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { ...state };
};
