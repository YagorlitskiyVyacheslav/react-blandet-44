import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeadRow,
  TableHeader,
  TableBodyText,
} from "components/ui/table";
import { Container } from "components/ui/Container";
import { tableHeaderItems } from "constants";

export const TransactionTable = ({ transactions }) => {
  return (
    <Container>
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
              <TableBodyText>{created}</TableBodyText>
              <TableBodyText>{fee}</TableBodyText>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
