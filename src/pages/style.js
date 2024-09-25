const style = (theme) => ({
  mainHeadGrid: {
    "&.MuiGrid-root": {
      background: "white",
      borderBottom: "1px solid #5855551f",
      padding: "10px",
    },
  },
  displaFlexCenter: {
    "&.MuiGrid-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  pageHead:{
    "&.MuiGrid-root": {
      background: "white",
      borderBottom:'1px solid #5855551f',
      justifyContent: "space-between",
      alignItems: "center",
      padding:'5px 20px 5px 20px'
    }
  }
});
export default style;
