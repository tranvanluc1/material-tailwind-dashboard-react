import { Helmet, HelmetProvider } from "react-helmet-async";

export function RedirectLink() {

  return (
    <div>
      <HelmetProvider>
      <Helmet>
            <meta charSet="utf-8" />
            <meta name="title" content="ban hang online"></meta>
            <meta name="description" content="Free Web tutorials"></meta>
            <link rel="media" href="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png" />
      </Helmet>
      </HelmetProvider>
    1
    </div>
    
  );
}

export default RedirectLink