import {
  Code2,
  Database,
  Globe,
  Server,
  Terminal,
  Laptop,
  Brain,
  Coffee,
  GitBranch,
  Monitor,
  Cloud,
  Cpu
} from 'lucide-react';
import { Category } from '../types';

export const categories: Category[] = [
  {
    name: "Experiência Profissional",
    items: [
      {
        title: "Desenvolvimento Web",
        description: "Desenvolvimento de aplicações web modernas e responsivas",
        icon: Globe,
        details: [
          "Criação de interfaces modernas com React e TypeScript",
          "Desenvolvimento de APIs RESTful",
          "Integração com serviços de terceiros",
          "Otimização de performance e SEO"
        ]
      },
      {
        title: "Backend",
        description: "Desenvolvimento de sistemas robustos e escaláveis",
        icon: Server,
        details: [
          "Arquitetura de microsserviços",
          "Desenvolvimento de APIs",
          "Otimização de banco de dados",
          "Cache e performance"
        ]
      },
      {
        title: "DevOps",
        description: "Implementação de práticas modernas de DevOps",
        icon: Cloud,
        details: [
          "CI/CD com GitHub Actions",
          "Containerização com Docker",
          "Orquestração com Kubernetes",
          "Monitoramento e logs"
        ]
      },
      {
        title: "Suporte Técnico",
        description: "Suporte e manutenção de sistemas",
        icon: Monitor,
        details: [
          "Resolução de problemas técnicos",
          "Documentação de sistemas",
          "Treinamento de usuários",
          "Melhoria contínua"
        ]
      }
    ]
  },
  {
    name: "Linguagens e Tecnologias",
    items: [
      {
        title: "JavaScript",
        description: "Desenvolvimento frontend e backend com JavaScript",
        icon: Code2,
        details: [
          "React e Next.js",
          "Node.js e Express",
          "TypeScript",
          "Testing (Jest, React Testing Library)"
        ]
      },
      {
        title: "Python",
        description: "Desenvolvimento backend e análise de dados",
        icon: Terminal,
        details: [
          "Django e FastAPI",
          "Data Science com Pandas",
          "Automação de processos",
          "Web Scraping"
        ]
      },
      {
        title: "Banco de Dados",
        description: "Experiência com diferentes bancos de dados",
        icon: Database,
        details: [
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Modelagem de dados"
        ]
      },
      {
        title: "DevOps",
        description: "Ferramentas e práticas de DevOps",
        icon: Cpu,
        details: [
          "Docker e Kubernetes",
          "AWS e GCP",
          "Terraform",
          "Monitoramento"
        ]
      }
    ]
  },
  {
    name: "Projetos",
    items: [
      {
        title: "E-commerce",
        description: "Plataforma completa de e-commerce",
        icon: Laptop,
        details: [
          "Next.js e TypeScript",
          "Stripe para pagamentos",
          "Admin dashboard",
          "Analytics e relatórios"
        ]
      },
      {
        title: "IA Chat Bot",
        description: "Chatbot inteligente para atendimento",
        icon: Brain,
        details: [
          "Integração com OpenAI",
          "NLP para processamento",
          "Interface conversacional",
          "Análise de sentimentos"
        ]
      },
      {
        title: "CMS Headless",
        description: "Sistema de gerenciamento de conteúdo",
        icon: Coffee,
        details: [
          "API GraphQL",
          "Painel administrativo",
          "Sistema de permissões",
          "Cache avançado"
        ]
      },
      {
        title: "Open Source",
        description: "Contribuições para projetos open source",
        icon: GitBranch,
        details: [
          "Bibliotecas React",
          "Ferramentas CLI",
          "Documentação",
          "Bug fixes"
        ]
      }
    ]
  }
];