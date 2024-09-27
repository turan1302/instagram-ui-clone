import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    padding: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bio: {
    marginTop: 5,
    color: "gray",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "gray",
  },
  featuredContainer: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postContainer: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  postDescription: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default styles;
