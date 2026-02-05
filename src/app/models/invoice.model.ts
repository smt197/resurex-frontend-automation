export class Invoice {
  id?: number;
  reference: string;
  amount: number;
  due_date?: any;
  client_name: string;
  is_paid?: boolean;

  constructor(invoice: Invoice) {
    this.id = invoice.id || 0;
    this.reference = invoice.reference;
    this.amount = invoice.amount;
    this.due_date = invoice.due_date || undefined;
    this.client_name = invoice.client_name;
    this.is_paid = invoice.is_paid || false;
  }
}
