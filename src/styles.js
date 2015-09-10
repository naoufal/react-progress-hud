const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    filter: "alpha(opacity = 50)",
    zIndex: 2147483647
  },
  content: {
    position: "absolute",
    display: "block",
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: "#fff",
    top: "calc(50% - 50px)",
    left: "calc(50% - 50px)",
    zIndex: 2147483648
  },
  spinner: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#000",
    top: "calc(50% - 25px)",
    left: "calc(50% - 25px)"
  },
  inner_spinner: {
    position: "absolute",
    left: 4,
    top: 4,
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: "#fff"
  }
};

export default styles;
