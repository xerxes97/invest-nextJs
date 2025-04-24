import { IOrmConstructor } from "../client/interfaces";
import Orm from "../client/orm";
import { ITransactionDTO } from "@/models/investments";

const ENDPOINT_NAME = 'transactions';

export class TransactionClass extends Orm<ITransactionDTO> {
  constructor(props: IOrmConstructor) {
    super({ endpointName: props.endpointName });
  }
}

export const Transaction = new TransactionClass({
  endpointName: ENDPOINT_NAME,
});

export default Transaction;
