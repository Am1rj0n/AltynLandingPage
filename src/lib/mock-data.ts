// ============================================================
// ALTYN — Comprehensive Mock Data for Enterprise Fintech Platform
// ============================================================

export const MERCHANT_CATEGORIES = [
  "Retail", "Grocery", "Restaurant", "Gas Station", "Online Shopping",
  "Travel", "Entertainment", "Healthcare", "Education", "Utilities",
  "Insurance", "Real Estate", "Fintech", "Crypto Exchange", "SaaS",
];

export const MERCHANTS = [
  { name: "Amazon", category: "Online Shopping", mcc: "5411" },
  { name: "Whole Foods", category: "Grocery", mcc: "5411" },
  { name: "Shell", category: "Gas Station", mcc: "5541" },
  { name: "Delta Airlines", category: "Travel", mcc: "4511" },
  { name: "Netflix", category: "Entertainment", mcc: "4899" },
  { name: "Uber", category: "Transportation", mcc: "4121" },
  { name: "Starbucks", category: "Restaurant", mcc: "5812" },
  { name: "Apple Store", category: "Retail", mcc: "5732" },
  { name: "Walgreens", category: "Healthcare", mcc: "5912" },
  { name: "Target", category: "Retail", mcc: "5311" },
  { name: "Costco", category: "Grocery", mcc: "5411" },
  { name: "Chevron", category: "Gas Station", mcc: "5541" },
  { name: "DoorDash", category: "Restaurant", mcc: "5812" },
  { name: "Spotify", category: "Entertainment", mcc: "4899" },
  { name: "CVS Pharmacy", category: "Healthcare", mcc: "5912" },
];

export const FRAUD_TYPES = [
  { type: "Card Theft", severity: "high", description: "Stolen card used at multiple locations" },
  { type: "Account Takeover", severity: "critical", description: "Unauthorized access to customer account" },
  { type: "Synthetic Identity", severity: "critical", description: "Fabricated identity combining real/fake data" },
  { type: "Money Laundering", severity: "critical", description: "Layered transactions to obscure fund origins" },
  { type: "Transaction Laundering", severity: "high", description: "Processing payments through shell merchants" },
  { type: "Bot Activity", severity: "medium", description: "Automated credential stuffing or card testing" },
  { type: "Mule Account", severity: "high", description: "Account used to transfer illicit funds" },
  { type: "Fraud Ring", severity: "critical", description: "Coordinated multi-actor fraud operation" },
  { type: "Chargeback Fraud", severity: "medium", description: "False dispute claims on legitimate purchases" },
  { type: "Wire Fraud", severity: "high", description: "Unauthorized wire transfers via social engineering" },
];

export const STATES = [
  "CA", "NY", "TX", "FL", "IL", "PA", "OH", "GA", "NC", "MI",
  "NJ", "VA", "WA", "AZ", "MA", "TN", "IN", "MO", "MD", "WI",
];

export const CITIES = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
  "Indianapolis", "San Francisco", "Seattle", "Denver", "Washington",
];

const FIRST_NAMES = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael",
  "Linda", "David", "Elizabeth", "William", "Barbara", "Richard", "Susan",
  "Joseph", "Jessica", "Thomas", "Sarah", "Christopher", "Karen", "Aisha",
  "Wei", "Priya", "Carlos", "Fatima", "Olga", "Raj", "Yuki", "Ahmed", "Lucia",
];

const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
  "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
  "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Chen", "Patel", "Kim", "Nguyen", "Okafor", "Ivanov", "Santos", "Ali",
];

export interface SyntheticCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  accountType: string;
  balance: number;
  creditScore: number;
  riskScore: number;
  joinDate: string;
  status: "active" | "suspended" | "closed" | "flagged";
  kycVerified: boolean;
}

export interface SyntheticTransaction {
  id: string;
  customerId: string;
  customerName: string;
  merchant: string;
  category: string;
  amount: number;
  type: "debit" | "credit" | "wire" | "ach" | "p2p";
  status: "completed" | "pending" | "failed" | "flagged";
  date: string;
  isFraud: boolean;
  riskScore: number;
  location: string;
}

