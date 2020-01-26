import * as React from "react"

import { MediaContextProvider } from "./src/Media"

export const wrapRootElement = ({ element }) => (
  <MediaContextProvider>{element}</MediaContextProvider>
)
