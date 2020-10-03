import * as React from "react";

export interface ShowsContextInterface {
  shows: Array<{image:string; name: string; video: string;}>;
}

const ctxt = React.createContext<ShowsContextInterface | null>(null);

export const ShowsContextProvider = ctxt.Provider;

export const ShowsContextConsumer = ctxt.Consumer;