import { IOrmConstructor } from "./interfaces";
import Orm from "./orm";

const ENDPOINT_NAME = 'investments';

export class InvestmentClass extends Orm {
  constructor(props: IOrmConstructor) {
    super({ endpointName: props.endpointName });
  }
}

export const Investment = new InvestmentClass({
  endpointName: ENDPOINT_NAME,
});
export default Investment;
