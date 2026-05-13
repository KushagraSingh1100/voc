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
    created_at: "2026-05-07T21:55:00Z",
    comments: [
      {
        comment_id: "c_5001",
        comment_text:
          "The branching at the 'Main Dashboard' confirms users are migrating from 'Reporting' to 'Advanced Analytics' since the v2.4 update.",
        comment_author: "pintu ji",
        comment_timestamp: "2026-05-07T20:15:00Z",
        comment_is_flagged: false,
        comment_is_deleted: false,
      },
      {
        comment_id: "c_5002",
        comment_text:
          "We should investigate the 'neutral' sentiment for the 'CSV Importer' silence metric. It suggests it works, but isn't delighting anyone.",
        comment_author: "artic (Tech Lead)",
        comment_timestamp: "2026-05-07T21:10:00Z",
        comment_is_flagged: false,
      },
    ],
    dashboard: {
      data: {
        sentiment_velocity: [
          {
            month_year: "Jun 2025",
            net_sentiment: -4.0,
          },
          {
            month_year: "Jul 2025",
            net_sentiment: 12.5,
          },
          {
            month_year: "Aug 2025",
            net_sentiment: -32.0,
          },
          {
            month_year: "Sep 2025",
            net_sentiment: -5.0,
          },
          {
            month_year: "Oct 2025",
            net_sentiment: 18.2,
          },
          {
            month_year: "Nov 2025",
            net_sentiment: 45.0,
          },
          {
            month_year: "Dec 2025",
            net_sentiment: 2.0,
          },
          {
            month_year: "Jan 2026",
            net_sentiment: -8.5,
          },
          {
            month_year: "Feb 2026",
            net_sentiment: 12.1,
          },
          {
            month_year: "Mar 2026",
            net_sentiment: -14.3,
          },
          {
            month_year: "Apr 2026",
            net_sentiment: 25.6,
          },
          {
            month_year: "May 2026",
            net_sentiment: 38.9,
          },
        ],
        journey_heatmap: {
          stages: [
            {
              stage_name: "Onboarding",
              nodes: [
                "nd_welcome",
                "nd_help",
                "nd_verify",
                "nd_tour",
                "nd_skip_tour",
              ],
            },

            {
              stage_name: "Setup",
              nodes: ["nd_profile", "nd_config", "nd_templates", "nd_api_keys"],
            },

            {
              stage_name: "Daily Use",
              nodes: [
                "nd_dash",
                "nd_reporting",
                "nd_ai",
                "nd_settings",
                "nd_export",
              ],
            },
          ],
          journey: {
            order: [
              "nd_welcome",
              "nd_help",
              "nd_verify",
              "nd_tour",
              "nd_skip_tour",
              "nd_profile",
              "nd_config",
              "nd_templates",
              "nd_api_keys",
              "nd_dash",
              "nd_reporting",
              "nd_ai",
              "nd_settings",
              "nd_export",
            ],
            nodes: {
              nd_welcome: {
                _id: "nd_welcome",
                step_name: "Welcome Screen",
                x: 80,
                y: 180,
                links: {
                  nd_verify: {
                    source_id: "nd_welcome",
                    target_id: "nd_verify",
                    user_traffic: 62000,
                    sentiment_intensity: {
                      positive: 0.88,
                      negative: 0.02,
                      neutral: 0.1,
                    },
                    insight_label: "High interest landing",
                  },
                  nd_help: {
                    source_id: "nd_welcome",
                    target_id: "nd_help",
                    user_traffic: 8000,
                    sentiment_intensity: {
                      positive: 0.45,
                      negative: 0.25,
                      neutral: 0.3,
                    },
                    insight_label: "Users exploring onboarding help",
                  },
                },
              },

              nd_help: {
                _id: "nd_help",
                step_name: "Help Center",
                x: 260,
                y: 80,
                links: {
                  nd_verify: {
                    source_id: "nd_help",
                    target_id: "nd_verify",
                    user_traffic: 6200,
                    sentiment_intensity: {
                      positive: 0.55,
                      negative: 0.12,
                      neutral: 0.33,
                    },
                    insight_label: "Recovered onboarding flow",
                  },
                },
              },

              nd_verify: {
                _id: "nd_verify",
                step_name: "SSO Verification",
                x: 260,
                y: 180,
                links: {
                  nd_tour: {
                    source_id: "nd_verify",
                    target_id: "nd_tour",
                    user_traffic: 48000,
                    sentiment_intensity: {
                      positive: 0.55,
                      negative: 0.15,
                      neutral: 0.3,
                    },
                    insight_label: "Standard auth drop-off",
                  },

                  nd_skip_tour: {
                    source_id: "nd_verify",
                    target_id: "nd_skip_tour",
                    user_traffic: 12000,
                    sentiment_intensity: {
                      positive: 0.82,
                      negative: 0.04,
                      neutral: 0.14,
                    },
                    insight_label: "Power users skipping walkthrough",
                  },
                },
              },

              nd_tour: {
                _id: "nd_tour",
                step_name: "Interactive Tour",
                x: 500,
                y: 140,
                insight_label: "Friction Point",
                links: {
                  nd_profile: {
                    source_id: "nd_tour",
                    target_id: "nd_profile",
                    user_traffic: 22000,
                    sentiment_intensity: {
                      positive: 0.12,
                      negative: 0.75,
                      neutral: 0.13,
                    },
                    insight_label: "Tour is perceived as too lengthy",
                  },
                },
              },

              nd_skip_tour: {
                _id: "nd_skip_tour",
                step_name: "Skip Walkthrough",
                x: 500,
                y: 260,
                links: {
                  nd_profile: {
                    source_id: "nd_skip_tour",
                    target_id: "nd_profile",
                    user_traffic: 10000,
                    sentiment_intensity: {
                      positive: 0.88,
                      negative: 0.02,
                      neutral: 0.1,
                    },
                    insight_label: "Experienced users moving faster",
                  },
                },
              },

              nd_profile: {
                _id: "nd_profile",
                step_name: "Profile Setup",
                x: 760,
                y: 180,
                links: {
                  nd_config: {
                    source_id: "nd_profile",
                    target_id: "nd_config",
                    user_traffic: 20500,
                    sentiment_intensity: {
                      positive: 0.7,
                      negative: 0.05,
                      neutral: 0.25,
                    },
                  },
                },
              },

              nd_config: {
                _id: "nd_config",
                step_name: "Feature Config",
                x: 1020,
                y: 180,
                links: {
                  nd_api_keys: {
                    source_id: "nd_config",
                    target_id: "nd_api_keys",
                    user_traffic: 18200,
                    sentiment_intensity: {
                      positive: 0.4,
                      negative: 0.3,
                      neutral: 0.3,
                    },
                    insight_label: "Schema validation complexity",
                  },

                  nd_templates: {
                    source_id: "nd_config",
                    target_id: "nd_templates",
                    user_traffic: 4200,
                    sentiment_intensity: {
                      positive: 0.82,
                      negative: 0.04,
                      neutral: 0.14,
                    },
                    insight_label: "Users adopting preset templates",
                  },
                },
              },

              nd_templates: {
                _id: "nd_templates",
                step_name: "Templates",
                x: 1260,
                y: 100,
                links: {
                  nd_dash: {
                    source_id: "nd_templates",
                    target_id: "nd_dash",
                    user_traffic: 3900,
                    sentiment_intensity: {
                      positive: 0.9,
                      negative: 0.01,
                      neutral: 0.09,
                    },
                  },
                },
              },

              nd_api_keys: {
                _id: "nd_api_keys",
                step_name: "API Credentials",
                x: 1260,
                y: 260,
                links: {
                  nd_dash: {
                    source_id: "nd_api_keys",
                    target_id: "nd_dash",
                    user_traffic: 15500,
                    sentiment_intensity: {
                      positive: 0.92,
                      negative: 0.01,
                      neutral: 0.07,
                    },
                  },
                },
              },

              nd_dash: {
                _id: "nd_dash",
                step_name: "Main Dashboard",
                x: 1520,
                y: 180,
                insight_label: "Hub Node",
                links: {
                  nd_reporting: {
                    source_id: "nd_dash",
                    target_id: "nd_reporting",
                    user_traffic: 9000,
                    sentiment_intensity: {
                      positive: 0.85,
                      negative: 0.02,
                      neutral: 0.13,
                    },
                    insight_label: "Primary Utility Path",
                  },

                  nd_settings: {
                    source_id: "nd_dash",
                    target_id: "nd_settings",
                    user_traffic: 3500,
                    sentiment_intensity: {
                      positive: 0.3,
                      negative: 0.2,
                      neutral: 0.5,
                    },
                  },

                  nd_export: {
                    source_id: "nd_dash",
                    target_id: "nd_export",
                    user_traffic: 3000,
                    sentiment_intensity: {
                      positive: 0.6,
                      negative: 0.05,
                      neutral: 0.35,
                    },
                  },

                  nd_ai: {
                    source_id: "nd_dash",
                    target_id: "nd_ai",
                    user_traffic: 7200,
                    sentiment_intensity: {
                      positive: 0.95,
                      negative: 0.01,
                      neutral: 0.04,
                    },
                    insight_label: "AI analytics becoming dominant flow",
                  },
                },
              },

              nd_reporting: {
                _id: "nd_reporting",
                step_name: "Advanced Reporting",
                x: 1780,
                y: 60,
                links: {},
              },

              nd_ai: {
                _id: "nd_ai",
                step_name: "AI Insights",
                x: 1780,
                y: 140,
                links: {},
              },

              nd_settings: {
                _id: "nd_settings",
                step_name: "System Settings",
                x: 1780,
                y: 220,
                links: {},
              },

              nd_export: {
                _id: "nd_export",
                step_name: "Data Export",
                x: 1780,
                y: 300,
                links: {},
              },
            },
          },
        },
        silence_metrics: [
          {
            feature_name: "SSO Handshake",
            feedback_frequency: "low",
            satisfication_level: "positive",
          },
          {
            feature_name: "CSV Importer",
            feedback_frequency: "medium",
            satisfication_level: "neutral",
          },
          {
            feature_name: "Dark Mode v2",
            feedback_frequency: "low",
            satisfication_level: "positive",
          },
          {
            feature_name: "Legacy PDF Engine",
            feedback_frequency: "low",
            satisfication_level: "negative",
          },
        ],
        issues_metrics: [
          {
            issue_id: "ISS-881",
            title: "FastAPI Async Worker Starvation",
            status: "resolved",
            send_custom_email: true,
            custom_email_subject: "Performance issues resolved",
            custom_email_recipients: [
              "pintui@micorza.com",
              "artic@micorza.com",
            ],
          },
          {
            issue_id: "ISS-885",
            title: "OAuth2 State Mismatch on Mobile",
            status: "in_progress",
          },
        ],
        key_insights: [
          {
            insight_name: "The 'Silence' Opportunity",
            insight_description:
              "Audit logs have zero feedback but 100% enterprise usage; candidate for expansion.",
          },
          {
            insight_name: "API Value Prop",
            insight_description:
              "Users connecting API keys show a 5.5x higher LTV than UI-only users.",
          },
        ],
        voc_digest:
          "Global health is robust. Sentiment velocity is at a 12-month peak following the FastAPI optimizations and SSO stability fixes.",
      },
      companies: {
        micorza_ent: {
          company_id: "micorza_ent",
          company_name: "Micorza Enterprises",
          data: {
            sentiment_velocity: [
              {
                month_year: "Mar 2026",
                net_sentiment: 15.0,
              },
              {
                month_year: "Apr 2026",
                net_sentiment: 28.4,
              },
              {
                month_year: "May 2026",
                net_sentiment: 41.2,
              },
            ],
            journey_heatmap: {
              stages: [
                {
                  stage_name: "Portfolio Entry",
                  nodes: ["nd_ent_portal", "nd_ent_help", "nd_ent_auth"],
                },

                {
                  stage_name: "Workspace Selection",
                  nodes: ["nd_ent_switcher", "nd_ent_recent"],
                },

                {
                  stage_name: "Navigation",
                  nodes: ["nd_ent_collection", "nd_ent_ask", "nd_ent_admin"],
                },
              ],
              journey: {
                order: [
                  "nd_ent_portal",
                  "nd_ent_help",
                  "nd_ent_auth",
                  "nd_ent_switcher",
                  "nd_ent_recent",
                  "nd_ent_collection",
                  "nd_ent_ask",
                  "nd_ent_admin",
                ],
                nodes: {
                  nd_ent_portal: {
                    _id: "nd_ent_portal",
                    step_name: "Enterprise Portal",
                    x: 80,
                    y: 180,
                    links: {
                      nd_ent_auth: {
                        source_id: "nd_ent_portal",
                        target_id: "nd_ent_auth",
                        user_traffic: 12000,
                        sentiment_intensity: {
                          positive: 0.8,
                          negative: 0.05,
                          neutral: 0.15,
                        },
                      },

                      nd_ent_help: {
                        source_id: "nd_ent_portal",
                        target_id: "nd_ent_help",
                        user_traffic: 2500,
                        sentiment_intensity: {
                          positive: 0.55,
                          negative: 0.15,
                          neutral: 0.3,
                        },
                        insight_label: "Users reviewing onboarding docs",
                      },
                    },
                  },

                  nd_ent_help: {
                    _id: "nd_ent_help",
                    step_name: "Help Center",
                    x: 320,
                    y: 80,
                    links: {
                      nd_ent_auth: {
                        source_id: "nd_ent_help",
                        target_id: "nd_ent_auth",
                        user_traffic: 2100,
                        sentiment_intensity: {
                          positive: 0.72,
                          negative: 0.08,
                          neutral: 0.2,
                        },
                      },
                    },
                  },

                  nd_ent_auth: {
                    _id: "nd_ent_auth",
                    step_name: "SSO Handshake",
                    x: 320,
                    y: 220,
                    links: {
                      nd_ent_switcher: {
                        source_id: "nd_ent_auth",
                        target_id: "nd_ent_switcher",
                        user_traffic: 11500,
                        sentiment_intensity: {
                          positive: 0.9,
                          negative: 0.01,
                          neutral: 0.09,
                        },
                      },

                      nd_ent_recent: {
                        source_id: "nd_ent_auth",
                        target_id: "nd_ent_recent",
                        user_traffic: 3500,
                        sentiment_intensity: {
                          positive: 0.85,
                          negative: 0.02,
                          neutral: 0.13,
                        },
                        insight_label: "Returning users accessing recents",
                      },
                    },
                  },

                  nd_ent_switcher: {
                    _id: "nd_ent_switcher",
                    step_name: "App Selection Hub",
                    x: 620,
                    y: 140,
                    links: {
                      nd_ent_collection: {
                        source_id: "nd_ent_switcher",
                        target_id: "nd_ent_collection",
                        user_traffic: 6200,
                        sentiment_intensity: {
                          positive: 0.88,
                          negative: 0.02,
                          neutral: 0.1,
                        },
                      },

                      nd_ent_ask: {
                        source_id: "nd_ent_switcher",
                        target_id: "nd_ent_ask",
                        user_traffic: 5100,
                        sentiment_intensity: {
                          positive: 0.95,
                          negative: 0.01,
                          neutral: 0.04,
                        },
                      },
                    },
                  },

                  nd_ent_recent: {
                    _id: "nd_ent_recent",
                    step_name: "Recent Workspaces",
                    x: 620,
                    y: 280,
                    links: {
                      nd_ent_admin: {
                        source_id: "nd_ent_recent",
                        target_id: "nd_ent_admin",
                        user_traffic: 2600,
                        sentiment_intensity: {
                          positive: 0.72,
                          negative: 0.08,
                          neutral: 0.2,
                        },
                      },
                    },
                  },

                  nd_ent_collection: {
                    _id: "nd_ent_collection",
                    step_name: "Collection Micorza",
                    x: 920,
                    y: 100,
                    links: {},
                  },

                  nd_ent_ask: {
                    _id: "nd_ent_ask",
                    step_name: "Ask Micorza",
                    x: 920,
                    y: 180,
                    links: {},
                  },

                  nd_ent_admin: {
                    _id: "nd_ent_admin",
                    step_name: "Admin Controls",
                    x: 920,
                    y: 280,
                    links: {},
                  },
                },
              },
            },
            silence_metrics: [
              {
                feature_name: "Admin Audit Logs",
                feedback_frequency: "low",
                satisfication_level: "positive",
              },
              {
                feature_name: "Billing Dashboard",
                feedback_frequency: "medium",
                satisfication_level: "neutral",
              },
            ],
            issues_metrics: [
              {
                issue_id: "ISS-ENT-101",
                title: "LDAP Sync Latency",
                status: "resolved",
              },
            ],
            key_insights: [
              {
                insight_name: "SSO Adoption",
                insight_description:
                  "98% of Enterprise users are now utilizing the centralized SSO flow.",
              },
            ],
            voc_digest:
              "Enterprise-specific nodes show extremely high affinity for 'Ask Micorza' RAG features and seamless SSO transitions.",
          },
          products: {
            prod_collection: {
              product_id: "prod_collection",
              product_name: "Collection Micorza",
              data: {
                sentiment_velocity: [
                  {
                    month_year: "Mar 2026",
                    net_sentiment: 12.0,
                  },
                  {
                    month_year: "Apr 2026",
                    net_sentiment: 32.5,
                  },
                  {
                    month_year: "May 2026",
                    net_sentiment: 48.5,
                  },
                ],
                journey_heatmap: {
                  stages: [
                    {
                      stage_name: "Ingestion",
                      nodes: ["nd_col_upload", "nd_col_manual", "nd_col_parse"],
                    },

                    {
                      stage_name: "Processing",
                      nodes: ["nd_col_retry", "nd_col_async"],
                    },

                    {
                      stage_name: "Delivery",
                      nodes: ["nd_col_export", "nd_col_analytics"],
                    },
                  ],

                  journey: {
                    order: [
                      "nd_col_upload",
                      "nd_col_manual",
                      "nd_col_parse",
                      "nd_col_retry",
                      "nd_col_async",
                      "nd_col_export",
                      "nd_col_analytics",
                    ],

                    nodes: {
                      nd_col_upload: {
                        _id: "nd_col_upload",
                        step_name: "Bulk Upload",
                        x: 80,
                        y: 180,

                        links: {
                          nd_col_parse: {
                            source_id: "nd_col_upload",
                            target_id: "nd_col_parse",
                            user_traffic: 8000,

                            sentiment_intensity: {
                              positive: 0.75,
                              negative: 0.1,
                              neutral: 0.15,
                            },
                          },

                          nd_col_manual: {
                            source_id: "nd_col_upload",
                            target_id: "nd_col_manual",
                            user_traffic: 2200,

                            sentiment_intensity: {
                              positive: 0.55,
                              negative: 0.18,
                              neutral: 0.27,
                            },

                            insight_label: "Manual validation fallback usage",
                          },
                        },
                      },

                      nd_col_manual: {
                        _id: "nd_col_manual",
                        step_name: "Manual Review",
                        x: 320,
                        y: 80,

                        links: {
                          nd_col_parse: {
                            source_id: "nd_col_manual",
                            target_id: "nd_col_parse",
                            user_traffic: 1800,

                            sentiment_intensity: {
                              positive: 0.62,
                              negative: 0.12,
                              neutral: 0.26,
                            },
                          },
                        },
                      },

                      nd_col_parse: {
                        _id: "nd_col_parse",
                        step_name: "Pydantic Parsing",
                        x: 420,
                        y: 220,

                        links: {
                          nd_col_async: {
                            source_id: "nd_col_parse",
                            target_id: "nd_col_async",
                            user_traffic: 7800,

                            sentiment_intensity: {
                              positive: 0.9,
                              negative: 0.05,
                              neutral: 0.05,
                            },

                            insight_label:
                              "Significant speed improvement in v2",
                          },

                          nd_col_retry: {
                            source_id: "nd_col_parse",
                            target_id: "nd_col_retry",
                            user_traffic: 1200,

                            sentiment_intensity: {
                              positive: 0.25,
                              negative: 0.52,
                              neutral: 0.23,
                            },

                            insight_label: "Schema mismatch retry path",
                          },
                        },
                      },

                      nd_col_retry: {
                        _id: "nd_col_retry",
                        step_name: "Retry Queue",
                        x: 620,
                        y: 320,

                        links: {
                          nd_col_async: {
                            source_id: "nd_col_retry",
                            target_id: "nd_col_async",
                            user_traffic: 900,

                            sentiment_intensity: {
                              positive: 0.45,
                              negative: 0.22,
                              neutral: 0.33,
                            },
                          },
                        },
                      },

                      nd_col_async: {
                        _id: "nd_col_async",
                        step_name: "Async Task Queue",
                        x: 620,
                        y: 180,

                        links: {
                          nd_col_export: {
                            source_id: "nd_col_async",
                            target_id: "nd_col_export",
                            user_traffic: 7500,

                            sentiment_intensity: {
                              positive: 0.85,
                              negative: 0.02,
                              neutral: 0.13,
                            },
                          },

                          nd_col_analytics: {
                            source_id: "nd_col_async",
                            target_id: "nd_col_analytics",
                            user_traffic: 3400,

                            sentiment_intensity: {
                              positive: 0.91,
                              negative: 0.01,
                              neutral: 0.08,
                            },

                            insight_label: "Analytics usage increasing rapidly",
                          },
                        },
                      },

                      nd_col_export: {
                        _id: "nd_col_export",
                        step_name: "Final Export",
                        x: 920,
                        y: 120,
                        links: {},
                      },

                      nd_col_analytics: {
                        _id: "nd_col_analytics",
                        step_name: "Analytics Dashboard",
                        x: 920,
                        y: 240,
                        links: {},
                      },
                    },
                  },
                },
                silence_metrics: [
                  {
                    feature_name: "Bulk Fetch",
                    feedback_frequency: "low",
                    satisfication_level: "positive",
                  },
                  {
                    feature_name: "Schema Mapping",
                    feedback_frequency: "medium",
                    satisfication_level: "neutral",
                  },
                ],
                issues_metrics: [
                  {
                    issue_id: "ISS-901",
                    title: "Memory leak in large payload parsing",
                    status: "resolved",
                    send_custom_email: true,
                    custom_email_subject: "Performance Patch: Large Files",
                  },
                ],
                key_insights: [
                  {
                    insight_name: "Efficiency Gains",
                    insight_description:
                      "Async batching reduced processing time by 65% for datasets over 100MB.",
                  },
                ],
                voc_digest:
                  "Highest performing product in the suite for Q2 2026. Stability is the key driver of positive mentions.",
              },
            },
            prod_ask: {
              product_id: "prod_ask",
              product_name: "Ask Micorza",
              data: {
                sentiment_velocity: [
                  {
                    month_year: "Mar 2026",
                    net_sentiment: 10.2,
                  },
                  {
                    month_year: "Apr 2026",
                    net_sentiment: 22.0,
                  },
                  {
                    month_year: "May 2026",
                    net_sentiment: 35.0,
                  },
                ],
                journey_heatmap: {
                  stages: [
                    {
                      stage_name: "Query",
                      nodes: [
                        "nd_ask_input",
                        "nd_ask_templates",
                        "nd_ask_search",
                      ],
                    },

                    {
                      stage_name: "Processing",
                      nodes: ["nd_ask_retry", "nd_ask_gen"],
                    },

                    {
                      stage_name: "Validation",
                      nodes: ["nd_ask_feedback", "nd_ask_citations"],
                    },
                  ],

                  journey: {
                    order: [
                      "nd_ask_input",
                      "nd_ask_templates",
                      "nd_ask_search",
                      "nd_ask_retry",
                      "nd_ask_gen",
                      "nd_ask_feedback",
                      "nd_ask_citations",
                    ],

                    nodes: {
                      nd_ask_input: {
                        _id: "nd_ask_input",
                        step_name: "Natural Language Input",
                        x: 80,
                        y: 180,

                        links: {
                          nd_ask_search: {
                            source_id: "nd_ask_input",
                            target_id: "nd_ask_search",
                            user_traffic: 15000,

                            sentiment_intensity: {
                              positive: 0.85,
                              negative: 0.05,
                              neutral: 0.1,
                            },
                          },

                          nd_ask_templates: {
                            source_id: "nd_ask_input",
                            target_id: "nd_ask_templates",
                            user_traffic: 4200,

                            sentiment_intensity: {
                              positive: 0.82,
                              negative: 0.04,
                              neutral: 0.14,
                            },

                            insight_label:
                              "Prompt templates becoming preferred flow",
                          },
                        },
                      },

                      nd_ask_templates: {
                        _id: "nd_ask_templates",
                        step_name: "Prompt Templates",
                        x: 320,
                        y: 80,

                        links: {
                          nd_ask_search: {
                            source_id: "nd_ask_templates",
                            target_id: "nd_ask_search",
                            user_traffic: 3900,

                            sentiment_intensity: {
                              positive: 0.91,
                              negative: 0.01,
                              neutral: 0.08,
                            },
                          },
                        },
                      },

                      nd_ask_search: {
                        _id: "nd_ask_search",
                        step_name: "Semantic RAG Retrieval",
                        x: 320,
                        y: 220,

                        links: {
                          nd_ask_gen: {
                            source_id: "nd_ask_search",
                            target_id: "nd_ask_gen",
                            user_traffic: 14200,

                            sentiment_intensity: {
                              positive: 0.95,
                              negative: 0.01,
                              neutral: 0.04,
                            },

                            insight_label: "High accuracy retrieval",
                          },

                          nd_ask_retry: {
                            source_id: "nd_ask_search",
                            target_id: "nd_ask_retry",
                            user_traffic: 1100,

                            sentiment_intensity: {
                              positive: 0.35,
                              negative: 0.42,
                              neutral: 0.23,
                            },

                            insight_label: "Low confidence retrieval retry",
                          },
                        },
                      },

                      nd_ask_retry: {
                        _id: "nd_ask_retry",
                        step_name: "Context Retry",
                        x: 620,
                        y: 320,

                        links: {
                          nd_ask_gen: {
                            source_id: "nd_ask_retry",
                            target_id: "nd_ask_gen",
                            user_traffic: 850,

                            sentiment_intensity: {
                              positive: 0.55,
                              negative: 0.18,
                              neutral: 0.27,
                            },
                          },
                        },
                      },

                      nd_ask_gen: {
                        _id: "nd_ask_gen",
                        step_name: "LLM Generation",
                        x: 620,
                        y: 180,

                        links: {
                          nd_ask_feedback: {
                            source_id: "nd_ask_gen",
                            target_id: "nd_ask_feedback",
                            user_traffic: 13800,

                            sentiment_intensity: {
                              positive: 0.9,
                              negative: 0.02,
                              neutral: 0.08,
                            },
                          },

                          nd_ask_citations: {
                            source_id: "nd_ask_gen",
                            target_id: "nd_ask_citations",
                            user_traffic: 5200,

                            sentiment_intensity: {
                              positive: 0.94,
                              negative: 0.01,
                              neutral: 0.05,
                            },

                            insight_label: "Users validating generated answers",
                          },
                        },
                      },

                      nd_ask_feedback: {
                        _id: "nd_ask_feedback",
                        step_name: "User Rating",
                        x: 920,
                        y: 120,
                        links: {},
                      },

                      nd_ask_citations: {
                        _id: "nd_ask_citations",
                        step_name: "Citation Review",
                        x: 920,
                        y: 240,
                        links: {},
                      },
                    },
                  },
                },
                silence_metrics: [
                  {
                    feature_name: "Semantic Search",
                    feedback_frequency: "high",
                    satisfication_level: "positive",
                  },
                  {
                    feature_name: "Citation Tool",
                    feedback_frequency: "low",
                    satisfication_level: "positive",
                  },
                ],
                issues_metrics: [
                  {
                    issue_id: "ISS-902",
                    title: "Context window UI warning",
                    status: "in_progress",
                  },
                  {
                    issue_id: "ISS-905",
                    title: "Latex rendering in chat",
                    status: "resolved",
                  },
                ],
                key_insights: [
                  {
                    insight_name: "AI Reliability",
                    insight_description:
                      "RAG pipeline has reached 99.8% factual accuracy based on internal benchmarks.",
                  },
                ],
                voc_digest:
                  "Strong growth in AI-driven support tickets usage. The cite-source feature is the most requested 'silent' win.",
              },
            },
          },
        },
        micorza_two: {
          company_id: "micorza_two",
          company_name: "Micorza Enterprises 2",
          data: {
            sentiment_velocity: [
              {
                month_year: "Mar 2026",
                net_sentiment: 25.0,
              },
              {
                month_year: "Apr 2026",
                net_sentiment: 38.4,
              },
              {
                month_year: "May 2026",
                net_sentiment: 51.2,
              },
            ],
            journey_heatmap: {
              stages: [
                {
                  stage_name: "Ingestion",
                  nodes: ["nd_col_upload", "nd_col_manual", "nd_col_parse"],
                },

                {
                  stage_name: "Processing",
                  nodes: ["nd_col_retry", "nd_col_async"],
                },

                {
                  stage_name: "Delivery",
                  nodes: ["nd_col_export", "nd_col_analytics"],
                },
              ],

              journey: {
                order: [
                  "nd_col_upload",
                  "nd_col_manual",
                  "nd_col_parse",
                  "nd_col_retry",
                  "nd_col_async",
                  "nd_col_export",
                  "nd_col_analytics",
                ],

                nodes: {
                  nd_col_upload: {
                    _id: "nd_col_upload",
                    step_name: "Bulk Upload",
                    x: 80,
                    y: 180,

                    links: {
                      nd_col_parse: {
                        source_id: "nd_col_upload",
                        target_id: "nd_col_parse",
                        user_traffic: 8000,

                        sentiment_intensity: {
                          positive: 0.75,
                          negative: 0.1,
                          neutral: 0.15,
                        },
                      },

                      nd_col_manual: {
                        source_id: "nd_col_upload",
                        target_id: "nd_col_manual",
                        user_traffic: 2200,

                        sentiment_intensity: {
                          positive: 0.55,
                          negative: 0.18,
                          neutral: 0.27,
                        },

                        insight_label: "Manual validation fallback usage",
                      },
                    },
                  },

                  nd_col_manual: {
                    _id: "nd_col_manual",
                    step_name: "Manual Review",
                    x: 320,
                    y: 80,

                    links: {
                      nd_col_parse: {
                        source_id: "nd_col_manual",
                        target_id: "nd_col_parse",
                        user_traffic: 1800,

                        sentiment_intensity: {
                          positive: 0.62,
                          negative: 0.12,
                          neutral: 0.26,
                        },
                      },
                    },
                  },

                  nd_col_parse: {
                    _id: "nd_col_parse",
                    step_name: "Pydantic Parsing",
                    x: 320,
                    y: 220,

                    links: {
                      nd_col_async: {
                        source_id: "nd_col_parse",
                        target_id: "nd_col_async",
                        user_traffic: 7800,

                        sentiment_intensity: {
                          positive: 0.9,
                          negative: 0.05,
                          neutral: 0.05,
                        },

                        insight_label: "Significant speed improvement in v2",
                      },

                      nd_col_retry: {
                        source_id: "nd_col_parse",
                        target_id: "nd_col_retry",
                        user_traffic: 1200,

                        sentiment_intensity: {
                          positive: 0.25,
                          negative: 0.52,
                          neutral: 0.23,
                        },

                        insight_label: "Schema mismatch retry path",
                      },
                    },
                  },

                  nd_col_retry: {
                    _id: "nd_col_retry",
                    step_name: "Retry Queue",
                    x: 620,
                    y: 320,

                    links: {
                      nd_col_async: {
                        source_id: "nd_col_retry",
                        target_id: "nd_col_async",
                        user_traffic: 900,

                        sentiment_intensity: {
                          positive: 0.45,
                          negative: 0.22,
                          neutral: 0.33,
                        },
                      },
                    },
                  },

                  nd_col_async: {
                    _id: "nd_col_async",
                    step_name: "Async Task Queue",
                    x: 620,
                    y: 180,

                    links: {
                      nd_col_export: {
                        source_id: "nd_col_async",
                        target_id: "nd_col_export",
                        user_traffic: 7500,

                        sentiment_intensity: {
                          positive: 0.85,
                          negative: 0.02,
                          neutral: 0.13,
                        },
                      },

                      nd_col_analytics: {
                        source_id: "nd_col_async",
                        target_id: "nd_col_analytics",
                        user_traffic: 3400,

                        sentiment_intensity: {
                          positive: 0.91,
                          negative: 0.01,
                          neutral: 0.08,
                        },

                        insight_label: "Analytics usage increasing rapidly",
                      },
                    },
                  },

                  nd_col_export: {
                    _id: "nd_col_export",
                    step_name: "Final Export",
                    x: 920,
                    y: 120,
                    links: {},
                  },

                  nd_col_analytics: {
                    _id: "nd_col_analytics",
                    step_name: "Analytics Dashboard",
                    x: 920,
                    y: 240,
                    links: {},
                  },
                },
              },
            },
            silence_metrics: [
              {
                feature_name: "Admin Audit Logs",
                feedback_frequency: "low",
                satisfication_level: "positive",
              },
              {
                feature_name: "Billing Dashboard",
                feedback_frequency: "medium",
                satisfication_level: "neutral",
              },
            ],
            issues_metrics: [
              {
                issue_id: "ISS-ENT-101",
                title: "LDAP Sync Latency",
                status: "resolved",
              },
            ],
            key_insights: [
              {
                insight_name: "SSO Adoption",
                insight_description:
                  "98% of Enterprise users are now utilizing the centralized SSO flow.",
              },
            ],
            voc_digest:
              "Enterprise-specific nodes show extremely high affinity for 'Ask Micorza' RAG features and seamless SSO transitions.",
          },
          products: {
            demo_collection: {
              product_id: "demo_collection",
              product_name: "Demo Collection Micorza",
              data: {
                sentiment_velocity: [
                  {
                    month_year: "Mar 2026",
                    net_sentiment: 12.0,
                  },
                  {
                    month_year: "Apr 2026",
                    net_sentiment: 32.5,
                  },
                  {
                    month_year: "May 2026",
                    net_sentiment: 48.5,
                  },
                ],
                journey_heatmap: {
                  stages: [
                    {
                      stage_name: "Query",
                      nodes: [
                        "nd_ask_input",
                        "nd_ask_templates",
                        "nd_ask_search",
                      ],
                    },

                    {
                      stage_name: "Processing",
                      nodes: ["nd_ask_retry", "nd_ask_gen"],
                    },

                    {
                      stage_name: "Validation",
                      nodes: ["nd_ask_feedback", "nd_ask_citations"],
                    },
                  ],

                  journey: {
                    order: [
                      "nd_ask_input",
                      "nd_ask_templates",
                      "nd_ask_search",
                      "nd_ask_retry",
                      "nd_ask_gen",
                      "nd_ask_feedback",
                      "nd_ask_citations",
                    ],

                    nodes: {
                      nd_ask_input: {
                        _id: "nd_ask_input",
                        step_name: "Natural Language Input",
                        x: 80,
                        y: 180,

                        links: {
                          nd_ask_search: {
                            source_id: "nd_ask_input",
                            target_id: "nd_ask_search",
                            user_traffic: 15000,

                            sentiment_intensity: {
                              positive: 0.85,
                              negative: 0.05,
                              neutral: 0.1,
                            },
                          },

                          nd_ask_templates: {
                            source_id: "nd_ask_input",
                            target_id: "nd_ask_templates",
                            user_traffic: 4200,

                            sentiment_intensity: {
                              positive: 0.82,
                              negative: 0.04,
                              neutral: 0.14,
                            },

                            insight_label:
                              "Prompt templates becoming preferred flow",
                          },
                        },
                      },

                      nd_ask_templates: {
                        _id: "nd_ask_templates",
                        step_name: "Prompt Templates",
                        x: 320,
                        y: 80,

                        links: {
                          nd_ask_search: {
                            source_id: "nd_ask_templates",
                            target_id: "nd_ask_search",
                            user_traffic: 3900,

                            sentiment_intensity: {
                              positive: 0.91,
                              negative: 0.01,
                              neutral: 0.08,
                            },
                          },
                        },
                      },

                      nd_ask_search: {
                        _id: "nd_ask_search",
                        step_name: "Semantic RAG Retrieval",
                        x: 320,
                        y: 220,

                        links: {
                          nd_ask_gen: {
                            source_id: "nd_ask_search",
                            target_id: "nd_ask_gen",
                            user_traffic: 14200,

                            sentiment_intensity: {
                              positive: 0.95,
                              negative: 0.01,
                              neutral: 0.04,
                            },

                            insight_label: "High accuracy retrieval",
                          },

                          nd_ask_retry: {
                            source_id: "nd_ask_search",
                            target_id: "nd_ask_retry",
                            user_traffic: 1100,

                            sentiment_intensity: {
                              positive: 0.35,
                              negative: 0.42,
                              neutral: 0.23,
                            },

                            insight_label: "Low confidence retrieval retry",
                          },
                        },
                      },

                      nd_ask_retry: {
                        _id: "nd_ask_retry",
                        step_name: "Context Retry",
                        x: 620,
                        y: 320,

                        links: {
                          nd_ask_gen: {
                            source_id: "nd_ask_retry",
                            target_id: "nd_ask_gen",
                            user_traffic: 850,

                            sentiment_intensity: {
                              positive: 0.55,
                              negative: 0.18,
                              neutral: 0.27,
                            },
                          },
                        },
                      },

                      nd_ask_gen: {
                        _id: "nd_ask_gen",
                        step_name: "LLM Generation",
                        x: 620,
                        y: 180,

                        links: {
                          nd_ask_feedback: {
                            source_id: "nd_ask_gen",
                            target_id: "nd_ask_feedback",
                            user_traffic: 13800,

                            sentiment_intensity: {
                              positive: 0.9,
                              negative: 0.02,
                              neutral: 0.08,
                            },
                          },

                          nd_ask_citations: {
                            source_id: "nd_ask_gen",
                            target_id: "nd_ask_citations",
                            user_traffic: 5200,

                            sentiment_intensity: {
                              positive: 0.94,
                              negative: 0.01,
                              neutral: 0.05,
                            },

                            insight_label: "Users validating generated answers",
                          },
                        },
                      },

                      nd_ask_feedback: {
                        _id: "nd_ask_feedback",
                        step_name: "User Rating",
                        x: 920,
                        y: 120,
                        links: {},
                      },

                      nd_ask_citations: {
                        _id: "nd_ask_citations",
                        step_name: "Citation Review",
                        x: 920,
                        y: 240,
                        links: {},
                      },
                    },
                  },
                },
                silence_metrics: [
                  {
                    feature_name: "Bulk Fetch",
                    feedback_frequency: "low",
                    satisfication_level: "positive",
                  },
                  {
                    feature_name: "Schema Mapping",
                    feedback_frequency: "medium",
                    satisfication_level: "neutral",
                  },
                ],
                issues_metrics: [
                  {
                    issue_id: "ISS-901",
                    title: "Memory leak in large payload parsing",
                    status: "resolved",
                    send_custom_email: true,
                    custom_email_subject: "Performance Patch: Large Files",
                  },
                ],
                key_insights: [
                  {
                    insight_name: "Efficiency Gains",
                    insight_description:
                      "Async batching reduced processing time by 65% for datasets over 100MB.",
                  },
                ],
                voc_digest:
                  "Highest performing product in the suite for Q2 2026. Stability is the key driver of positive mentions.",
              },
            },
            demo_ask: {
              product_id: "demo_ask",
              product_name: "Demo Ask Micorza",
              data: {
                sentiment_velocity: [
                  {
                    month_year: "Mar 2026",
                    net_sentiment: 10.2,
                  },
                  {
                    month_year: "Apr 2026",
                    net_sentiment: 22.0,
                  },
                  {
                    month_year: "May 2026",
                    net_sentiment: 35.0,
                  },
                ],
                journey_heatmap: {
                  stages: [
                    {
                      stage_name: "Query",
                      nodes: ["nd_ask_input", "nd_ask_search"],
                    },
                    {
                      stage_name: "Response",
                      nodes: ["nd_ask_gen", "nd_ask_feedback"],
                    },
                  ],
                  journey: {
                    order: [
                      "nd_ask_input",
                      "nd_ask_search",
                      "nd_ask_gen",
                      "nd_ask_feedback",
                    ],
                    nodes: {
                      nd_ask_input: {
                        _id: "nd_ask_input",
                        step_name: "Natural Language Input",
                        links: {
                          nd_ask_search: {
                            source_id: "nd_ask_input",
                            target_id: "nd_ask_search",
                            user_traffic: 15000,
                            sentiment_intensity: {
                              positive: 0.85,
                              negative: 0.05,
                              neutral: 0.1,
                            },
                          },
                        },
                      },
                      nd_ask_search: {
                        _id: "nd_ask_search",
                        step_name: "Semantic RAG Retrieval",
                        links: {
                          nd_ask_gen: {
                            source_id: "nd_ask_search",
                            target_id: "nd_ask_gen",
                            user_traffic: 14200,
                            sentiment_intensity: {
                              positive: 0.95,
                              negative: 0.01,
                              neutral: 0.04,
                            },
                            insight_label: "High accuracy retrieval",
                          },
                        },
                      },
                      nd_ask_gen: {
                        _id: "nd_ask_gen",
                        step_name: "LLM Generation",
                        links: {
                          nd_ask_feedback: {
                            source_id: "nd_ask_gen",
                            target_id: "nd_ask_feedback",
                            user_traffic: 13800,
                            sentiment_intensity: {
                              positive: 0.9,
                              negative: 0.02,
                              neutral: 0.08,
                            },
                          },
                        },
                      },
                      nd_ask_feedback: {
                        _id: "nd_ask_feedback",
                        step_name: "User Rating",
                        links: {},
                      },
                    },
                  },
                },
                silence_metrics: [
                  {
                    feature_name: "Semantic Search",
                    feedback_frequency: "high",
                    satisfication_level: "positive",
                  },
                  {
                    feature_name: "Citation Tool",
                    feedback_frequency: "low",
                    satisfication_level: "positive",
                  },
                ],
                issues_metrics: [
                  {
                    issue_id: "ISS-902",
                    title: "Context window UI warning",
                    status: "in_progress",
                  },
                  {
                    issue_id: "ISS-905",
                    title: "Latex rendering in chat",
                    status: "resolved",
                  },
                ],
                key_insights: [
                  {
                    insight_name: "AI Reliability",
                    insight_description:
                      "RAG pipeline has reached 99.8% factual accuracy based on internal benchmarks.",
                  },
                ],
                voc_digest:
                  "Strong growth in AI-driven support tickets usage. The cite-source feature is the most requested 'silent' win.",
              },
            },
          },
        },
      },
    },
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
                <PopoverTrigger className="w-30 text-xs font-semibold p-2.5 flex items-center gap-1 border rounded-md bg-background/80 hover:bg-background">
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
                <PopoverTrigger className="w-30 text-xs font-semibold p-2.5 flex items-center gap-1 border rounded-md bg-background/80 hover:bg-background">
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
