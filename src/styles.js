const styles = {
  overlay: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2147483647
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: "#fff"
  },
  spinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#000"
  }
};

export default styles;
