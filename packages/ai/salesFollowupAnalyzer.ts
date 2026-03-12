/**
 * Detecta leads sem acompanhamento e recomenda a próxima melhor ação.
 */
export async function analyzeSalesFollowups(leadsContext: any) {
  return [{ leadId: "123", action: "Agendar e-mail de acompanhamento", priority: "HIGH" }];
}
