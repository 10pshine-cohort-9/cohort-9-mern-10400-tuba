import app from "./app.js";
import sequelize from "./config/database.js";
import "./models/Index.js";

const envPort = process.env.PORT;

const PORT =
  envPort === undefined
    ? 5000
    : Number.isInteger(Number(envPort)) &&
        Number(envPort) > 0 &&
        Number(envPort) <= 65535
      ? Number(envPort)
      : null;

if (PORT === null) {
  throw new Error("Invalid PORT value.");
}

const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log("✅ MySQL Database Connected Successfully");

    await sequelize.sync({ alter: true });

    console.log("✅ Database synchronized successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);
  }
};

startServer();
