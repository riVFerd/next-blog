import '@/styles/globals.css'
import {Provider} from "react-redux";
import React from "react";
import store from "@/store/store";
import Layout from "@/components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import Script from "next/script";

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
                <Script
                    async={true}
                    id="analytics1"
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                >
                </Script>
                <Script id="analytics2" strategy="lazyOnload" async={true}>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                    `}
                </Script>
            </Layout>
        </Provider>
    )
}
