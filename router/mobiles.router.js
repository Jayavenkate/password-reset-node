import express from "express"; // "type": "module"
import { getMobiles, createMobiles } from "../service/mobiles.service.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
router.get("/mobiles",auth, async function (request, response) {
  // db.mobiles.insertMany(data)
  const mobiles = await getMobiles();
  response.send(mobiles);
});

router.post("/mobiles", async function (request, response) {
  // db.mobiles.insertMany(data)
  const data = request.body;
  const result = await createMobiles(data);
  response.send(result);
});
export default router;
