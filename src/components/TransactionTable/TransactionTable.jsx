import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeadRow,
  TableHeader,
  TableBodyText,
} from '../ui/table';
import transactionsData from '../../mock/transactions.json';
import { Container } from '../ui/Container';

export const TransactionTable = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableHeader>type</TableHeader>
            <TableHeader>amount</TableHeader>
            <TableHeader>created</TableHeader>
            <TableHeader>fee</TableHeader>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {transactionsData.transactions.map(
            ({ id, type, amount, created, fee }) => (
              <TableRow key={id}>
                <TableBodyText>{type}</TableBodyText>
                <TableBodyText>{amount}</TableBodyText>
                <TableBodyText>{created}</TableBodyText>
                <TableBodyText>{fee}</TableBodyText>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Container>
  );
};
