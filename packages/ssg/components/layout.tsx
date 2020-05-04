export function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 15,
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: "960px",
          }}
        >
          <main style={{ minHeight: "50vh" }}>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header style={{ height: 30, width: "100%", background: "#333" }}>
      <div
        style={{
          width: 180,
          paddingLeft: 10,
          paddingTop: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          ⚡ mizchi.dev
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <>
      <hr />

      <footer style={{ paddingBottom: 20, paddingLeft: 10 }}>
        <p>
          created by <a href="https://github.com/mizchi/mdxx">mdxx-ssg</a>
        </p>
        <p>This site uses Google Analytics.</p>
      </footer>
    </>
  );
}
