import { DriverBase } from './DriverBase';
export class WepyDriver extends DriverBase {
  get api() {
    return wepy;
  }
}
