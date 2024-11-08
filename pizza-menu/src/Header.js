function Header() {
  const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  return (
    <div>
      <header className="header" style={style}>
        <h1>Pizza Protagonist</h1>
      </header>
    </div>
  );
}

export default Header;
