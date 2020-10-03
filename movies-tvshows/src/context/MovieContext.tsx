import * as React from "react";

export interface MovieContextInterface {
  movies: Array<{image:string; name: string; video: string;}>;
}

const ctxt = React.createContext<MovieContextInterface | null>(null);

export const MovieContextProvider = ctxt.Provider;

export const MovieContextConsumer = ctxt.Consumer;