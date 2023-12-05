let currentUser = null;
function UserRoutes(app) {
    const updateUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        currentUser = await dao.findUserById(userId);
        res.json(status);
      };
        
  const signin = async (req, res) => {  };
  const account = async (req, res) => {
    res.json(currentUser);
  };
  app.post("/api/users/signin", signin);
  app.post("/api/users/account", account);
  app.put("/api/users/:userId", updateUser);
}
export default UserRoutes;