import UserRoutes from "./UserRoutes";
import StudentRoutes from "./StudentRoutes";
import VolunteerRoutes from "./VolunteerRoutes";
import WorkshopRoutes from "./WorkshopRoutes";
import CampaignRoutes from "./CampaignRoutes";
export = (app) => {
  require("./authentication")(app);

  app.use("/api", new UserRoutes().routes);
  app.use("/api", new StudentRoutes().routes);
  app.use("/api", new VolunteerRoutes().routes);
  app.use("/api", new WorkshopRoutes().routes);
  app.use("/api", new CampaignRoutes().routes);

  require("./test")(app);

  app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the TODO API. Check the documentation for the list of available endpoints" }));

  // If no route is matched by now, it must be a 404
  app.use((req, res, next) => {
    res.status(404).json({ error: "Endpoint not found" });
    next();
  });

  app.use((error, req, res, next) => {
    if (process.env.NODE_ENV === "production") {
      return res.status(500).json({ error: "Unexpected error: " + error });
    }
    next(error);
  });
};
