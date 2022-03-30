import Head from "next/head";

export default function Home({ip}) {

  console.error(ip)
  return (
    <div>
      <Head>
        <title>Images</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://img.mobigama.net/app/6938-yandex/1_yandex.png"
        />
      </Head>

      <main style={{ position: "relative", height: "100vh" }}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            style={{ width: "100px" }}
            src="https://invest-brands.cdn-tinkoff.ru/NL0009805522x640.png"
            alt="логотип"
          />
          <p style={{ fontSize: "32px", marginLeft: '20px' }}>Что-то пошло не так ...</p>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;

  console.error(ip);

  return {
    props: {ip},
  };
}
