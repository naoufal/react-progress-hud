const styles = {
  container: {
    position: "fixed",
    left: 0,
    top: 0,
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
    left: "calc(50% - 50px)",
    top: "calc(50% - 50px)",
    display: "block",
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: "#fff",
    zIndex: 2147483648
  },
  spinner: {
    position: "absolute",
    left: "calc(50% - 25px)",
    top: "calc(50% - 25px)",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#000"
  },
  inner_spinner: {
    position: "absolute",
    left: 4,
    top: 4,
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: "#fff"
  },
  curve: {
    position: "absolute",
    left: 23,
    top: 0,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#000"
  }
};

export default styles;
