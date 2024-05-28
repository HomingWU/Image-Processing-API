import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test Invalid Arguments", () => {
  it("No Parameters", async () => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(400);
  });
  it("Invalid Width", async () => {
    const response = await request.get("/api/images?filename=fjord&width=abc&height=100");
    expect(response.status).toBe(400);
  });
}); 

describe("Test Valid Arguments", () => {    
  it("Valid Arguments", async () => {
    const response = await request.get("/api/images?filename=fjord&width=100&height=100");
    expect(response.status).toBe(200);
  });
});