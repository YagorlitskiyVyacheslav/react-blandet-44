import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeadRow,
  TableHeader,
  TableBodyText,
} from "components/ui/table";
import { tableHeaderItems } from "constants";
import { Card } from "components/ui/Card";
import { format } from "date-fns";

export const TransactionTable = ({ transactions }) => {
  return (
    <Card title="Transactions history">
      <Table>
        <TableHead>
          <TableHeadRow>
            {tableHeaderItems.map((item) => (
              <TableHeader key={item}>{item}</TableHeader>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, type, amount, created, fee }) => (
            <TableRow type={type} key={id}>
              <TableBodyText>
                {type[0].toUpperCase() + type.slice(1)}
              </TableBodyText>
              <TableBodyText>{amount}</TableBodyText>
              <TableBodyText>
                {format(created, "HH:mm; MM-dd-yyyy")}
              </TableBodyText>
              <TableBodyText>{fee}</TableBodyText>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
