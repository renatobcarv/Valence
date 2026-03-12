/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * AI Services (Mock implementation for MVP)
 * Emulates the intelligence layer of the Valence platform.
 */


export interface Opportunity {
    id: string;
    customerId: string;
    customerName: string;
    type: "abandoned_lead" | "proposal_without_followup" | "inactive_customer" | "upsell_opportunity" | "churn_risk";
    potentialValue: number;
    recoveryProbability: number;
    recommendedAction: string;
  }
  
  export const aiService = {
    /**
     * Analyzes recent CRM interactions and ranks opportunities based on conversion probability.
     */
    generateOpportunityRanking: async (_organizationId: string): Promise<Opportunity[]> => {
      // Simulation delay
      await new Promise((resolve) => setTimeout(resolve, 800));
  
      return [
        {
          id: "opp-ml-01",
          customerId: "cust-1",
          customerName: "Acme Corp",
          type: "proposal_without_followup",
          potentialValue: 45000,
          recoveryProbability: 85,
          recommendedAction: "Send Email Template: Day 7 Check-in",
        },
        {
          id: "opp-ml-02",
          customerId: "cust-2",
          customerName: "Global Solutions",
          type: "upsell_opportunity",
          potentialValue: 15000,
          recoveryProbability: 92,
          recommendedAction: "Schedule call with Account Executive",
        },
      ];
    },
  
    /**
     * Scans historical data to identify leaked revenue across the entire funnel.
     */
    analyzeLostRevenue: async (_organizationId: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        totalDetected: 1120500,
        funnelLeaks: {
          leadToProposal: 400000,
          proposalToNegotiation: 600000,
          negotiationToClosed: 120500,
        },
        insight: "Maior gargalo detectado entre Envio de Proposta e Negociação (53% da perda total)."
      };
    },
  
    /**
     * Generates personalized messages based on customer behavior.
     */
    generateFollowupMessages: async (_customerId: string, _context: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      return {
        variations: [
          {
            channel: "email",
            subject: "Ainda interessado na nossa proposta?",
            body: "Olá, notamos que você visualizou nossa proposta na semana passada. Ficou alguma dúvida técnica que possamos esclarecer?"
          },
          {
            channel: "whatsapp",
            body: "Oi! Aqui é da equipe Valence. Vi que você conferiu nossa proposta há 7 dias. Posso te ligar amanhã às 14h pra tirar qualquer dúvida?"
          }
        ]
      };
    },
  
    /**
     * Predicts which current paying customers are at risk of leaving.
     */
    predictChurn: async (_organizationId: string) => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return {
        overallRiskScore: 4.2, // out of 100
        atRiskCustomers: [
          { customerId: "cust-8", customerName: "Beta Consulting", riskLevel: "High", reason: "Low platform usage last 30 days" },
          { customerId: "cust-12", customerName: "TechCorp", riskLevel: "Medium", reason: "Support tickets unresolved" }
        ]
      };
    }
  };

  
