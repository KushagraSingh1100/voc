import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

type DataPoint = {
  month_year: string;
  net_sentiment: number;
};

type Props = {
  data: DataPoint[];
  product_name: string[];
};

type CustomDotProps = {
  cx?: number;
  cy?: number;
  payload?: DataPoint;
};

// eslint-disable-next-line react-refresh/only-export-components
const CustomDot = ({ cx = 0, cy = 0, payload }: CustomDotProps) => {
  if (!payload) return null;

  const positive = payload.net_sentiment >= 0;

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={7}
        fill={positive ? "#16a34a" : "#dc2626"}
        stroke="#fff"
        strokeWidth={2}
      />
      <text
        x={cx}
        y={positive ? cy - 16 : cy + 24}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={positive ? "#166534" : "#991b1b"}
      >
        {payload.net_sentiment}%
      </text>
    </g>
  );
};

type TooltipProps = {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
};

// eslint-disable-next-line react-refresh/only-export-components
const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const value = payload[0].value;

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-lg">
      <p className="m-0 font-semibold">{payload[0].payload.month_year}</p>
      <p
        className={`mt-1 font-bold ${
          value >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {value}%
      </p>
    </div>
  );
};

export default function net_sentimentGraph({
  data,
  product_name,
}: Props) {
  const avg =
    data.reduce((sum, item) => sum + item.net_sentiment, 0) / data.length;

  return (
    <div className="w-full h-full p-2 box-border rounded-md">
      {/* Header */}
      <div className="mb-3">
        {product_name.length === 1 ? (
          <h2 className="m-0 text-lg font-semibold text-gray-900">
            {product_name}
          </h2>
        ) : product_name.length === 0 ? (
          <h2 className="m-0 text-lg font-semibold text-gray-900">
            Overall Customer Sentiment Trend
          </h2>
        ) : (
          <h2 className="m-0 text-lg font-semibold text-gray-900">
            {product_name.length} Products Selected
          </h2>
        )}

        <div className="mt-2 text-base font-semibold text-gray-900">
          Net Sentiment{" "}
          <span className="text-green-600">
            {avg >= 0 ? "+" : ""}
            {avg.toFixed(2)}%
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500">(Positive % - Negative %)</p>
      </div>

      {/* Chart */}
      <div className="w-full h-[calc(100%-90px)]">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 26, right: 20, left: -18, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month_year"
              tick={{ fontSize: 12, fill: "#374151" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[-100, 100]}
              tickFormatter={(val: number) => `${val}%`}
              tick={{ fontSize: 12, fill: "#374151" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <ReferenceLine y={0} stroke="#cbd5e1" strokeWidth={2} />

            <Area
              type="monotone"
              dataKey="net_sentiment"
              stroke="#16a34a"
              strokeWidth={3}
              fillOpacity={0}
              dot={<CustomDot />}
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