export interface FraudAlert {
  id: string;
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  description: string;
  transactionId: string;
  customerId: string;
  amount: number;
  timestamp: string;
  status: "open" | "investigating" | "resolved" | "escalated";
  confidence: number;
  aiExplanation: string;
}

export interface DatasetJob {
  id: string;
  name: string;
  type: string;
  records: number;
  fraudRatio: number;
  status: "queued" | "generating" | "validating" | "completed" | "failed";
  progress: number;
  createdAt: string;
  completedAt: string | null;
  fileSize: string;
  format: string;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  requests: number;
  rateLimit: number;
  status: "active" | "revoked";
}

// Generate synthetic customers
export function generateCustomers(count: number): SyntheticCustomer[] {
  const customers: SyntheticCustomer[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    const state = STATES[Math.floor(Math.random() * STATES.length)];
    const statuses: SyntheticCustomer["status"][] = ["active", "active", "active", "active", "suspended", "flagged"];
    customers.push({
      id: `CUST-${String(i + 1).padStart(6, "0")}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${["gmail.com", "yahoo.com", "outlook.com", "protonmail.com"][Math.floor(Math.random() * 4)]}`,
      phone: `+1 (${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
      city,
      state,
      accountType: ["Checking", "Savings", "Business", "Premium", "Student"][Math.floor(Math.random() * 5)],
      balance: Math.round(Math.random() * 250000 * 100) / 100,
      creditScore: Math.floor(Math.random() * 350 + 500),
      riskScore: Math.round(Math.random() * 100),
      joinDate: new Date(Date.now() - Math.random() * 365 * 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      kycVerified: Math.random() > 0.15,
    });
  }
  return customers;
}

// Generate synthetic transactions
export function generateTransactions(count: number, customers: SyntheticCustomer[]): SyntheticTransaction[] {
  const transactions: SyntheticTransaction[] = [];
  const types: SyntheticTransaction["type"][] = ["debit", "credit", "wire", "ach", "p2p"];
  const statuses: SyntheticTransaction["status"][] = ["completed", "completed", "completed", "pending", "failed", "flagged"];

  for (let i = 0; i < count; i++) {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const merchant = MERCHANTS[Math.floor(Math.random() * MERCHANTS.length)];
    const isFraud = Math.random() < 0.05;
    const amount = isFraud
      ? Math.round(Math.random() * 15000 * 100) / 100
      : Math.round(Math.random() * 500 * 100) / 100;

    transactions.push({
      id: `TXN-${String(i + 1).padStart(8, "0")}`,
      customerId: customer.id,
      customerName: customer.name,
      merchant: merchant.name,
      category: merchant.category,
      amount,
      type: types[Math.floor(Math.random() * types.length)],
      status: isFraud ? "flagged" : statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      isFraud,
      riskScore: isFraud ? Math.floor(Math.random() * 30 + 70) : Math.floor(Math.random() * 40),
      location: `${CITIES[Math.floor(Math.random() * CITIES.length)]}, ${STATES[Math.floor(Math.random() * STATES.length)]}`,
    });
  }
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Generate fraud alerts
export function generateFraudAlerts(count: number): FraudAlert[] {
  const alerts: FraudAlert[] = [];
  const alertStatuses: FraudAlert["status"][] = ["open", "investigating", "resolved", "escalated"];

  for (let i = 0; i < count; i++) {
    const fraudType = FRAUD_TYPES[Math.floor(Math.random() * FRAUD_TYPES.length)];
    alerts.push({
      id: `ALT-${String(i + 1).padStart(6, "0")}`,
      type: fraudType.type,
      severity: fraudType.severity as FraudAlert["severity"],
      description: fraudType.description,
      transactionId: `TXN-${String(Math.floor(Math.random() * 100000)).padStart(8, "0")}`,
      customerId: `CUST-${String(Math.floor(Math.random() * 1000)).padStart(6, "0")}`,
      amount: Math.round(Math.random() * 25000 * 100) / 100,
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: alertStatuses[Math.floor(Math.random() * alertStatuses.length)],
      confidence: Math.round(Math.random() * 40 + 60),
      aiExplanation: getAiExplanation(fraudType.type),
    });
  }
  return alerts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

function getAiExplanation(type: string): string {
  const explanations: Record<string, string> = {
    "Card Theft": "Multiple high-value transactions detected across geographically dispersed locations within a 2-hour window. Velocity exceeds 4.2σ from baseline spending patterns.",
    "Account Takeover": "Login from unrecognized device/IP (TOR exit node). Immediate password change followed by wire transfer to new beneficiary. Behavioral biometrics confidence: 12%.",
    "Synthetic Identity": "SSN-name mismatch detected. Credit history shows thin-file patterns consistent with synthetic identity. Address linked to 7 other accounts created in past 90 days.",
    "Money Laundering": "Structuring pattern detected: 14 deposits of $9,800-$9,950 over 6 days across 3 accounts. Round-trip transactions with shell company identified.",
    "Transaction Laundering": "Merchant processing volume 340% above category average. 89% of transactions from single BIN range. No physical inventory evidence.",
    "Bot Activity": "47 failed card authorization attempts in 120 seconds from same IP. Sequential BIN testing pattern with incrementing card numbers detected.",
    "Mule Account": "Account received 23 P2P transfers from unrelated parties within 48 hours, followed by immediate international wire transfer. Classic money mule pattern.",
    "Fraud Ring": "Network analysis reveals 12 interconnected accounts sharing device fingerprints, IP addresses, and beneficiary relationships. Coordinated activity score: 94%.",
    "Chargeback Fraud": "Customer has filed 8 chargebacks in 90 days across 3 merchants. Delivery confirmation exists for all disputed transactions. Friendly fraud probability: 91%.",
    "Wire Fraud": "Wire transfer request deviated from established patterns. Recipient account newly created at foreign institution. Email thread shows signs of BEC compromise.",
  };
  return explanations[type] || "Anomalous activity detected with high confidence based on multi-signal analysis.";
}

// Generate dataset jobs
export function generateDatasetJobs(count: number): DatasetJob[] {
  const jobs: DatasetJob[] = [];
  const types = ["Banking", "Credit Cards", "Crypto Exchange", "Payroll", "Lending", "Insurance"];
  const formats = ["CSV", "JSON", "Parquet", "SQL"];
  const jobStatuses: DatasetJob["status"][] = ["queued", "generating", "validating", "completed", "completed", "completed", "failed"];

  for (let i = 0; i < count; i++) {
    const status = jobStatuses[Math.floor(Math.random() * jobStatuses.length)];
    const records = Math.floor(Math.random() * 5000000 + 10000);
    jobs.push({
      id: `JOB-${String(i + 1).padStart(6, "0")}`,
      name: `${types[Math.floor(Math.random() * types.length)]} Dataset v${Math.floor(Math.random() * 10 + 1)}.${Math.floor(Math.random() * 10)}`,
      type: types[Math.floor(Math.random() * types.length)],
      records,
      fraudRatio: Math.round(Math.random() * 15 * 10) / 10,
      status,
      progress: status === "completed" ? 100 : status === "failed" ? Math.floor(Math.random() * 80) : Math.floor(Math.random() * 95),
      createdAt: new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000).toISOString(),
      completedAt: status === "completed" ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() : null,
      fileSize: `${(records * 0.0004).toFixed(1)} MB`,
      format: formats[Math.floor(Math.random() * formats.length)],
    });
  }
  return jobs;
}

// Generate API keys
export function generateApiKeys(): ApiKey[] {
  return [
    {
      id: "key-1",
      name: "Production API Key",
      key: "ak_live_51Nq...xK4m",
      created: "2026-01-15",
      lastUsed: "2026-05-14",
      requests: 1247832,
      rateLimit: 10000,
      status: "active",
    },
    {
      id: "key-2",
      name: "Staging Key",
      key: "ak_test_82Fb...jR7n",
      created: "2026-02-20",
      lastUsed: "2026-05-13",
      requests: 84521,
      rateLimit: 5000,
      status: "active",
    },
    {
      id: "key-3",
      name: "Development Key",
      key: "ak_dev_9xLp...mQ2w",
      created: "2026-03-01",
      lastUsed: "2026-05-12",
      requests: 12340,
      rateLimit: 1000,
      status: "active",
    },
    {
      id: "key-4",
      name: "Legacy Integration",
      key: "ak_live_3kWr...pN8v",
      created: "2025-11-05",
      lastUsed: "2026-04-01",
      requests: 523100,
      rateLimit: 10000,
      status: "revoked",
    },
  ];
}

// Dashboard stats
export const DASHBOARD_STATS = {
  totalDatasets: 1247,
  totalRecords: 847_293_142,
  fraudScenarios: 342,
  apiCalls: 12_847_293,
  activeSimulations: 23,
  avgRiskScore: 34,
  privacyScore: 98.7,
  complianceStatus: "Passed",
  dataQuality: 97.2,
  uptime: 99.97,
  activeUsers: 847,
  modelsTraining: 12,
};

// Chart data generators
export function generateTimeSeriesData(days: number) {
  const data = [];
  const now = Date.now();
  for (let i = days; i >= 0; i--) {
    const date = new Date(now - i * 24 * 60 * 60 * 1000);
    data.push({
      date: date.toISOString().split("T")[0],
      datasets: Math.floor(Math.random() * 50 + 20),
      records: Math.floor(Math.random() * 500000 + 100000),
      apiCalls: Math.floor(Math.random() * 50000 + 10000),
      fraudDetected: Math.floor(Math.random() * 200 + 50),
    });
  }
  return data;
}

export function generateDistributionData() {
  return MERCHANT_CATEGORIES.map(cat => ({
    name: cat,
    value: Math.floor(Math.random() * 10000 + 500),
    fraudRate: Math.round(Math.random() * 8 * 10) / 10,
  }));
}

export function generateHourlyHeatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = [];
  for (const day of days) {
    for (let hour = 0; hour < 24; hour++) {
      data.push({
        day,
        hour: `${hour}:00`,
        value: Math.floor(Math.random() * 100),
      });
    }
  }
  return data;
}

export function generateRocCurveData() {
  const data = [];
  for (let i = 0; i <= 100; i += 2) {
    const fpr = i / 100;
    const tpr = Math.min(1, fpr + Math.random() * 0.3 + 0.2 * Math.sqrt(fpr));
    data.push({ fpr: Math.round(fpr * 100) / 100, tpr: Math.round(tpr * 100) / 100 });
  }
  data.sort((a, b) => a.fpr - b.fpr);
  return data;
}

export function generateConfusionMatrix() {
  return {
    tp: Math.floor(Math.random() * 500 + 800),
    fp: Math.floor(Math.random() * 50 + 20),
    fn: Math.floor(Math.random() * 40 + 15),
    tn: Math.floor(Math.random() * 2000 + 4000),
  };
}

export function generateFeatureImportance() {
  const features = [
    "transaction_amount", "transaction_velocity", "merchant_risk",
    "device_fingerprint", "geo_distance", "time_of_day",
    "account_age", "avg_balance", "ip_reputation", "behavioral_score",
    "card_present", "recurring_pattern",
  ];
  return features.map(f => ({
    feature: f,
    importance: Math.round(Math.random() * 100) / 100,
  })).sort((a, b) => b.importance - a.importance);
}

// Activity feed
export function generateActivityFeed(count: number) {
  const activities = [
    { action: "Dataset generated", detail: "Banking transactions — 1.2M records", icon: "database" },
    { action: "Fraud simulation completed", detail: "AML scenario with 3% mule activity", icon: "shield" },
    { action: "Model training finished", detail: "XGBoost fraud detector — AUC 0.974", icon: "brain" },
    { action: "API key created", detail: "Production key for payment pipeline", icon: "key" },
    { action: "Export completed", detail: "2.4GB Parquet file to S3", icon: "download" },
    { action: "Risk alert triggered", detail: "Unusual velocity in account CUST-004721", icon: "alert" },
    { action: "New team member added", detail: "sarah.chen@acme.com joined as Analyst", icon: "user" },
    { action: "Compliance report generated", detail: "Q2 2026 SOC 2 compliance audit", icon: "file" },
    { action: "Webhook delivered", detail: "generation.complete → prod endpoint", icon: "zap" },
    { action: "Schema validated", detail: "Credit card dataset passed all 47 checks", icon: "check" },
  ];

  const feed = [];
  for (let i = 0; i < count; i++) {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    feed.push({
      ...activity,
      id: `act-${i}`,
      timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
    });
  }
  return feed.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

// Team members
export const TEAM_MEMBERS = [
  { id: "1", name: "Alex Chen", email: "alex.chen@altyn.ai", role: "Admin", avatar: "AC", lastActive: "2 min ago", status: "online" },
  { id: "2", name: "Sarah Miller", email: "sarah.m@altyn.ai", role: "ML Engineer", avatar: "SM", lastActive: "15 min ago", status: "online" },
  { id: "3", name: "Raj Patel", email: "raj.p@altyn.ai", role: "Data Scientist", avatar: "RP", lastActive: "1 hr ago", status: "away" },
  { id: "4", name: "Emily Johnson", email: "emily.j@altyn.ai", role: "Analyst", avatar: "EJ", lastActive: "3 hrs ago", status: "offline" },
  { id: "5", name: "Marcus Williams", email: "marcus.w@altyn.ai", role: "Engineer", avatar: "MW", lastActive: "30 min ago", status: "online" },
  { id: "6", name: "Lisa Park", email: "lisa.p@altyn.ai", role: "Compliance", avatar: "LP", lastActive: "2 hrs ago", status: "away" },
];

// Pricing plans
export const PRICING_PLANS = [
  {
    name: "Starter",
    price: 0,
    period: "forever",
    description: "For individual researchers and developers",
    features: [
      "10K synthetic records/month",
      "3 dataset templates",
      "CSV & JSON export",
      "Basic fraud scenarios",
      "Community support",
      "API access (100 req/day)",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 299,
    period: "month",
    description: "For growing fintech teams and startups",
    features: [
      "1M synthetic records/month",
      "All dataset templates",
      "All export formats",
      "Advanced fraud simulation",
      "Model training (5 concurrent)",
      "Priority support",
      "API access (10K req/day)",
      "Team collaboration (5 seats)",
      "Webhook integrations",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    period: "custom",
    description: "For banks, institutions, and large teams",
    features: [
      "Unlimited synthetic records",
      "Custom data schemas",
      "All export + cloud push",
      "Full fraud simulation lab",
      "Unlimited model training",
      "Dedicated support + SLA",
      "Unlimited API access",
      "SSO & RBAC",
      "On-premise deployment",
      "Custom compliance reports",
      "Audit trails",
      "SOC 2 & GDPR compliant",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

// Fraud network graph data
export function generateFraudNetworkData() {
  const nodes = [];
  const links = [];

  // Central fraud actor
  nodes.push({ id: "actor-1", label: "Primary Actor", type: "actor", risk: 95, x: 400, y: 300 });

  // Connected accounts
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    nodes.push({
      id: `account-${i}`,
      label: `Mule Account ${i + 1}`,
      type: "mule",
      risk: Math.floor(Math.random() * 30 + 60),
      x: 400 + Math.cos(angle) * 150,
      y: 300 + Math.sin(angle) * 150,
    });
    links.push({ source: "actor-1", target: `account-${i}`, value: Math.floor(Math.random() * 50000 + 5000) });
  }

  // Outer layer
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    nodes.push({
      id: `entity-${i}`,
      label: `Entity ${i + 1}`,
      type: i < 3 ? "shell" : "merchant",
      risk: Math.floor(Math.random() * 50 + 20),
      x: 400 + Math.cos(angle) * 280,
      y: 300 + Math.sin(angle) * 280,
    });
    links.push({
      source: `account-${Math.floor(Math.random() * 6)}`,
      target: `entity-${i}`,
      value: Math.floor(Math.random() * 20000 + 1000),
    });
  }

  return { nodes, links };
}
