import { BrowserModule } from "@angular/platform-browser";
import {HelloWorldComponent} from "./hello-world.component";

  export const bootstrap = [HelloWorldComponent];
  export const declarations = [HelloWorldComponent];
  export const imports = [BrowserModule];
  export const providers: any[] = [];