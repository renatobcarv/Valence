import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, Database, Link as LinkIcon, AlertCircle } from "lucide-react";

export function IntegrationCards() {
  const integrations = [
    {
      id: "hubspot",
      name: "HubSpot CRM",
      description: "Sincronize contatos, empresas e negócios.",
      icon: Database,
      status: "connected",
    },
    {
      id: "salesforce",
      name: "Salesforce",
      description: "Importe leads e histórico de negociações.",
      icon: Database,
      status: "available",
    },
    {
      id: "shopify",
      name: "Shopify E-commerce",
      description: "Recupere carrinhos abandonados e histórico do cliente.",
      icon: Database,
      status: "available",
    },
    {
      id: "pipedrive",
      name: "Pipedrive",
      description: "Sincronize funis e propostas perdidas.",
      icon: Database,
      status: "available",
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Upload CSV Card */}
      <Card className="border-primary/50 bg-card overflow-hidden">
        <div className="h-2 w-full bg-primary" />
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UploadCloud className="h-5 w-5 text-primary" />
            Upload de Arquivo
          </CardTitle>
          <CardDescription>
            Faça upload de CSV ou Excel com lista de clientes inativos ou leads.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
            <UploadCloud className="h-8 w-8 text-muted-foreground mb-4" />
            <p className="text-sm font-medium">Arraste e solte o arquivo aqui</p>
            <p className="text-xs text-muted-foreground mt-1">Formatos suportados: .csv, .xlsx</p>
            <Button variant="secondary" className="mt-4" size="sm">
              Selecionar Arquivo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Integration Options */}
      {integrations.map((integration) => (
        <Card key={integration.id} className="bg-card flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <integration.icon className="h-5 w-5 text-muted-foreground" />
                {integration.name}
              </CardTitle>
              {integration.status === "connected" ? (
                <Badge variant="outline" className="text-green-500 border-green-500">Conectado</Badge>
              ) : (
                <Badge variant="secondary">Disponível</Badge>
              )}
            </div>
            <CardDescription className="pt-2">{integration.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
             {/* Spacing for layout consistency */}
          </CardContent>
          <CardFooter className="border-t pt-4">
            {integration.status === "connected" ? (
              <Button variant="outline" className="w-full">Gerenciar Conexão</Button>
            ) : (
              <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                <LinkIcon className="h-4 w-4" />
                Conectar Agora
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}

      {/* Future Integration Waitlist */}
      <Card className="bg-muted/30 border-dashed">
        <CardHeader>
          <CardTitle className="text-muted-foreground flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Sua ferramenta não está aqui?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Estamos sempre adicionando novas integrações. Nos conte o que você usa.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Pedir Integração</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
