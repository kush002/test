import { Module } from "@nestjs/common";
import { TestModuleBase } from "./base/test.module.base";
import { TestService } from "./test.service";

@Module({
  imports: [TestModuleBase],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
