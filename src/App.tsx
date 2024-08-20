import React, { useEffect } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Path } from "@consts/path";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Layout } from "@components/Layout/Layout";
import { stores, StoresContext } from "@store";
import WebApp from "@twa-dev/sdk";
import { ShowProfiles } from "@pages/ShowProfiles/ShowProfiles";
import { BeginSettings } from "@pages/BeginSettings/BeginSettings";

const cacheEmotion = createCache({
  key: "club",
});

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <StoresContext.Provider value={stores}>
      <TonConnectUIProvider manifestUrl="https://exedis.github.io/clubApp/manifest.json">
        <CacheProvider value={cacheEmotion}>
          <Router basename="/clubApp/">
            <Switch>
              <Route
                path={Path.TO_HOME}
                index
                element={
                  <Layout>
                    <ShowProfiles />
                  </Layout>
                }
              />
              <Route
                path={Path.TO_BEGIN_SETTINGS}
                index
                element={
                  <Layout>
                    <BeginSettings />
                  </Layout>
                }
              />
            </Switch>
          </Router>
        </CacheProvider>
      </TonConnectUIProvider>
    </StoresContext.Provider>
  );
}

export default App;
