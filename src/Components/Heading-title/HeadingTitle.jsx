function HeadingTitle({ title }) {
    return (
      <div style={divStyles}>
        <h2 style={h2Style}>{title}</h2>
      </div>
    );
  }
  
  const divStyles = {
    padding: "10px 30px",
    backgroundColor: "#fff",
  };
  
  const h2Style = {
    color: "#6f475f",
    fontSize: "30px",  
    fontWeight: "700",
    borderBottom: "2px solid #6f475f",
    width: "max-content",
    paddingBottom: "5px",
  };
  
  export default HeadingTitle;
  