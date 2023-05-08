import '@/styles/globals.css'
import {Provider} from "react-redux";
import React from "react";
import store from "@/store/store";
import Layout from "@/components/Layout";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
});

export default function App({Component, pageProps}) {

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
