const NotFound = () => {
    return (
        <section style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            gap: "2rem"
        }}>
            <h1 style={{ fontSize: "3rem" }}>Oops, this Page Does Not Exist</h1>
            <a className="challenge-tab" href="/">Home Page</a>
        </section>
    )
}

export default NotFound