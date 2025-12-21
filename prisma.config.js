import { defineConfig } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  datasources: {
    db: {
      url: "file:./dev.db",
    },
  },
});


