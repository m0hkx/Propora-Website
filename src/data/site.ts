// Central realistic demo data. Formatting is consistent throughout:
// currency $X,XXX · percentages X.X% · dates "Mar 4" style.

export interface PropertyRow {
  name: string;
  units: string;
  occupancy: string;
  collected: string;
  status: 'Paid' | 'Partial' | 'Overdue';
  initials: string;
  glyph: string;
}

export const portfolioKpis = [
  { label: 'Monthly revenue', value: '$186,400', delta: '+6.2% vs Feb', up: true },
  { label: 'Occupancy', value: '94.2%', delta: '+1.1 pts', up: true },
  { label: 'Overdue rent', value: '$12,850', delta: '−18% this month', up: true },
  { label: 'Open repairs', value: '17', delta: '4 urgent', up: false },
];

export const rentRoll: PropertyRow[] = [
  { name: 'Harbor View Residences', units: '48 units', occupancy: '97.9%', collected: '$52,300', status: 'Paid', initials: 'HV', glyph: 'linear-gradient(135deg,#0F766E,#14B8A6)' },
  { name: 'Maple Court Apartments', units: '36 units', occupancy: '94.4%', collected: '$38,150', status: 'Paid', initials: 'MC', glyph: 'linear-gradient(135deg,#0369A1,#38BDF8)' },
  { name: 'Cedar Grove Homes', units: '24 units', occupancy: '91.7%', collected: '$24,900', status: 'Partial', initials: 'CG', glyph: 'linear-gradient(135deg,#0F766E,#F59E0B)' },
  { name: 'The Foundry Lofts', units: '30 units', occupancy: '90.0%', collected: '$31,750', status: 'Overdue', initials: 'FL', glyph: 'linear-gradient(135deg,#7C3AED,#22D3EE)' },
];

export interface WorkOrder {
  title: string;
  meta: string;
  priority: 'Urgent' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Scheduled' | 'Completed';
  assignee: string;
  color: string;
}

export const workOrders: WorkOrder[] = [
  { title: 'Boiler pressure fault — Bldg C', meta: 'Harbor View · Unit C-14 · Reported Mar 4', priority: 'Urgent', status: 'Open', assignee: 'MK', color: '#0F766E' },
  { title: 'Leaking faucet + tile regrout', meta: 'Maple Court · Unit 204 · Reported Mar 3', priority: 'High', status: 'In Progress', assignee: 'JR', color: '#0369A1' },
  { title: 'Annual HVAC service (12 units)', meta: 'Cedar Grove · Scheduled Mar 7', priority: 'Medium', status: 'Scheduled', assignee: 'AS', color: '#7C3AED' },
  { title: 'Hallway repaint — Floor 2', meta: 'Foundry Lofts · Scheduled Mar 11', priority: 'Low', status: 'Scheduled', assignee: 'TP', color: '#047857' },
];

export const moneySplit = [
  { label: 'Rent collected', value: '$186,400', width: '100%', bar: 'linear-gradient(90deg,#14B8A6,#0F766E)' },
  { label: 'Operating expenses', value: '$58,900', width: '32%', bar: '#E2E8F0' },
  { label: 'Net operating income', value: '$127,500', width: '68%', bar: 'linear-gradient(90deg,#0F766E,#134E4A)' },
];

export const revenueSeries = [142, 148, 145, 156, 162, 159, 171, 168, 176, 181, 179, 186];

export const occupancyDonut = [
  { label: 'Occupied · 294 units', value: '94.2%', color: '#0F766E' },
  { label: 'Vacant · 18 units', value: '5.8%', color: '#E2E8F0' },
];

export const propertyPerformance = [
  { name: 'Harbor View', noi: '$36,200', width: '100%' },
  { name: 'Maple Court', noi: '$27,400', width: '76%' },
  { name: 'Foundry Lofts', noi: '$21,900', width: '60%' },
  { name: 'Cedar Grove', noi: '$17,800', width: '49%' },
];

export interface RentEntry {
  tenant: string;
  place: string;
  rent: string;
  due: string;
  method: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  reminder: 'received' | 'sent' | 'scheduled';
  reminderLabel: string;
}

export const marchRentRoll: RentEntry[] = [
  { tenant: 'Amara Okafor', place: 'Harbor View · C-14', rent: '$1,850', due: 'Mar 1', method: 'Bank transfer', status: 'Paid', reminder: 'received', reminderLabel: 'Payment received' },
  { tenant: 'Jonas Weber', place: 'Maple Court · 204', rent: '$1,400', due: 'Mar 1', method: 'Bank transfer', status: 'Paid', reminder: 'received', reminderLabel: 'Receipt sent' },
  { tenant: 'Lena Fischer', place: 'Cedar Grove · 07', rent: '$1,150', due: 'Mar 1', method: 'Cash', status: 'Pending', reminder: 'sent', reminderLabel: 'Reminder sent' },
  { tenant: 'Marco Ruiz', place: 'Foundry Lofts · 312', rent: '$1,650', due: 'Mar 1', method: 'Bank transfer', status: 'Pending', reminder: 'scheduled', reminderLabel: 'Due in 3 days' },
  { tenant: 'Sofia Marino', place: 'Foundry Lofts · 208', rent: '$1,650', due: 'Mar 1', method: 'No payment yet', status: 'Overdue', reminder: 'sent', reminderLabel: '2nd reminder sent' },
];
