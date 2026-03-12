import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Mail, Zap, CheckCircle2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const opportunities = [
  {
    id: "opp-1",
    customer: "TechCorp Industries",
    type: "proposal without follow-up",
    value: "$45,000",
    probability: 85,
    status: "action_needed"
  },
  {
    id: "opp-2",
    customer: "Global Solutions Ltda",
    type: "abandoned lead",
    value: "$12,500",
    probability: 60,
    status: "action_needed"
  },
  {
    id: "opp-3",
    customer: "Nexus Innovations",
    type: "inactive customer",
    value: "$28,000",
    probability: 45,
    status: "in_progress"
  },
  {
    id: "opp-4",
    customer: "Alpha Systems",
    type: "upsell opportunity",
    value: "$15,000",
    probability: 92,
    status: "action_needed"
  },
  {
    id: "opp-5",
    customer: "Beta Consulting",
    type: "proposal without follow-up",
    value: "$8,500",
    probability: 30,
    status: "resolved"
  }
];

export function OpportunitiesTable() {
  const getProbabilityColor = (prob: number) => {
    if (prob >= 80) return "text-green-500 font-bold";
    if (prob >= 50) return "text-yellow-500 font-medium";
    return "text-red-500";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "action_needed":
        return <Badge variant="destructive" className="bg-primary hover:bg-primary/90">Ação Necessária</Badge>;
      case "in_progress":
        return <Badge variant="outline" className="text-yellow-500 border-yellow-500">Em Andamento</Badge>;
      case "resolved":
        return <Badge variant="outline" className="text-green-500 border-green-500">Resolvido</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-muted/50">
            <TableHead className="font-semibold text-foreground">Cliente</TableHead>
            <TableHead className="font-semibold text-foreground">Tipo de Oportunidade</TableHead>
            <TableHead className="font-semibold text-foreground">Valor Potencial</TableHead>
            <TableHead className="font-semibold text-foreground">Conversão (Prob.)</TableHead>
            <TableHead className="font-semibold text-foreground">Status</TableHead>
            <TableHead className="text-right font-semibold text-foreground">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {opportunities.map((opp) => (
            <TableRow key={opp.id} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium">{opp.customer}</TableCell>
              <TableCell className="capitalize text-muted-foreground">{opp.type.replace(/-/g, " ")}</TableCell>
              <TableCell className="font-mono text-white tracking-tight">{opp.value}</TableCell>
              <TableCell className={getProbabilityColor(opp.probability)}>
                {opp.probability}%
              </TableCell>
              <TableCell>{getStatusBadge(opp.status)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Abrir menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover border-border text-popover-foreground">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuItem className="cursor-pointer hover:bg-secondary">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Priorizar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-secondary">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Follow-up
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-secondary">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Marcar Resolvido
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
