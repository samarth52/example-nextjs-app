// app/hello-world/layout.jsx
export default function RootLayout({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>My Navbar</h1>
      <nav>
        <a href="/">Home</a> | <a href="/hello-world">Hello World</a>
      </nav>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
