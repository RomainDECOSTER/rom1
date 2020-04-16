import permit from "../middleware/permission";

export = (app) => {
  app.get("/admin/test", permit(["team", "admin"]), (req, res) => res.json({ status: "ok" }));
};
