const transactions = [
  {
    date: "15th Jan 2023",
    time: "10:30am",
    recipient: "Rajesh Kumar",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "State Bank of India",
    accountType: "Savings",
    transactionID: "TXN12345601",
    status: "Succeeded",
    sum: 5000,
  },
  {
    date: "17th Feb 2023",
    time: "02:45pm",
    recipient: "Anita Singh",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "HDFC Bank",
    accountType: "Current",
    transactionID: "TXN12345602",
    status: "Succeeded",
    sum: 2000,
  },
  {
    date: "21st Mar 2023",
    time: "11:15am",
    recipient: "Sunil Sharma",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "ICICI Bank",
    accountType: "Savings",
    transactionID: "TXN12345603",
    status: "In Progress",
    sum: 7500,
  },
  {
    date: "5th Apr 2023",
    time: "03:50pm",
    recipient: "Meena Verma",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "Axis Bank",
    accountType: "Current",
    transactionID: "TXN12345604",
    status: "Succeeded",
    sum: 1000,
  },
  {
    date: "10th May 2023",
    time: "09:30am",
    recipient: "Vikram Patel",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Punjab National Bank",
    accountType: "Savings",
    transactionID: "TXN12345605",
    status: "Succeeded",
    sum: 3000,
  },
  {
    date: "15th Jun 2023",
    time: "12:45pm",
    recipient: "Sneha Reddy",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "Kotak Mahindra Bank",
    accountType: "Current",
    transactionID: "TXN12345606",
    status: "Succeeded",
    sum: 4500,
  },
  {
    date: "20th Jul 2023",
    time: "04:10pm",
    recipient: "Amitabh Desai",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Bank of Baroda",
    accountType: "Savings",
    transactionID: "TXN12345607",
    status: "Succeeded",
    sum: 5200,
  },
  {
    date: "25th Aug 2023",
    time: "01:20pm",
    recipient: "Ravi Gupta",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "Canara Bank",
    accountType: "Current",
    transactionID: "TXN12345608",
    status: "In Progress",
    sum: 1800,
  },
  {
    date: "10th Sep 2023",
    time: "10:00am",
    recipient: "Priya Iyer",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Union Bank of India",
    accountType: "Savings",
    transactionID: "TXN12345609",
    status: "Succeeded",
    sum: 6200,
  },
  {
    date: "5th Oct 2023",
    time: "02:35pm",
    recipient: "Karan Kapoor",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "IDFC First Bank",
    accountType: "Current",
    transactionID: "TXN12345610",
    status: "Succeeded",
    sum: 2500,
  },
  {
    date: "12th Nov 2023",
    time: "09:45am",
    recipient: "Lata Joshi",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "IndusInd Bank",
    accountType: "Savings",
    transactionID: "TXN12345611",
    status: "Succeeded",
    sum: 8000,
  },
  {
    date: "17th Dec 2023",
    time: "11:30am",
    recipient: "Nitin Agrawal",
    type: "Vendor Payment",
    paymentType: "Debit",
    bank: "Yes Bank",
    accountType: "Current",
    transactionID: "TXN12345612",
    status: "Succeeded",
    sum: 3200,
  },
  {
    date: "22nd Jan 2024",
    time: "01:55pm",
    recipient: "Pooja Rao",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Bank of India",
    accountType: "Savings",
    transactionID: "TXN12345613",
    status: "In Progress",
    sum: 5400,
  },
  {
    date: "5th Feb 2024",
    time: "04:15pm",
    recipient: "Suresh Nair",
    type: "Vendor Payment",
    paymentType: "Debit",
    bank: "Central Bank of India",
    accountType: "Current",
    transactionID: "TXN12345614",
    status: "Succeeded",
    sum: 1500,
  },
  {
    date: "15th Mar 2024",
    time: "10:05am",
    recipient: "Geeta Jain",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Indian Bank",
    accountType: "Savings",
    transactionID: "TXN12345615",
    status: "Succeeded",
    sum: 4000,
  },
];
import StatsChart from "./StatsChart";
import StatsTable from "./StatsTable";
import StatsTop from "./StatsTop";
import StatsCards from "./StatsCards";
import StatsTotalBar from "./StatsTotalBar";
import { useEffect, useState } from "react";
import { useStatistic } from "#hooks/index";
function Statistic() {
  const [reportIndex, setReportIndex] = useState(0);
  const { handleStatisticData, handleStatisticStats } = useStatistic();
  const [stats, setStats] = useState({
    card_number: "1234567824681257",
    incomes: 124000.7,
    expenses: 124000.7,
    total_transactions: 11200,
    today_transactions: 14,
    succeeded: 112,
    in_progress: 112,
    failed: 112,
    refunded: 112,
    total_incomes: 124000.7,
    today_incomes: 11290.0,
    total_payments: 1240.7,
    today_payments: 112.0,
    total_successful_invoices: 1500,
    total_recieved_amount: 124000.24,
    total_paid_tax: 140.24,
  });
  const [transactionData, setTransactionData] = useState(transactions);
  useEffect(() => {
    const fetchStats = async () => {
      const stats = await handleStatisticStats(reportIndex);
      const data = await handleStatisticData(reportIndex);
      setStats(stats);
      setTransactionData(data);
      console.log(transactionData);
    };
    fetchStats();
  }, [reportIndex]);
  return (
    <div className="w-full my-5 bg-primary p-5 rounded-2xl flex flex-col gap-4">
      <StatsTop
        reportIndex={reportIndex}
        setReportIndex={setReportIndex}
        stats={stats}
      />
      <StatsChart reportIndex={reportIndex} stats={stats} />
      <StatsCards reportIndex={reportIndex} stats={stats} />
      <StatsTotalBar stats={stats} reportIndex={reportIndex} />
      <StatsTable transactionData={transactionData} reportIndex={reportIndex} />
    </div>
  );
}

export default Statistic;
