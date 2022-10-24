import Head from "next/head";

export default function Meta({title, keywords, description}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" sizes="32x32" href="/favi.svg" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "",
  keywords: "",
  description: "",
};
