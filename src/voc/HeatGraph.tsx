import { useState } from "react";

type Props = {
  data?:
    | {
        stages: {
          stage_name: string;
          nodes: string[];
        }[];

        journey: {
          order: string[];

          nodes: Record<
            string,
            {
              _id: string;
              step_name: string;

              x?: number;
              y?: number;

              links: Record<
                string,
                {
                  source_id: string;
                  target_id: string;
                  user_traffic: number;

                  sentiment_intensity: {
                    positive: number;
                    negative: number;
                    neutral: number;
                  };

                  insight_label?: string;
                }
              >;
            }
          >;
        };
      }
    | string
    | undefined;
};

export default function HeatGraph({ data }: Props) {
  const [hoveredLink, setHoveredLink] = useState<{
    x: number;
    y: number;
    label?: string;
  } | null>(null);

  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center text-sm text-neutral-500">
        No journey data available. Please select a product
      </div>
    );
  }

  if (typeof data === "string") {
    return (
      <div className="w-full h-full flex items-center justify-center text-sm text-neutral-500">
        {data === "Please select single product"
          ? "No journey data available. Please select a single product"
          : data}
      </div>
    );
  }

  const spacingX = 180;

  const order = data.journey.order;

  // generate node positions dynamically
  const positionedNodes = order.map((nodeId, index) => ({
    id: nodeId,
    x: data.journey.nodes[nodeId].x ?? 80 + index * spacingX,

    y: data.journey.nodes[nodeId].y ?? 180,

    ...data.journey.nodes[nodeId],
  }));

  // generate links dynamically
  const links = positionedNodes.flatMap((node) =>
    Object.values(node.links).map((link) => ({
      source: link.source_id,
      target: link.target_id,
      users: link.user_traffic,

      insightLabel: link.insight_label,

      sentiment:
        link.sentiment_intensity.positive - link.sentiment_intensity.negative,
    })),
  );

  const getNode = (id: string) => positionedNodes.find((n) => n.id === id)!;

  const getColor = (sentiment: number) => {
    if (sentiment < -0.4) return "#ef4444";

    if (sentiment < 0) return "#f97316";

    if (sentiment < 0.4) return "#eab308";

    return "#22c55e";
  };

  const getStrokeWidth = (users: number) => {
    return Math.max(7, users / 800);
  };

  const createCurve = (x1: number, y1: number, x2: number, y2: number) => {
    const mid = (x1 + x2) / 2;

    return `
      M ${x1} ${y1}
      C ${mid} ${y1},
        ${mid} ${y2},
        ${x2} ${y2}
    `;
  };

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="w-full h-full overflow-auto overflow-y-hidden">
        <svg
          width={Math.max(...positionedNodes.map((n) => n.x)) + 300}
          height={Math.max(...positionedNodes.map((n) => n.y)) + 100}
        >
          {/* stage sections */}
          {(() => {
            let cumulativeNodes = 0;

            return data.stages.map((stage, index) => {
              const startNodeIndex = cumulativeNodes;

              cumulativeNodes += stage.nodes.length;

              const endNodeIndex = cumulativeNodes - 1;

              const startX = positionedNodes[startNodeIndex]?.x || 0;

              const endX = positionedNodes[endNodeIndex]?.x || 0;

              const centerX = (startX + endX) / 2;

              const separatorX = endX + spacingX / 2;

              return (
                <g key={stage.stage_name}>
                  {/* stage title */}
                  <text
                    x={centerX}
                    y={30}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#374151"
                  >
                    {stage.stage_name}
                  </text>

                  {/* separator */}
                  {index !== data.stages.length - 1 && (
                    <line
                      x1={separatorX}
                      y1="50"
                      x2={separatorX}
                      y2="460"
                      stroke="#d1d5db"
                      strokeDasharray="6 6"
                      strokeWidth={2}
                    />
                  )}
                </g>
              );
            });
          })()}

          {/* links */}
          {links.map((link, i) => {
            const source = getNode(link.source);

            const target = getNode(link.target);

            const color = getColor(link.sentiment);

            const midX = (source.x + target.x) / 2;

            const midY = (source.y + target.y) / 2;

            return (
              <g key={i}>
                <path
                  d={createCurve(source.x, source.y, target.x, target.y)}
                  fill="none"
                  stroke={color}
                  strokeWidth={getStrokeWidth(link.users)}
                  strokeLinecap="round"
                  opacity="0.7"
                  className="cursor-pointer"
                  onMouseEnter={() =>
                    setHoveredLink({
                      x: midX,
                      y: midY - 40,

                      label: link.insightLabel || "No insight available",
                    })
                  }
                  onMouseLeave={() => setHoveredLink(null)}
                />

                <text
                  x={midX}
                  y={midY - 18}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#475569"
                  fontWeight="600"
                >
                  {link.users} users
                </text>
              </g>
            );
          })}

          {/* tooltip */}
          {hoveredLink && (
            <g pointerEvents="none">
              <rect
                x={hoveredLink.x - hoveredLink.label!.length * 3.5}
                y={hoveredLink.y - 22}
                width={hoveredLink.label!.length * 7}
                height="32"
                rx="8"
                fill="#111827"
                opacity="0.95"
              />

              <text
                x={hoveredLink.x}
                y={hoveredLink.y - 2}
                textAnchor="middle"
                fontSize="11"
                fill="white"
                fontWeight="500"
              >
                {hoveredLink.label}
              </text>
            </g>
          )}

          {/* nodes */}
          {positionedNodes.map((node) => (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r="14" fill="#0f172a" />

              <circle cx={node.x} cy={node.y} r="6" fill="white" />

              <text
                x={node.x}
                y={node.y + 34}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="#111827"
              >
                {node.step_name}
              </text>
            </g>
          ))}
        </svg>

        {/* legend */}
        <div className="flex flex-wrap gap-4 mt-12 ml-6 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            Positive
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            Neutral
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500" />
            Mild Negative
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            Critical Negative
          </div>
        </div>
      </div>
    </div>
  );
}
