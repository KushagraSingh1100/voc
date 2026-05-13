import React from "react";
import { Check, Info } from "lucide-react";
import { Command, CommandItem, CommandList } from "./components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { Button } from "./components/ui/button";
import SentimentGraph from "./voc/SentimentGraph";
import HeatGraph from "./voc/HeatGraph";
import ChatBox from "./voc/ChatBox";

const VoiceOfCustomer = () => {
  const data = {
    dashboard: {
      companies: {
        "COMP-EST-01": {
          company_id: "COMP-EST-01",
          company_name: "The Esthetics Clinical Care Center",
          products: {
            "PROD-EST-01": {
              product_id: "PROD-EST-01",
              product_name: "Aesthetic & Surgical Services",
              data: {
                sentiment_velocity: [
                  {
                    month_year: "Aug 2025",
                    net_sentiment: 100.0,
                  },
                  {
                    month_year: "Sep 2025",
                    net_sentiment: 50.0,
                  },
                  {
                    month_year: "Oct 2025",
                    net_sentiment: 100.0,
                  },
                  {
                    month_year: "Nov 2025",
                    net_sentiment: 100.0,
                  },
                  {
                    month_year: "Dec 2025",
                    net_sentiment: 100.0,
                  },
                ],
                journey_heatmap: {
                  stages: [
                    {
                      stage_name: "Initial Contact",
                      nodes: ["step1"],
                    },
                    {
                      stage_name: "Clinical Engagement",
                      nodes: ["step2", "step3"],
                    },
                    {
                      stage_name: "Recovery & Support",
                      nodes: ["step4"],
                    },
                  ],
                  journey: {
                    order: ["step1", "step2", "step3", "step4"],
                    nodes: {
                      step1: {
                        _id: "step1",
                        step_name: "Booking/Inquiry",
                        x: 120,
                        y: 180,
                        links: {
                          step2: {
                            source_id: "step1",
                            target_id: "step2",
                            user_traffic: 100,
                            sentiment_intensity: {
                              positive: 0.8,
                              negative: 0.1,
                              neutral: 0.1,
                            },
                            insight_label: "High Conversion",
                          },
                        },
                      },
                      step2: {
                        _id: "step2",
                        step_name: "Consultation (Dr. Prachi)",
                        x: 380,
                        y: 190,
                        links: {
                          step3: {
                            source_id: "step2",
                            target_id: "step3",
                            user_traffic: 85,
                            sentiment_intensity: {
                              positive: 0.9,
                              negative: 0.05,
                              neutral: 0.05,
                            },
                            insight_label: "Excellent Feedback",
                          },
                        },
                      },
                      step3: {
                        _id: "step3",
                        step_name: "Treatment Execution",
                        x: 680,
                        y: 170,
                        links: {
                          step4: {
                            source_id: "step3",
                            target_id: "step4",
                            user_traffic: 80,
                            sentiment_intensity: {
                              positive: 0.85,
                              negative: 0.05,
                              neutral: 0.1,
                            },
                            insight_label: "Sincere approach",
                          },
                        },
                      },
                      step4: {
                        _id: "step4",
                        step_name: "Post-Care Follow-up",
                        x: 980,
                        y: 180,
                        insight_label: "Loyal Customers",
                        links: {},
                      },
                    },
                  },
                },
                silence_metrics: [
                  {
                    feature_name: "Other",
                    feedback_frequency: "high",
                    satisfication_level: "positive",
                  },
                  {
                    feature_name: "Facial implants",
                    feedback_frequency: "low",
                    satisfication_level: "positive",
                  },
                ],
                issues_metrics: [
                  {
                    issue_id: "ISSUE-001",
                    title: "Wait Time Feedback",
                    status: "resolved",
                    send_custom_email: false,
                  },
                  {
                    issue_id: "ISSUE-002",
                    title: "Treatment Clarification",
                    status: "in_progress",
                    send_custom_email: false,
                  },
                ],
                key_insights: [
                  {
                    insight_name: "Doctor Empathy",
                    insight_description:
                      "Patients consistently highlight Dr. Prachi's empathetic and attentive approach during consultations.",
                  },
                  {
                    insight_name: "Trust & Professionalism",
                    insight_description:
                      "Reviews emphasize the sincere and trustworthy nature of the skin treatments provided.",
                  },
                ],
                voc_digest:
                  "The Esthetics Clinical Care Center in Pune, led by Dr. Prachi Chhindam, shows exceptionally high patient satisfaction (Net Sentiment ~100%). Patients value the personalized care at Goodwill Square Mall clinic. Feedback suggests high trust in facio-maxillary and cosmetic procedures.",
              },
            },
          },
          data: {
            sentiment_velocity: [
              {
                month_year: "Aug 2025",
                net_sentiment: 100.0,
              },
              {
                month_year: "Sep 2025",
                net_sentiment: 50.0,
              },
              {
                month_year: "Oct 2025",
                net_sentiment: 100.0,
              },
              {
                month_year: "Nov 2025",
                net_sentiment: 100.0,
              },
              {
                month_year: "Dec 2025",
                net_sentiment: 100.0,
              },
            ],
            journey_heatmap: {
              stages: [
                {
                  stage_name: "Initial Contact",
                  nodes: ["step1"],
                },
                {
                  stage_name: "Clinical Engagement",
                  nodes: ["step2", "step3"],
                },
                {
                  stage_name: "Recovery & Support",
                  nodes: ["step4"],
                },
              ],
              journey: {
                order: ["step1", "step2", "step3", "step4"],
                nodes: {
                  step1: {
                    _id: "step1",
                    step_name: "Booking/Inquiry",
                    x: 10,
                    y: 50,
                    insight_label: "High Conversion",
                    links: {
                      step2: {
                        source_id: "step1",
                        target_id: "step2",
                        user_traffic: 100,
                        sentiment_intensity: {
                          positive: 0.8,
                          negative: 0.1,
                          neutral: 0.1,
                        },
                      },
                    },
                  },
                  step2: {
                    _id: "step2",
                    step_name: "Consultation (Dr. Prachi)",
                    x: 30,
                    y: 50,
                    insight_label: "Excellent Feedback",
                    links: {
                      step3: {
                        source_id: "step2",
                        target_id: "step3",
                        user_traffic: 85,
                        sentiment_intensity: {
                          positive: 0.9,
                          negative: 0.05,
                          neutral: 0.05,
                        },
                      },
                    },
                  },
                  step3: {
                    _id: "step3",
                    step_name: "Treatment Execution",
                    x: 60,
                    y: 50,
                    insight_label: "Sincere approach",
                    links: {
                      step4: {
                        source_id: "step3",
                        target_id: "step4",
                        user_traffic: 80,
                        sentiment_intensity: {
                          positive: 0.85,
                          negative: 0.05,
                          neutral: 0.1,
                        },
                      },
                    },
                  },
                  step4: {
                    _id: "step4",
                    step_name: "Post-Care Follow-up",
                    x: 90,
                    y: 50,
                    insight_label: "Loyal Customers",
                    links: {},
                  },
                },
              },
            },
            silence_metrics: [
              {
                feature_name: "Other",
                feedback_frequency: "high",
                satisfication_level: "positive",
              },
              {
                feature_name: "Facial implants",
                feedback_frequency: "low",
                satisfication_level: "positive",
              },
            ],
            issues_metrics: [
              {
                issue_id: "ISSUE-001",
                title: "Wait Time Feedback",
                status: "resolved",
                send_custom_email: false,
              },
              {
                issue_id: "ISSUE-002",
                title: "Treatment Clarification",
                status: "in_progress",
                send_custom_email: false,
              },
            ],
            key_insights: [
              {
                insight_name: "Doctor Empathy",
                insight_description:
                  "Patients consistently highlight Dr. Prachi's empathetic and attentive approach during consultations.",
              },
              {
                insight_name: "Trust & Professionalism",
                insight_description:
                  "Reviews emphasize the sincere and trustworthy nature of the skin treatments provided.",
              },
            ],
            voc_digest:
              "The Esthetics Clinical Care Center in Pune, led by Dr. Prachi Chhindam, shows exceptionally high patient satisfaction (Net Sentiment ~100%). Patients value the personalized care at Goodwill Square Mall clinic. Feedback suggests high trust in facio-maxillary and cosmetic procedures.",
          },
        },
      },
      data: {
        sentiment_velocity: [
          {
            month_year: "Aug 2025",
            net_sentiment: 100.0,
          },
          {
            month_year: "Sep 2025",
            net_sentiment: 50.0,
          },
          {
            month_year: "Oct 2025",
            net_sentiment: 100.0,
          },
          {
            month_year: "Nov 2025",
            net_sentiment: 100.0,
          },
          {
            month_year: "Dec 2025",
            net_sentiment: 100.0,
          },
        ],
        journey_heatmap: {
          stages: [
            {
              stage_name: "Initial Contact",
              nodes: ["step1"],
            },
            {
              stage_name: "Clinical Engagement",
              nodes: ["step2", "step3"],
            },
            {
              stage_name: "Recovery & Support",
              nodes: ["step4"],
            },
          ],
          journey: {
            order: ["step1", "step2", "step3", "step4"],
            nodes: {
              step1: {
                _id: "step1",
                step_name: "Booking/Inquiry",
                x: 10,
                y: 50,
                insight_label: "High Conversion",
                links: {
                  step2: {
                    source_id: "step1",
                    target_id: "step2",
                    user_traffic: 100,
                    sentiment_intensity: {
                      positive: 0.8,
                      negative: 0.1,
                      neutral: 0.1,
                    },
                  },
                },
              },
              step2: {
                _id: "step2",
                step_name: "Consultation (Dr. Prachi)",
                x: 30,
                y: 50,
                insight_label: "Excellent Feedback",
                links: {
                  step3: {
                    source_id: "step2",
                    target_id: "step3",
                    user_traffic: 85,
                    sentiment_intensity: {
                      positive: 0.9,
                      negative: 0.05,
                      neutral: 0.05,
                    },
                  },
                },
              },
              step3: {
                _id: "step3",
                step_name: "Treatment Execution",
                x: 60,
                y: 50,
                insight_label: "Sincere approach",
                links: {
                  step4: {
                    source_id: "step3",
                    target_id: "step4",
                    user_traffic: 80,
                    sentiment_intensity: {
                      positive: 0.85,
                      negative: 0.05,
                      neutral: 0.1,
                    },
                  },
                },
              },
              step4: {
                _id: "step4",
                step_name: "Post-Care Follow-up",
                x: 90,
                y: 50,
                insight_label: "Loyal Customers",
                links: {},
              },
            },
          },
        },
        silence_metrics: [
          {
            feature_name: "Other",
            feedback_frequency: "high",
            satisfication_level: "positive",
          },
          {
            feature_name: "Facial implants",
            feedback_frequency: "low",
            satisfication_level: "positive",
          },
        ],
        issues_metrics: [
          {
            issue_id: "ISSUE-001",
            title: "Wait Time Feedback",
            status: "resolved",
            send_custom_email: false,
          },
          {
            issue_id: "ISSUE-002",
            title: "Treatment Clarification",
            status: "in_progress",
            send_custom_email: false,
          },
        ],
        key_insights: [
          {
            insight_name: "Doctor Empathy",
            insight_description:
              "Patients consistently highlight Dr. Prachi's empathetic and attentive approach during consultations.",
          },
          {
            insight_name: "Trust & Professionalism",
            insight_description:
              "Reviews emphasize the sincere and trustworthy nature of the skin treatments provided.",
          },
        ],
        voc_digest:
          "The Esthetics Clinical Care Center in Pune, led by Dr. Prachi Chhindam, shows exceptionally high patient satisfaction (Net Sentiment ~100%). Patients value the personalized care at Goodwill Square Mall clinic. Feedback suggests high trust in facio-maxillary and cosmetic procedures.",
      },
    },
    created_at: "2026-05-13T08:06:54.769844",
    comments: [],
  };

  const [selectedCompanies, setSelectedCompanies] = React.useState<string[]>(
    [],
  );
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);

  const handleSelectCompanies = (value: string) => {
    setSelectedCompanies((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleSelectProducts = (value: string) => {
    setSelectedProducts((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleClearFilter = () => {
    setSelectedCompanies([]);
    setSelectedProducts([]);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-6">
      <div>
        <div className="flex flex-row items-center gap-3">
          <h1 className="font-semibold text-xl">Voice of Customer</h1>
          <div>
            <div className="relative group">
              <Info className="text-primary size-4 mr-2 cursor-pointer" />

              <div className="absolute left-0 top-7 w-72 rounded-lg bg-neutral-900 text-white text-xs leading-5 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                Voice of Customer is generated in the first week of every month.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 px-4 py-8 bg-neutral-100 h-10 rounded-sm flex flex-row items-center gap-3 justify-between">
          <div className="flex flex-row items-center border-r-2 gap-6 w-max pr-8">
            <div className="flex flex-col items-start pr-4">
              <h3 className="font-bold">Select Company</h3>
              <p className="text-sm">
                (e.g.: Apple, Google, Meta or multiple companies)
              </p>
            </div>

            <div>
              <Popover>
                <PopoverTrigger className="w-max text-xs font-semibold p-2.5 flex items-center gap-1 border rounded-md bg-background/80 hover:bg-background">
                  {selectedCompanies.length === 0 && "Select Companies"}
                  {selectedCompanies.length === 1 &&
                    Object.values(data.dashboard.companies).find(
                      (s) => s.company_id === selectedCompanies[0],
                    )?.company_name}
                  {selectedCompanies.length > 1 &&
                    `${selectedCompanies.length} companies`}
                </PopoverTrigger>

                <PopoverContent className="p-0 w-60">
                  <Command>
                    <CommandList className="p-2 py-3">
                      {Object.values(data.dashboard.companies).map(
                        (company) => {
                          const isSelected = selectedCompanies.includes(
                            company.company_id,
                          );

                          return (
                            <CommandItem
                              key={company.company_id}
                              onSelect={() =>
                                handleSelectCompanies(company.company_id)
                              }
                              className="flex items-center justify-between cursor-pointer rounded-md px-3 py-2 my-1"
                            >
                              {company.company_name}
                              {isSelected && (
                                <Check className="text-primary" size={16} />
                              )}
                            </CommandItem>
                          );
                        },
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6  border-r-2 w-max pr-8">
            <div className="flex flex-col items-start pr-4">
              <h3 className="font-bold">Select Products</h3>
              <p className="text-sm">
                (e.g.: Mobile App, Web Portal, API, or multiple products)
              </p>
            </div>

            <div>
              <Popover>
                <PopoverTrigger className="w-max text-xs font-semibold p-2.5 flex items-center gap-1 border rounded-md bg-background/80 hover:bg-background">
                  {selectedProducts.length === 0 && "Select Products"}
                  {selectedProducts.length === 1 &&
                    Object.values(data.dashboard.companies)
                      .flatMap((company) => Object.values(company.products))
                      .find(
                        (product) => product.product_id === selectedProducts[0],
                      )?.product_name}
                  {selectedProducts.length > 1 &&
                    `${selectedProducts.length} products`}
                </PopoverTrigger>

                <PopoverContent className="p-0 w-60">
                  <Command>
                    <CommandList className="p-2 py-3">
                      {selectedCompanies.length === 0 ? (
                        <>
                          {Object.values(data.dashboard.companies).map(
                            (company) =>
                              Object.values(company.products).map((product) => {
                                const isSelected = selectedProducts.includes(
                                  product.product_id,
                                );

                                return (
                                  <CommandItem
                                    key={product.product_id}
                                    onSelect={() =>
                                      handleSelectProducts(product.product_id)
                                    }
                                    className="flex items-center justify-between cursor-pointer rounded-md px-3 py-2 my-1"
                                  >
                                    {product.product_name}

                                    {isSelected && (
                                      <Check
                                        className="text-primary"
                                        size={16}
                                      />
                                    )}
                                  </CommandItem>
                                );
                              }),
                          )}
                        </>
                      ) : (
                        <>
                          {Object.values(data.dashboard.companies)
                            .filter((company) =>
                              selectedCompanies.includes(company.company_id),
                            )
                            .flatMap((company) =>
                              Object.values(company.products),
                            )
                            .map((product) => {
                              const isSelected = selectedProducts.includes(
                                product.product_id,
                              );

                              return (
                                <CommandItem
                                  key={product.product_id}
                                  onSelect={() =>
                                    handleSelectProducts(product.product_id)
                                  }
                                  className="flex justify-between cursor-pointer"
                                >
                                  {product.product_name}

                                  {isSelected && (
                                    <Check className="text-primary" size={16} />
                                  )}
                                </CommandItem>
                              );
                            })}
                        </>
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6 ">
            <Button onClick={handleClearFilter}>Clear Filters</Button>
          </div>
        </div>
      </div>
      <div className="w-full h-155 flex flex-row items-start gap-4">
        <div className="flex flex-col gap-3 w-[40%] h-full">
          <div className="w-full h-[56%] shadow-lg flex flex-col items-start border-2 rounded-md">
            <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-15 flex flex-row items-center justify-between">
              <div>
                <h3 className="font-semibold">Global Sentiment Velocity</h3>

                {selectedCompanies.length === 1 ? (
                  Object.values(data.dashboard.companies)
                    .filter((company) =>
                      selectedCompanies.includes(company.company_id),
                    )
                    .map((company) => (
                      <p
                        key={company.company_id}
                        className="text-neutral-500 text-sm"
                      >
                        {company.company_name}
                      </p>
                    ))
                ) : selectedCompanies.length > 1 ? (
                  <p className="text-neutral-500 text-sm">
                    {selectedCompanies.length} Companies Selected
                  </p>
                ) : selectedProducts.length > 0 ? (
                  (() => {
                    const matchedCompanies = Object.values(
                      data.dashboard.companies,
                    ).filter((company) =>
                      Object.values(company.products).some((product) =>
                        selectedProducts.includes(product.product_id),
                      ),
                    );

                    return matchedCompanies.length === 1 ? (
                      <p className="text-neutral-500 text-sm">
                        {matchedCompanies[0].company_name}
                      </p>
                    ) : (
                      <p className="text-neutral-500 text-sm">
                        {matchedCompanies.length} Companies Selected
                      </p>
                    );
                  })()
                ) : (
                  <p className="text-neutral-500 text-sm">All Companies</p>
                )}
              </div>
              <div>
                <div className="relative group">
                  <Info className="text-primary size-5 mr-2 cursor-pointer" />

                  <div className="absolute right-0 top-7 w-72 rounded-lg bg-neutral-900 text-white text-xs leading-5 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                    Tracks changes in overall customer sentiment over time
                    across companies and products. Positive spikes indicate
                    improved user satisfaction, while declines may signal
                    usability, performance, or support concerns.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full rounded-md">
              <SentimentGraph
                data={
                  selectedProducts.length > 0
                    ? Object.values(data.dashboard.companies)
                        .flatMap((company) => Object.values(company.products))
                        .filter((product) =>
                          selectedProducts.includes(product.product_id),
                        )
                        .flatMap((product) => product.data.sentiment_velocity)
                    : selectedCompanies.length > 0
                      ? Object.values(data.dashboard.companies)
                          .filter((company) =>
                            selectedCompanies.includes(company.company_id),
                          )
                          .flatMap((company) => Object.values(company.products))
                          .flatMap((product) => product.data.sentiment_velocity)
                      : data.dashboard.data.sentiment_velocity
                }
                product_name={
                  selectedProducts.length > 0
                    ? Object.values(data.dashboard.companies)
                        .flatMap((company) => Object.values(company.products))
                        .filter((product) =>
                          selectedProducts.includes(product.product_id),
                        )
                        .map((product) => product.product_name)
                    : selectedCompanies.length > 0
                      ? Object.values(data.dashboard.companies)
                          .filter((company) =>
                            selectedCompanies.includes(company.company_id),
                          )
                          .flatMap((company) => Object.values(company.products))
                          .map((product) => product.product_name)
                      : []
                }
              />
            </div>
          </div>
          <div className="w-full h-[44%] flex flex-col items-start border-2 rounded-md shadow-xl pb-3">
            <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-12 flex flex-row items-center justify-between">
              <h3 className="font-semibold">Automated Close-the-loop</h3>
              <div>
                <div className="relative group">
                  <Info className="text-primary size-5 mr-2 cursor-pointer" />

                  <div className="absolute right-0 top-7 w-72 rounded-lg bg-neutral-900 text-white text-xs leading-5 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                    Displays customer-impacting issues identified from feedback
                    and operational signals. Helps teams monitor issue
                    resolution progress and automate personalized customer
                    follow-ups.
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 w-full overflow-y-scroll scrollbar-hide">
              <div className="p-4 bg-neutral-100 w-full h-14 rounded-md flex flex-row justify-between items-center">
                <h3 className="font-bold">Issues</h3>
                <div className="flex flex-row gap-4">
                  <Button className="bg-white border-2 text-black hover:bg-neutral-100">
                    Generate Draft
                  </Button>
                  <Button>Send Immediately</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start mt-3">
                {(selectedProducts.length > 0
                  ? Object.values(data.dashboard.companies)
                      .flatMap((company) => Object.values(company.products))
                      .filter((product) =>
                        selectedProducts.includes(product.product_id),
                      )
                      .flatMap((product) => product.data.issues_metrics)
                  : selectedCompanies.length > 0
                    ? Object.values(data.dashboard.companies)
                        .filter((company) =>
                          selectedCompanies.includes(company.company_id),
                        )
                        .flatMap((company) => company.data.issues_metrics)
                    : data.dashboard.data.issues_metrics
                ).map((issue) => (
                  <div
                    key={issue.issue_id}
                    className="p-3 py-2 w-full flex rounded-md flex-row justify-between items-center border bg-neutral-50"
                  >
                    <div className="flex flex-row items-center gap-3">
                      <input type="checkbox" disabled />

                      <div className="flex flex-col">
                        <p className="font-bold text-sm">{issue.title}</p>

                        <span
                          className={`text-xs font-medium capitalize ${
                            issue.status === "resolved"
                              ? "text-green-600"
                              : issue.status === "in_progress"
                                ? "text-orange-500"
                                : "text-neutral-500"
                          }`}
                        >
                          {issue.status.replace("_", " ")}
                        </span>
                      </div>
                    </div>

                    <Button
                      disabled
                      className="px-2 py-1 cursor-not-allowed bg-white border-2 text-black hover:bg-white disabled:opacity-60"
                    >
                      Generate personalized email draft
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] overflow-hidden h-full flex flex-col items-start border-2 rounded-md shadow-xl">
          <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-15 flex flex-row items-center justify-between">
            <div>
              <h3 className="font-semibold">User Journey Heatmap</h3>
              <p className="text-neutral-500 text-sm">
                {selectedProducts.length > 0
                  ? Object.values(data.dashboard.companies)
                      .flatMap((company) => Object.values(company.products))
                      .filter((product) =>
                        selectedProducts.includes(product.product_id),
                      )[0]?.product_name
                  : ""}
              </p>
            </div>
            <div>
              <div className="relative group">
                <Info className="text-primary size-5 mr-2 cursor-pointer" />

                <div className="absolute right-0 top-7 w-72 rounded-lg bg-neutral-900 text-white text-xs leading-5 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                  This heatmap visualizes how users move through different
                  stages of the product journey. Link thickness represents user
                  traffic volume, while colors indicate sentiment intensity from
                  positive to critical negative experiences.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <HeatGraph
              data={
                selectedProducts.length === 0
                  ? undefined
                  : selectedProducts.length > 1
                    ? "Please select single product"
                    : selectedProducts.length === 1
                      ? Object.values(data.dashboard.companies)
                          .flatMap((company) => Object.values(company.products))
                          .find((product) =>
                            selectedProducts.includes(product.product_id),
                          )?.data.journey_heatmap
                      : selectedCompanies.length > 0
                        ? Object.values(data.dashboard.companies).find(
                            (company) =>
                              selectedCompanies.includes(company.company_id),
                          )?.data.journey_heatmap
                        : data.dashboard.data.journey_heatmap
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full h-100 flex flex-row items-start gap-4">
        <div className="w-[40%] h-full flex flex-col items-start border-2 rounded-md shadow-xl">
          <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-12 flex flex-row items-center justify-between">
            <h3 className="font-semibold">Team Collaboration & Annotations</h3>
          </div>
          <div className="w-full h-full rounded-md">
            <ChatBox data={data.comments} />
          </div>
        </div>
        <div className="w-[60%] h-full flex flex-col items-start border-2 pb-3 rounded-md shadow-xl">
          <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-12 flex flex-row items-center justify-between">
            <h3 className="font-semibold">Key Insights</h3>
          </div>
          <div className="w-full h-full rounded-md p-5 overflow-y-auto scrollbar-hide flex flex-col gap-4 bg-gradient-to-b from-white to-neutral-50">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold text-neutral-800">
                Strategic Insights & Opportunities
              </h2>

              <p className="text-sm text-neutral-500">
                AI-generated highlights derived from customer sentiment, product
                usage patterns, and behavioral signals.
              </p>
            </div>

            {(selectedProducts.length > 0
              ? Object.values(data.dashboard.companies)
                  .flatMap((company) => Object.values(company.products))
                  .filter((product) =>
                    selectedProducts.includes(product.product_id),
                  )
                  .flatMap((product) => product.data.key_insights)
              : selectedCompanies.length > 0
                ? Object.values(data.dashboard.companies)
                    .filter((company) =>
                      selectedCompanies.includes(company.company_id),
                    )
                    .flatMap((company) => company.data.key_insights)
                : data.dashboard.data.key_insights
            ).map((insight, index) => (
              <div
                key={index}
                className="group relative rounded-xl rounded-l-none border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-80" />

                <div className="pl-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />

                    <h3 className="font-semibold text-primary text-sm tracking-tight">
                      {insight.insight_name}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 mt-3 leading-6">
                    {insight.insight_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-106 flex flex-row items-start gap-4">
        <div className="w-[40%] h-full flex flex-col items-start border-2 rounded-md shadow-xl overflow-hidden">
          <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-15 flex flex-row items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Silence Metrics</h3>

              <p className="text-sm text-neutral-500">
                Features with low feedback activity but measurable satisfaction
                trends
              </p>
            </div>
          </div>

          <div className="w-full h-full p-4 overflow-y-auto scrollbar-hide flex flex-col gap-3 bg-gradient-to-b from-white to-neutral-50">
            {(selectedProducts.length > 0
              ? Object.values(data.dashboard.companies)
                  .flatMap((company) => Object.values(company.products))
                  .filter((product) =>
                    selectedProducts.includes(product.product_id),
                  )
                  .flatMap((product) => product.data.silence_metrics)
              : selectedCompanies.length > 0
                ? Object.values(data.dashboard.companies)
                    .filter((company) =>
                      selectedCompanies.includes(company.company_id),
                    )
                    .flatMap((company) => company.data.silence_metrics)
                : data.dashboard.data.silence_metrics
            ).map((metric, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-900">
                      {metric.feature_name}
                    </h3>

                    <p className="text-xs text-neutral-500 mt-1 capitalize">
                      Feedback Frequency: {metric.feedback_frequency}
                    </p>
                  </div>

                  <div
                    className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                      metric.satisfication_level === "positive"
                        ? "bg-green-100 text-green-700"
                        : metric.satisfication_level === "neutral"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {metric.satisfication_level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%] h-full flex flex-col items-start border-2 rounded-md shadow-xl">
          <div className="bg-neutral-100 text-black rounded-t-md p-3 w-full h-15 flex flex-row items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">
                Strategic Insights & Opportunities
              </h3>

              <p className="text-sm text-neutral-500">
                AI-generated highlights derived from customer sentiment, product
                usage patterns, and behavioral signals.
              </p>
            </div>
          </div>
          <div className="w-full h-full rounded-md p-5 overflow-y-auto scrollbar-hide flex flex-col gap-4 bg-gradient-to-b from-white to-neutral-50">
            {(selectedProducts.length > 0
              ? Object.values(data.dashboard.companies).filter((company) =>
                  Object.values(company.products).some((product) =>
                    selectedProducts.includes(product.product_id),
                  ),
                )
              : selectedCompanies.length > 0
                ? Object.values(data.dashboard.companies).filter((company) =>
                    selectedCompanies.includes(company.company_id),
                  )
                : Object.values(data.dashboard.companies)
            ).map((company, index) => (
              <div
                key={index}
                className="relative rounded-2xl rounded-t-none border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-primary" />

                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-800">
                      {company.company_name}
                    </h2>

                    <p className="text-sm text-neutral-500 mt-1">
                      Voice of customer highlights and silent behavioral
                      insights across products.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {Object.values(company.products)
                      .filter(
                        (product) =>
                          selectedProducts.length === 0 ||
                          selectedProducts.includes(product.product_id),
                      )
                      .map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="border-l-4 border-primary/70 pl-5 py-1"
                        >
                          <h3 className="font-semibold text-neutral-900 mb-2">
                            {product.product_name}
                          </h3>

                          <p className="text-[15px] leading-8 text-neutral-700">
                            {product.data.voc_digest} {product.data.voc_digest}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceOfCustomer;
