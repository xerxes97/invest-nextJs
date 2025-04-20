import { IOrmConstructor } from "./interfaces";
import Orm from "./client/orm";
import { IInvestmentDTO } from "@/models/investments";

const ENDPOINT_NAME = 'investments';

export class InvestmentClass extends Orm<IInvestmentDTO> {
  constructor(props: IOrmConstructor) {
    super({ endpointName: props.endpointName });
  }
}

export const Investment = new InvestmentClass({
  endpointName: ENDPOINT_NAME,
});

export default Investment;
