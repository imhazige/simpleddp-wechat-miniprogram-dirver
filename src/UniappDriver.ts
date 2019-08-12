declare var uni: any;
import { DriverBase } from './DriverBase';
export class UniappDriver extends DriverBase {
  get api() {
    return uni;
  }
}
