import * as React from "react"

import { MediaContextProvider } from "./src/Media"

export const wrapRootElement = ({ element }) => (
  <MediaContextProvider>{element}</MediaContextProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <MediaContextProvider {...props}>{element}</MediaContextProvider>
)
