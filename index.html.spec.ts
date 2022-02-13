/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from "@nestjs/testing";

describe("IndexHtml", () => {
  let indexHtml: IndexHtml;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    indexHtml = moduleRef.get<IndexHtml>(IndexHtml);
  });

  it("should be defined", () => {
    expect(indexHtml).toBeDefined();
  });
});
